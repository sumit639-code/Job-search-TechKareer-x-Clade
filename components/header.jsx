import React from "react";

import { RiNotification2Line } from "react-icons/ri";
import { BsSuitcaseLg } from "react-icons/bs";
import { LuMessageSquare } from "react-icons/lu";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import Dheader from "./dheader";
import Image from "next/image";
const header = () => {
  return (
    <>
      <div className="flex items-center justify-between my-3 mx-6">
        <div className="border-solid border-2 px-6 py-2 bg-[#E7E7E7] text-[#DC4A2D] font-poppins font-[700]">
          Logo
        </div>
        <div className="flex space-x-1 px-1 py-1 border-2 rounded-full font-inter">
          <div className="rounded-full bg-[#DC4A2D] px-2 py-2 text-white flex items-center border-solid border-2 border-[#FCB4A5]">
            <BsSuitcaseLg /> <span className="ml-2">Jobs</span>
          </div>
          <div className="rounded-full px-9 py-2 text-[#B0B0B0] flex justify-center items-center">
            <div className="relative">
              <LuMessageSquare className=" mr-1" />
              <span class="absolute h-[5px] w-[5px] rounded-full bg-red-500  top-0 right-1" />
            </div>
            Messages
          </div>
          <div className="rounded-full pr-2 py-2 text-[#B0B0B0] flex justify-center items-center">
            <LiaHandHoldingUsdSolid className="mr-1" />
            Payments
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="relative">
            <RiNotification2Line className="w-7 h-auto" />
            <span class="absolute h-[6px] w-[6px] rounded-full bg-red-500  top-0 right-1" />
          </div>
          <Image
            src="/atla.png"
            width={100}
            height={100}
            alt="Picture of the author"
            className="w-7 h-auto mr-1 rounded-full"
          />
          <IoIosArrowDown  className="w-5 h-auto"/>
        </div>
      </div>
      <Dheader />
    </>
  );
};

export default header;
