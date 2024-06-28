import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
const RightM = () => {
  return (
    <>
      <div className="bg-zinc-50 w-2/6 px-5 py-7  shadow-lg border-l-[2px] font-sans font-medium">
        <div className="w-[100%] flex justify-center space-x-6">
          <button className="border-solid border-[1px] rounded-md w-[100%] text-[#DC4A2D] bg-[#FEF4F2] border-[#DC4A2D] py-2 flex items-center justify-center">
            <RiDeleteBin6Line className="mr-1" />
            Delete job
          </button>
          <button className=" bg-[#DC4A2D] border-solid border-[1px] rounded-md w-[100%] text-white border-[#FED3CA] flex items-center justify-center">
            <MdOutlineModeEdit className="mr-1" />
            Edit job
          </button>
        </div>
        <div className="m-2 mt-6 font-bold">
          <div className="flex justify-between px-2 py-4 border-b-[1px]">
            <span className="flex justify-center items-center text-[#4F4F4F] font-medium">
              <BsPeople className="mr-2"/>
              Applicants
            </span>
            400
          </div>
          <div className="flex justify-between  px-2 py-4 border-b-[1px]">
            <span className="flex justify-center items-center text-[#4F4F4F] font-medium">
              <BsFillPersonCheckFill className="mr-2"/>
              Matches
            </span>
            100
          </div>
          <div className="flex justify-between  px-2 py-4 border-b-[1px]">
            <span className="flex justify-center items-center text-[#4F4F4F] font-medium">
              <LuMessageSquare className="mr-2"/>
              Messages
            </span>
            147
          </div>
          <div className="flex justify-between  px-2 py-4 ">
            <span className="flex justify-center items-center text-[#4F4F4F] font-medium">
              <LuEye className="mr-2"/>
              Views
            </span>
            800
          </div>
        </div>
      </div>
    </>
  );
};

export default RightM;
