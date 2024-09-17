import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { BookOpenIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="h-[88vh] bg-black bg-cover bg-center">
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I am 
            <span className="text-cyan-400"> Kiet Nguyen</span>
          </h1>
          <h1 className="text-[20px] md:text-[30px] text-gray-400 font-bold">
            And I am a
            <span>
              <TextEffect />
            </span>
            <p className="mt-[0.5rem] text-[20px] text-gray-400">
              Dot NET Developer
            </p>
            <p className="mt-[0.5rem] text-[20px] text-gray-400">Born in Hue</p>
            <p className="mt-[0.5rem] text-[20px] text-gray-400">
              Graduated Applied Mathematics at Hue University of Science
            </p>
            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
              <a type='button' className="px-[2rem] hover:bg-gray-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-cyan-400 text-black flex items-center space-x-2" href="https://drive.google.com/file/d/1efCQI0b9Vi6QWmx4KekUKdp7xRiYBrcY/view?usp=sharing">
                <p> My Curriculum Vitae</p>
                <BookOpenIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </a>
            </div>
          </h1>
        </div>
        <div className="w-[500px] hidden bg-cyan-500 relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/ava2.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
