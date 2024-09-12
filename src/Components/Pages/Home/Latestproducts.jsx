import React from "react";
import Products from "../../../Components/Data/Homepage/Products";

export default function Latestproducts() {
  return (
    <div>
      <div className="w-11/12 mx-auto p-5 mt-10">
        <p className="text-xl font-bold mb-4">Our Latest Products</p>
        <div className="flex gap-6">
          {Products.map((items, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={items.Image}
                alt="Product Image"
                className="h-[285px] w-[293px] object-cover"
              />
              <ul className="list-disc mt-4 ml-10">
                <li className="font-bold">{items.Name}</li>
                <li className="text-xs pt-3">{items.Description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <img src="/images/Frame37867.png" alt="Logo" className="h-[470px] w-full mt-48" />
    </div>
  );
}
