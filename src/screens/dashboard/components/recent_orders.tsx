import React from "react";
import { recentOrderData } from "../../../lib/constants/orders_data";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { getOrderStatus } from "../../../lib/helpers/order_status_fun";

export default function Recentorders() {
  return (
    <div className=" col-span-2 bg-white rounded-sm border border-gray-200 flex flex-col overflow-hidden">
      <strong className="text-gray-700 font-medium p-4">Recent Orders</strong>
      <div className="mt-3 w-full text-xs">
        <table className="w-full overflow-hidden">
          <thead className="bg-gray-200 ">
            <tr className="">
              <th className="text-lg">ID</th>
              <th className="text-lg">Product ID</th>
              <th className="text-lg">Customer Name</th>
              <th className="text-lg">Order Date</th>
              <th className="text-lg">Order Total</th>
              <th className="text-lg">Shipping Address</th>
              <th className="text-lg">Order Status</th>{" "}
            </tr>
          </thead>
          <tbody className="">
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td className="md:text-lg text-sm">
                  <Link to={`/order/${order.id}`}>#{order.id}</Link>
                </td>
                <td className="md:text-lg text-sm">
                  <Link to={`/product/${order.product_id}`}>
                    #{order.product_id}
                  </Link>
                </td>
                <td className="md:text-lg text-sm">
                  <Link to={`/customer/${order.customer_id}`}>
                    {order.customer_name}
                  </Link>
                </td>
                <td className="md:text-lg text-sm">
                  {format(new Date(order.order_date), "dd MMM yyyy")}
                </td>
                <td className="md:text-lg text-sm">{order.order_total}</td>
                <td className="md:text-lg text-sm">{order.shipment_address}</td>
                <td className="md:text-lg text-sm">
                  {getOrderStatus(order.current_order_status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
