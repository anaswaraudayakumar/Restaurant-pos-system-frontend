import React from "react";

const Receipt = React.forwardRef(
  ({ customerData, cartData, billData, paymentMethod }, ref) => {

    return (

      <div
        ref={ref}
        className="p-4 w-100 bg-white text-black font-mono"
      >

        {/* Header */}

        <div className="text-center">

          <h1 className="text-2xl font-bold">
            MAIZON
          </h1>

          <p className="text-sm">
            Thrissur, Kerala
          </p>

        </div>

        <hr className="my-2 border-black" />

        {/* Customer Details */}

        <div className="text-sm space-y-1">

          <p>
            Customer:
            {" "}
            {customerData?.customerName}
          </p>

          <p>
            Phone:
            {" "}
            {customerData?.customerPhone}
          </p>

          <p>
            Table:
            {" "}
            {customerData?.tableNo}
          </p>

          <p>
            Guests:
            {" "}
            {customerData?.guests}
          </p>

          <p>
            Date:
            {" "}
            {new Date().toLocaleString()}
          </p>

        </div>

        <hr className="my-2 border-black" />

        {/* Item Heading */}

        <div className="flex justify-between font-bold text-sm mb-2">

          <p>Item</p>

          <p>Total</p>

        </div>

        {/* Items */}

        {
          cartData?.map((item, index) => (

            <div
              key={index}
              className="flex justify-between text-sm mb-1"
            >

              <div>

                <p>
                  {item?.name}
                </p>

                <p className="text-xs">
                  ₹{item?.price}
                  {" "}x{" "}
                  {item?.quantity}
                </p>

              </div>

              <p>
                ₹{(item?.price * item?.quantity).toFixed(2)}
              </p>

            </div>

          ))
        }

        <hr className="my-2 border-black" />

        {/* Bill Summary */}

        <div className="space-y-1 text-sm">

          <div className="flex justify-between">

            <p>Subtotal</p>

            <p>
              ₹{billData?.total?.toFixed(2)}
            </p>

          </div>

          <div className="flex justify-between">

            <p>Tax</p>

            <p>
              ₹{billData?.tax?.toFixed(2)}
            </p>

          </div>

          <div className="flex justify-between font-bold text-lg">

            <p>Total</p>

            <p>
              ₹{billData?.totalWithTax?.toFixed(2)}
            </p>

          </div>

        </div>

        <hr className="my-2 border-black" />

        {/* Payment */}

        <p className="text-sm">
          Payment:
          {" "}
          {paymentMethod}
        </p>

        <hr className="my-2 border-black" />

        {/* Footer */}

        <div className="text-center mt-4">

          <p className="font-semibold">
            Thank You Visit Again!
          </p>

        </div>

      </div>
    );
  }
);

export default Receipt;