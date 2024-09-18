"use client"
import React, { useState } from "react";

export default function Form() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown
  const [selectedOption, setSelectedOption] = useState("Choose"); // State for selected option

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selecting
  };

  return (
    <div>
      <div className="mt-5 ">
        <form className="w-2/4 mx-auto">
          <div className="flex space-x-10 w-full">
            <div className="bg-[#EFF6FF] flex flex-col w-full h-28 p-4  rounded-2xl">
              <label className="font-jost font-normal pt-1">Full Name *</label>
              <input
                placeholder="Full Name"
                className="bg-transparent border-b-2 border-black pt-5 text-sm"
              />
            </div>
            <div className="bg-[#EFF6FF] flex flex-col w-full h-28 p-4  rounded-2xl">
              <label className="font-normal font-jost pt-1">Company Name *</label>
              <input
                placeholder="Company Name"
                className="bg-transparent border-b-2 border-black pt-5 text-sm"
              />
            </div>
          </div>
          <div className="flex space-x-10 w-full mt-8">
            <div className="bg-[#EFF6FF] flex flex-col w-full h-28 p-4  rounded-2xl">
              <label className="font-jost font-normal pt-1">Email *</label>
              <input
                placeholder="Email"
                className="bg-transparent border-b-2 border-black pt-5 text-sm"
              />
            </div>
            <div className="bg-[#EFF6FF] flex flex-col w-full h-28 p-4  rounded-2xl">
              <label className="font-normal font-jost pt-1">Whatsapp Number *</label>
              <input
                placeholder="Whatsapp Number"
                className="bg-transparent border-b-2 border-black pt-5 text-sm"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-[#EFF6FF] flex flex-col w-full h-28 p-4  rounded-2xl">
              <label className="font-normal font-jost pt-1">Address *</label>
              <input
                placeholder="Address"
                className="bg-transparent border-b-2 border-black pt-5 text-sm"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-[#EFF6FF] flex flex-col w-full h-28 p-4  rounded-2xl">
              <label className="font-normal font-jost pt-1">Are you interested in? *</label>
              <div className="relative mt-5">
                {/* Dropdown button */}
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="bg-transparent text-sm border-b-2 border-black outline-none w-full text-left flex justify-between items-center"
                >
                  {selectedOption}
                  <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                  <ul className="absolute -left-4 bg-[#EFF6FF] pb-6 mt-2 z-10 w-full  rounded-2xl">
                    <li
                      className="border-b-2 border-[#B1B1B1] pt-6 w-[725px] mx-auto cursor-pointer"
                      onClick={() => selectOption("VIDI Products")}
                    >
                      VIDI Products
                    </li>
                    <li
                      className="border-b-2 border-[#B1B1B1] pt-1 pb-1  w-[725px] mx-auto cursor-pointer"
                      onClick={() => selectOption("Channel Partner")}
                    >
                      Channel Partner
                    </li>
                    <li
                      className="border-b-2 border-[#B1B1B1] pt-1 pb-1 w-[725px] mx-auto cursor-pointer"
                      onClick={() => selectOption("VIDI Rewards")}
                    >
                      VIDI Rewards
                    </li>
                    <li
                      className="border-b-2 border-[#B1B1B1] pt-1 pb-1 w-[725px] mx-auto cursor-pointer"
                      onClick={() => selectOption("Employment & Careers")}
                    >
                      Employment & Careers
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8 w-full">
            <div className="bg-[#EFF6FF] flex flex-col w-full h-28 p-4  rounded-2xl">
              <label className="font-normal font-jost pt-1">Subject *</label>
              <input
                placeholder="Communicate with us"
                className="bg-transparent border-b-2 border-black pt-5 text-sm"
              />
            </div>
          </div>
          <div className="w-full flex justify-end items-end py-4">
                <button className="bg-[#0078D4] rounded-md text-white px-10 py-3 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
