import React from "react";
import SmallScreenDialogs from "./SmallScreenDailogs";
import FullScreenDialogs from "./FullScreenDialog";

const Header = () => {
  return (
    <div className="w-full h-fit flex flex-wrap bg-dark">
      <div className="w-1/3 h-fit ">
        <h1>Foody</h1>

      </div>
      <div className="w-1/3 h-fit ">
        <h1>Foody</h1>

      </div>
      <div className="w-1/3 h-fit ">
      <SmallScreenDialogs />
      <FullScreenDialogs />


      </div>
       
    </div>
  )
}

export default Header