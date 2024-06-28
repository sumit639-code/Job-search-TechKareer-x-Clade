import React from "react";

const dheader = () => {
  return (
    <>
      <div className="border-solid border-2 flex items-center space-x-9 x-2 py-3 pl-20 font-sans font-[500]">
        <div className="text-[#DC4A2D] font-sans font-[700] text-center relative flex justify-center">
          Job preview
          <span className="absolute w-12 h-[2px] bg-[#DC4A2D] -bottom-3  "></span>
          </div>
        <div>Applicants</div>
        <div>Match</div>
        <div>Messages</div>
      </div>
    </>
  );
};

export default dheader;
