import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="bg-black pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-gray-400 mb-[1rem]">
            
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            About me & 
            <span className="text-cyan-400"> My Objective</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              I have 4 years experience of software development in C, .NET, .NET
              Core, Javascript and JQuery, SQL. And in the future I want to focus on develop
              me core skills as an Full-stack developer.
            </p>
          </div>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Besides, I have known and had a few experience with React,
              Angular. Further I want to improve my Front-end skills so I want
              to participate in well projects that help me to working with these
              frameworks. Moreover I want to upgrade and working with cloud computing.
            </p>
          </div>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              As an technologies lover I always self-study new languages and technologies.
              So I have known about Python, Golang, Solidity and Rust by participate Hackathons and Codecation. 
              I think that will help for my future career.
            </p>
          </div>
          {/* <button className="px-[2rem] hover:bg-gray-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-cyan-400 text-black flex items-center space-x-2">
            <p> Download CV</p>
            <ArrowDownCircleIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button> */}
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image
            src="/images/dev-image.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-gray-400 top-[-2rem] right-[-2rem]"></div>
          </div>
      </div>
    </div>
  );
}

export default About;
