import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { TbCoins } from "react-icons/tb";

const LeftM = () => {
  return (
    <>
      <div className="flex flex-col w-[100%]">
        <div className="pl-20 border-b-[1px] py-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold">Senior Product Designer</span>
            <div className="w-1 h-1 bg-[#989c9a] rounded-full mr-2"></div>
            <span className="opacity-70">posted 2 days ago</span>
            <button className="px-4 py-1 bg-[#ECFDF3] border-[1px] border-[#ABEFC6] text-[#067647] rounded-full flex items-center ">
              <div className="w-2 h-2 bg-[#17B26A] rounded-full mr-2"></div>Open
            </button>
          </div>
          <div className="mt-4 flex space-x-9 text-[15px] text-[#2c2c2cf1] font-sans">
            <span className="flex items-center ">
              <CiLocationOn className="mr-1" /> Delaware, USA
            </span>
            <span className=" flex items-center">
              <TbCoins className="mr-1" />
              $300k-$400k
            </span>
          </div>
        </div>

        <div className="pl-20 flex border-b-[1px] pt-4 pb-6 justify-between font-sans pr-80">
          <div className="flex flex-col text-sm">
            <span className=" mb-2">Skills Required</span>
            <span className=" w-max flex items-center px-2 py-1 border-[1px] rounded-md border-slate-400 ">
              <Image
                src="/figma.png"
                width={100}
                height={100}
                alt="Picture of the author"
                className="w-5 h-5 mr-1"
              />
              Figma
            </span>
            <span className=" w-max flex items-center px-2 py-1 border-[1px] rounded-md my-2 border-slate-400 ">
              <Image
                src="/illustrator.png"
                width={100}
                height={100}
                alt="Picture of the author"
                className="w-5 h-5 mr-1"
              />
              Adobe Illustrator
            </span>
            <span className=" w-max flex items-center px-2 py-1 border-[1px] rounded-md border-slate-400 ">
              <Image
                src="/xd.png"
                width={100}
                height={100}
                alt="Picture of the author"
                className="w-5 h-5 mr-1"
              />
              Adobe XD
            </span>
          </div>
          <div className="flex flex-col">
            Prefered language
            <span className="font-bold">English</span>
          </div>
          <div className="flex flex-col">
            Type
            <span className="font-bold">Full Time</span>
          </div>
          <div className="flex flex-col">
            years of expirence
            <span className="font-bold">3+ years of expirience</span>
          </div>
        </div>

        <div className="pl-20 border-b-[1px] text-[#3D3D3D] font-semibold py-6">
          <h2 className="text-sm font-medium text-slate-400">About the job</h2>
          <ul className="list-decimal ml-[18px]">
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works
            </li>
          </ul>
          <h3 className="font-semibold  ">Benefits:</h3>
          <ul className="list-disc ml-7">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
          <h3 className="font-semibold ">Schedule:</h3>
          <ul className="list-disc ml-7">
            <li>Day shift</li>
          </ul>
          <h3 className="font-semibold ">Supplemental pay types:</h3>
          <ul className="list-disc ml-7">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
          <p>Work Location: In person</p>
        </div>

        <div class="pl-20 pb-6 bg-white shadow-md rounded-lg font-sans py-6">
          <div class="flex items-center space-x-4 mb-6">
          <Image
                src="/atla.png"
                width={100}
                height={100}
                alt="Picture of the author"
                className="w-8 h-8 mr-1"
              />
            <h1 class="font-[500] text-[#4F4F4F] text-[20px]">Atlassian</h1>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h2 class=" text-base">Company size</h2>
              <p class="font-semibold mb-1">1k - 2k Employees</p>
            </div>
            <div>
              <h2 class="text-base">Type</h2>
              <p class="font-semibold mb-1">Private</p>
            </div>
            <div>
              <h2 class=" text-base">Sector</h2>
              <p class="font-semibold mb-1">
                Information Technology, Infrastructure
              </p>
            </div>
            <div>
              <h2 class=" text-base">Funding</h2>
              <p class="font-semibold mb-1">Bootstrapped</p>
            </div>
            <div>
              <h2 class="text-base">Founded In</h2>
              <p class="font-semibold mb-1">2019</p>
            </div>
            <div>
              <h2 class=" text-base ">Founded By</h2>
              <p class="font-semibold mb-1">
                Scott Farquhar, Mike Cannon-Brookes
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftM;
