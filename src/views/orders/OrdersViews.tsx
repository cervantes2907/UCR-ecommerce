import IOrder from '@/interfaces/IOrders';
import { getAllOrdersUser } from '@/utils/ordersUtils';
import { cookies } from 'next/headers';
import React from 'react';

const OrdersViews = async () => {
  const cookieStore = cookies();
  const userData = JSON.parse(cookieStore.get("userData")?.value ?? "{}");
  const orders: IOrder[] = await getAllOrdersUser(userData.token);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">My Orders</h1>
      {orders && orders.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {orders.map((order) => (
            <div key={order.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700">
                  <strong>Status:</strong> <span className="text-blue-600">{order.status.toLocaleUpperCase()}</span>
                </p>
                <p className="text-gray-600">
                  <strong>Date:</strong> {new Date(order.date)?.toLocaleString()}
                </p>
              </div>
              <h3 className="text-lg font-semibold mb-2">Products:</h3>
              {order.products && order.products.length > 0 ? (
                <ul className="space-y-3">
                  {order.products.map((product) => (
                    <li key={product.id} className="flex items-center justify-between bg-gray-100 rounded-md p-3">
                      <div>
                        <p className="text-gray-800 font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No products found for this order.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No orders available.</p>
      )}
    </div>
  );
};

export default OrdersViews;
