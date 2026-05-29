import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTotalPrice } from '../../redux/slices/cartSlice'
import { clearCart } from '../../redux/slices/cartSlice'        // add this action
import { useState } from 'react'
import { toast } from 'react-toastify';
import { createOrderAPI, verifyPaymentAPI, addOrderAPI } from '../../services/allApi';
import { useReactToPrint } from 'react-to-print'
import Receipt from './Recipt'

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function BillInfo({ onOrderSuccess }) {

  // accept callback from parent
  const dispatch = useDispatch()
  const receiptRef = useRef(null)
  const cartData = useSelector((state) => state.cart)
  const customerData = useSelector((state) => state.customer)
  const totalPrice = useSelector(getTotalPrice)
  const taxRatePerItem = 4.32
  const tax = (totalPrice * taxRatePerItem) / 100
  const totalPriceWithTax = totalPrice + tax
  const [paymentMethod, setPaymentMethod] = useState()

  //  store latest values in refs so Razorpay callback always gets fresh data
  const customerRef = useRef()
  const cartRef = useRef()
  const billRef = useRef()

  const handlePrint = useReactToPrint({
     contentRef: receiptRef,
  })

  const submitOrder = async (method, customer, cart, bills) => {
    const orderDetails = {
      customerDetails: {
        customerName: customer.customerName,
        customerPhone: String(customer.customerPhone),
        guests: customer.guests,
        tableNo: customer.tableNo
      },
      orderStatus: "In Progress",
      orderDate: new Date(),
      paymentMethod: method,
      bills: {
        total: bills.total,
        tax: bills.tax,
        totalWithTax: bills.totalWithTax
      },
      items: cart
    };

    console.log("Sending orderDetails:", orderDetails);   // verify once
    const response = await addOrderAPI(orderDetails);
    return response;
  }

  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      toast.warning("Please select a Payment Method!")
      return
    }

    // save latest values into refs before any async work
    customerRef.current = customerData
    cartRef.current = cartData
    billRef.current = { total: totalPrice, tax, totalWithTax: totalPriceWithTax }

    if (paymentMethod === "Cash") {
      try {
        await submitOrder("Cash", customerRef.current, cartRef.current, billRef.current)
        toast.success("Cash Order Placed")
        onOrderSuccess?.()          // notify parent (Assign button will call this)
      } catch (error) {
        console.log(error)
        toast.error("Failed to place cash order")
      }
      return
    }

    // Online / Razorpay
    try {
      const respo = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
      if (!respo) {
        toast.warning("Razorpay SDK failed to load, are you online?")
        return
      }

      const { data } = await createOrderAPI({ amount: Math.round(totalPriceWithTax * 100) })

      const options = {
        key: `${import.meta.env.VITE_RAZORPAY_KEY_ID}`,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "MAIZON",
        description: "Secure Payment for Your Meal",
        order_id: data.order.id,
        handler: async function (response) {
          const verification = await verifyPaymentAPI(response)
          if (verification.status === 200) {
            try {
              // use refs here — closure won't capture stale state
              await submitOrder("Online", customerRef.current, cartRef.current, billRef.current)
              toast.success("Order placed successfully")
              onOrderSuccess?.()     // notify parent
            } catch (err) {
              console.log(err)
              toast.error("Order saving failed after payment")
            }
          }
        },
        prefill: {
          name: customerData.customerName,
          email: "",
          contact: customerData.customerPhone,
        },
        theme: { color: "#025cca" },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()

    } catch (error) {
      console.log(error)
      toast.error("Payment failed")
    }
  }

  return (
    <>
      <div className='flex items-center justify-between px-5 mt-1'>
        <p className='text-xs text-gray-400 font-medium mt-2'>Items({cartData.length})</p>
        <h1 className='text-white text-md font-bold'>₹{totalPrice.toFixed(2)}</h1>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs text-gray-400 font-medium mt-2'>Tax(4.32%)</p>
        <h1 className='text-white text-md font-bold'>₹{tax.toFixed(2)}</h1>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs text-gray-400 font-medium mt-2'>Total with Tax</p>
        <h1 className='text-white text-md font-bold'>₹{totalPriceWithTax.toFixed(2)}</h1>
      </div>
      <div className='flex items-center gap-3 px-5 mt-4'>
        <button onClick={() => setPaymentMethod("Cash")}
          className={`px-4 py-3 w-full rounded-lg text-white font-semibold ${paymentMethod === "Cash" ? "bg-neutral-800" : "bg-neutral-600"}`}>
          Cash
        </button>
        <button onClick={() => setPaymentMethod("Online")}
          className={`px-4 py-3 w-full rounded-lg text-white font-semibold ${paymentMethod === "Online" ? "bg-neutral-800" : "bg-neutral-600"}`}>
          Online
        </button>
      </div>
      <div className='flex items-center gap-3 px-5 mt-4'>
        <button
          onClick={handlePrint}
          className='bg-blue-800 px-3 py-3 w-full rounded-lg text-white font-semibold text-lg'
        >
          Print Receipt
        </button>
        <button onClick={handlePlaceOrder}
          className='bg-yellow-400 px-4 py-3 w-full rounded-lg text-neutral-800 font-semibold text-lg'>
          Place Order
        </button>
      </div>
      <div className="hidden">

    <Receipt
      ref={receiptRef}
      customerData={customerData}
      cartData={cartData}
      billData={{
        total: totalPrice,
        tax,
        totalWithTax: totalPriceWithTax
      }}
      paymentMethod={paymentMethod}
    />

  </div>
    </>
  )
}

export default BillInfo