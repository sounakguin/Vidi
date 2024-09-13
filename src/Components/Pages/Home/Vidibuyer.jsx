"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Vidibuyer() {
  const [clickedDiv, setClickedDiv] = useState(null);

  // Object mapping div text to specific messages
  const messages = {
    rigister:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text type specimen book.",
    category:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text type specimen book.",
    friver:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text type specimen book.",
    jikokok:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text type specimen book.",
  };

  // Function to handle click and set the clicked div
  const handleClick = (text) => {
    setClickedDiv(text);
  };

  return (
    <div>
      <div className="w-11/12 mx-auto  p-5">
        <p className="font-bold text-[48px] mt-20 mb-16 pl-1">
          Become a Vidi buyer
        </p>
        <div className="flex space-x-5">
          <div className="flex flex-col space-y-5 ">
            <div
              onClick={() => handleClick("rigister")}
              className="w-[800px] bg-[#EFF6FF] p-6 text-[30px] font-bold rounded-xl"
            >
              Register
              {clickedDiv === "rigister" && (
                <div>
                  <p className="mt-2 text-[20px] font-normal">
                    {messages["rigister"]}
                  </p>
                  <p className="text-[20px] text-[#717171] pt-3">Get started</p>
                </div>
              )}
            </div>
            <div
              onClick={() => handleClick("category")}
              className="w-[800px] bg-[#EFF6FF] p-6 text-[30px] font-bold rounded-xl"
            >
              Choose category & complete payment
              {clickedDiv === "category" && (
                <p className="mt-2">{messages["category"]}</p>
              )}
            </div>
            <div
              onClick={() => handleClick("friver")}
              className="w-[800px] bg-[#EFF6FF] p-6 text-[30px] font-bold rounded-xl"
            >
              Doorstep Delivery
              {clickedDiv === "friver" && (
                <p className="mt-2">{messages["friver"]}</p>
              )}
            </div>
            <div
              onClick={() => handleClick("jikokok")}
              className="w-[800px] bg-[#EFF6FF] p-6 text-[30px] font-bold rounded-xl"
            >
              Participate in Customer Loyalty Programme
              {clickedDiv === "jikokok" && (
                <p className="mt-2">{messages["jikokok"]}</p>
              )}
            </div>
          </div>
          <div>
            <Image
              src="/images/image.png"
              alt="Logo"
              width={760}
              height={580}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
