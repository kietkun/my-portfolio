import { CodeBracketIcon, ComputerDesktopIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import React from "react";

function Experiences() {
  return (
    <div className="bg-black pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        Working <span className="text-cyan-400">Experience</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="bg-orange-500 hover:sclae-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <ComputerDesktopIcon className="w-[6rem] h-[6rem] mx-auto text-gray-400" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                Full-stack Developer
            </h1>
            <h2 className="text-[15px] md:text-[25px] mt-[1rem] mb-[1rem]">
                FPT Software
            </h2>
            <p className="text-[15px] text-gray-200">
                Sep 2021 - now
            </p>
          </div>
        </div>
        <div>
          <div className="bg-green-500 hover:sclae-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <DevicePhoneMobileIcon className="w-[6rem] h-[6rem] mx-auto text-gray-400" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                Mobile Developer
            </h1>
            <h2 className="text-[15px] md:text-[25px] mt-[1rem] mb-[1rem]">
                Freelancer
            </h2>
            <p className="text-[15px] text-gray-200">
                Aug 2020 - Sep 2020
            </p>
          </div>
        </div>
        <div>
          <div className="bg-blue-500 hover:sclae-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-gray-400" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                Back-end Developer
            </h1>
            <h2 className="text-[15px] md:text-[25px] mt-[1rem] mb-[1rem]">
                3S Intersoft
            </h2>
            <p className="text-[15px] text-gray-200">
                Jan 2020 - Apr 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
