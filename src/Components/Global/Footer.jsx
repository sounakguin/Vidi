import React from "react";

export default function Footer() {
  return (
    <div className="mt-6">
      <div className="bg-[#F4F4F4] border border-[#BFBFBF] pt-12 pb-12">
        <div className="flex justify-around">
          <div className="flex-col">
            <img
              src="/images/logo2.png"
              alt="Logo"
              className="h-[83px] w-[167px]"
            />
            <p className="w-80 leading-7">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form believable.
              If you are going to use a passage of Lorem Ipsum
            </p>
          </div>
          <div className="flex-col text-[#515151] text-sm leading-7">
            <p className="text-base text-black">Our Company</p>
            <p className="pt-3">About us</p>
            <p>Contact us</p>
            <p>Join hands</p>
            <p>Events & Exhibition</p>
            <p>Company’s programme</p>
            <p>Support</p>
          </div>
          <div className="flex-col text-[#515151] text-sm leading-7">
            <p className="text-base text-black">Products & Services</p>
            <p className="pt-3">Products</p>
            <p>Product Demo</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className="border border-black w-4/5 mx-auto mt-24"></div>
        <div className="flex w-4/5 mx-auto justify-between mt-8 ">
          <div className="flex space-x-3 pt-2">
            <img
              src="/images/Facebook.png"
              alt="Logo"
              className="h-[20px] w-[20px] "
            />
            <img
              src="/images/Instragram.png"
              alt="Logo"
              className="h-[20px] w-[20px]"
            />
            <img
              src="/images/YouTube.png"
              alt="Logo"
              className="h-[20px] w-[20px]"
            />
          </div>
          <div className="flex space-x-3 ">
            <img
              src="/images/Frame.png"
              alt="Logo"
              className="h-[40px] w-[135px] pl-1"
            />
            <img
              src="/images/Frame1.png"
              alt="Logo"
              className="h-[40px] w-[135px]"
            />
          </div>
        </div>
        <div className="flex w-4/5 mx-auto justify-between mt-5 text-xs text-[#535768]">
          <div className="flex">
            <p className="border border-[#515151] border-t-0 border-l-0 border-b-0 pr-3">
              Return & replacement policy
            </p>
            <p className="border border-[#515151] border-t-0 border-l-0 border-b-0 pr-3 pl-2">
              Privacy & Policies
            </p>
            <p className="pl-2">Billing & shipping policy</p>
          </div>
          <div>
            <p className="">All Rights Reserved © vidi.co.in</p>
          </div>
          <div className="flex mr-32 space-x-2">
            <img
              src="/images/Frame2.png"
              alt="Logo"
              className="h-[18px] w-[18px]"
            />
            <p >
            Accessibility statement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
