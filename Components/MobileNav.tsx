import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

function MobileNav({ nav, closeNav }: Props) {
  const navActive = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navActive} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-cyan-500`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">Home</div>
        <div className="nav-link-mobile">About</div>
        <div className="nav-link-mobile">Experiences</div>
        <div className="nav-link-mobile">Contact</div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-gray-500"
      >
        <XMarkIcon />
      </div>
    </div>
  );
}

export default MobileNav;
