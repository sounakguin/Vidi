import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-6">
      <div className="bg-[#F4F4F4] border border-[#BFBFBF] pt-12 pb-12">
        <div className="flex justify-around">
          <div className="flex-col">
            <Image src="/images/logo2.png" alt="Logo" width={167} height={83} />
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
            <Image
              src="/images/Facebook.png"
              alt="Logo"
              width={20}
              height={20}
            />
            <Image
              src="/images/Instragram.png"
              alt="Logo"
              width={20}
              height={20}
            />
            <Image
              src="/images/YouTube.png"
              alt="Logo"
              width={20}
              height={20}
            />
          </div>
          <div className="flex space-x-3 ">
            <Image
              src="/images/Frame.png"
              alt="Logo"
              width={135}
              height={40}
              className="pl-1"
            />
            <Image
              src="/images/Frame1.png"
              alt="Logo"
              width={135}
              height={40}
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
            <Image src="/images/Frame2.png" alt="Logo" width={18} height={18} />
            <p>Accessibility statement</p>
          </div>
        </div>
      </div>
    </div>
  );
}
