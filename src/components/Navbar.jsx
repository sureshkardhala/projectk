import React from "react";
import foodylogo from "../assets/foody-logo.png";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="w-full h-fit flex flex-wrap p-4 py-5 md:py-5 md:px-32 shadow-md border-gray-300 justify-between">
      <div className="flex md:w-1/6 h-fit  flex-row cursor-pointer text-gray-600 hover:text-gray-500 duration-300">
        <h1 className="text-2xl font-bold ">Foody</h1>
        <img src={foodylogo} alt="" className="w-8 h-8 mx-1" />
      </div>
      <div className="hidden  md:block w-2/3 h-10 p-2 border-[1px] border-gray-400 rounded-3xl">
        <h1 className="">Foody</h1>
      </div>
      <div className="hidden md:block w-1/3 md:w-1/6 h-fit ">
        <Profile />
      </div>
      
    </div>
  );
};

export default Navbar;
