import React from "react";
import { popularProducts } from "../../../lib/constants/products_data";

export default function Products() {
  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Products</strong>
      <div className="mt-3 w-full h-96 flex-1 text-xs">
        {popularProducts.map((product, index) => (
          <div>
            <div className="flex justify-around items-center m-2">
              <span className=" w-1/4 text-6xl">{product.icon}</span>
              <div className=" w-1/2 flex flex-col justify-center items-start">
                <div className="text-2xl overflow-hidden">
                  {product.product_name}
                </div>
                <div className=" text-lg">{product.product_stock}</div>
              </div>
              <div className=" w-1/4 text-right text-lg">
                {product.product_price}
              </div>
            </div>
            {index + 1 < popularProducts.length ? (
              <hr className="border-t-2 border-gray-300 my-4" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
