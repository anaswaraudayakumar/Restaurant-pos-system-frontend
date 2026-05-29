import React, { useEffect, useState } from "react";
import { allOrdersAPI, updateOrderAPI } from "../../services/allApi";
import { toast } from "react-toastify";

function RecentOrders() {

  const [orders, setOrders] = useState([]);

  // fetch all orders
  const getAllOrders = async () => {
    try {

      const response = await allOrdersAPI();

      if (response.status === 200) {
        setOrders(response.data.orders);
      }

    } catch (error) {
      console.log(error);

      toast.error("Failed to fetch orders");
    }
  };

  // update order status
  const handleStatusChange = async (id, status) => {

    try {

      const response = await updateOrderAPI(id, {
        orderStatus: status,
      });

      if (response.status === 200) {

        toast.success("Order status updated");

        // refresh orders
        getAllOrders();
      }

    } catch (error) {

      console.log(error);

      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  // format date
  const formatDateAndTime = (date) => {

    return new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="container mx-auto bg-[#262626] p-4 rounded-lg">

      <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
        Recent Orders
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-left text-[#f5f5f5]">

          <thead className="bg-[#333] text-[#ababab]">

            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Items</th>
              <th className="p-3">Total</th>
              <th className="p-3 text-center">Payment Method</th>
            </tr>

          </thead>

          <tbody>

            {orders?.map((order, index) => (

              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-[#333]"
              >

                <td className="p-4">
                  #{Math.floor(new Date(order.orderDate).getTime())}
                </td>

                <td className="p-4">
                  {order.customerDetails.customerName}
                </td>

                <td className="p-4">

                  <select
                    className={`bg-[#1a1a1a] border border-gray-500 p-2 rounded-lg focus:outline-none
                    ${order.orderStatus === "Ready"
                        ? "text-green-500"
                        : order.orderStatus === "Completed" ?
                          "text-blue-500"
                          : "text-yellow-500"
                      }`}
                    value={order.orderStatus}
                    onChange={(e) =>
                      handleStatusChange(
                        order._id,
                        e.target.value
                      )
                    }
                  >

                    <option
                      className="text-yellow-500"
                      value="In Progress"
                    >
                      In Progress
                    </option>

                    <option
                      className="text-green-500"
                      value="Ready"
                    >
                      Ready
                    </option>

                    <option
                      className="text-blue-500"
                      value="Completed"
                    >
                      Completed
                    </option>

                  </select>

                </td>

                <td className="p-4">
                  {formatDateAndTime(order.orderDate)}
                </td>

                <td className="p-4">
                  {order.items.length} Items
                </td>

                <td className="p-4">
                  ₹{order.bills.totalWithTax}
                </td>

                <td className="p-4 text-center">
                  {order.paymentMethod}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RecentOrders;