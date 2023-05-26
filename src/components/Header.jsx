import React from "react";
import foodylogo from "../assets/foody-logo.png";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="w-full h-fit py-4 px-32 border-b-[1px] shadow-md border-gray-300 flex flex-wrap">
      <div className="w-1/6 h-fit flex flex-row">
        <h1 className="text-2xl font-bold text-gray-600 hover:text-gray-500 duration-300 cursor-pointer">Foody</h1>
        <img src={foodylogo}
        alt=""
         className="w-8 h-8 mx-1"/>
      </div>
      <div className="w-2/3 h-10 p-2 border-[1px] border-gray-400 rounded-3xl">
        <h1 className="">Foody</h1>
      </div>
      <div className="w-1/6 h-fit">
        <Profile />
      </div>
       
    </div>
  )
}

export default Header;