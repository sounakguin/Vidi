"use client"
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-6">
      <div className="bg-[#F4F4F4] border border-[#BFBFBF] pt-12 pb-12">
        <div className="flex justify-between px-28">
          <div className="flex-col">
            <Image src="/images/logo2.png" alt="Logo" width={167} height={83} />
            <span className="w-80 flex flex-col gap-2">
              {/* <span className="text-lg font-medium uppercase">Khabya Technologies Pvt Ltd</span>
              <span className="text-base">9274686956</span>
              <span className="text-base">support@vidi.co.in</span>
              <span>Plot No. 871, Road No 84, GIDC, Sachin, Surat, Gujarat, 394230</span> */}
              VIDI- Khabya Technologies Pvt. Ltd. is one of the most recognized and trusted brands nationally for the manufacture, distribution, supply and trading of Reverse Osmosis (RO) components such as Domestic RO Booster Pumps, RO Inline Filters, RO Membrane, RO Housing, RO Spun Filter and many other spare parts.
            </span>
          </div>
          <div className="flex-col text-[#515151] text-sm ">
            <p className="text-base text-black leading-7">Our Company</p>
            <p onClick={()=> window.location.href = "/about"} className="pt-3">About us</p>
            <p onClick={()=> window.location.href = "/contactus"} className="pt-3">Contact us</p>
            {/* <p>Join hands</p>
            <p>Events & Exhibition</p>
            <p>Company’s programme</p>
            <p>Privacy & Policies</p> */}
          </div>
          <div className="flex-col text-[#515151] text-sm leading-7">
            <p className="text-base text-black">KHABYA TECHNOLOGIES PVT LTD.</p>
            <p className="pt-3">9274686956</p>
            <p>support@vidi.co.in</p>
            <p>Plot No. 871, Road No 84, GIDC, Sachin, Surat, Gujarat, 394230</p>
            {/* <p>Blog</p>
            <p>FAQs</p> */}
          </div>
        </div>
        <div className="border border-black w-full mx-auto mt-24"></div>
        <div className="flex w-full px-28 mx-auto justify-between mt-8 ">
          <div className="flex space-x-3 pt-2">
            <Image
              src="/images/Facebook.png"
              alt="Logo"
              width={40}
              height={40}
              className=""
              onClick={()=> window.location.href = "https://www.facebook.com/profile.php?id=100093188166062"}

            />
            <Image
              src="/images/Instragram.png"
              alt="Logo"
              width={40}
              height={40}
              className=""
              onClick={()=> window.location.href = "https://www.instagram.com/khabya_technologies_pvt_ltd/"}

            />
            <Image
              src="/images/YouTube.png"
              alt="Logo"
              width={40}
              height={40}
              className=""
              onClick={()=> window.location.href = "https://www.youtube.com/@khabyatechnologies"}

            />
          </div>
          {/* <div className="flex space-x-3 ">
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
          </div> */}
        </div>
        <div className="flex w-full px-28 mx-auto justify-between mt-5 text-xs text-[#535768]">
          <div className="flex ">
            <p className=" border-[#515151] border-t-0 border-l-0 border-b-0 pr-3">
              {/* Return & replacement policy */}
            </p>
            <p className=" border-[#515151] border-t-0 border-l-0 border-b-0 pr-3 pl-2">
              {/* Privacy & Policies */}
            </p>
            {/* <p className="pl-2">Billing & shipping policy</p> */}
          </div>
          <div>
            <p className="">All Rights Reserved © Khabya Technologies Pvt LTD.</p>
          </div>
          <div className="flex space-x-2">
            <Image src="/images/Frame2.png" alt="Logo" width={18} height={18} />
            <p className="hover:underline">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
