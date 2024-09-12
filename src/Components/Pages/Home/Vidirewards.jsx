import React from "react";
import Rewards from "../../../Components/Data/Homepage/Vidirewards";

export default function Vidirewards() {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <p className="font-bold text-3xl mt-16 mb-12 pl-5">
          Know More about VIDI Rewards
        </p>
        <div className=" flex space-x-10 justify-center ">
          {Rewards.map((items, index) => (
            <div
              key="index"
              className="flex flex-col border border-[#AFAFAF] p-4 w-[240px] rounded-xl"
            >
              <img src={items.Image} alt="Logo" className="h-[40px] w-[40px]" />
              <p className="text-xs font-bold pt-4">{items.Subtitle}</p>
              <p className="pt-4">{items.Title}</p>
              <p className="text-[#737373] text-sm pt-4">{items.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
