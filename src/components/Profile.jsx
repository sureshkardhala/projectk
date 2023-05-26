import React from "react";
import SmallScreenDialogs from "./SmallScreenDailogs";
import FullScreenDialogs from "./FullScreenDialog";

const Profile = () => {

    
  return (
    <div className="w-full h-fit">
      <div className="hidden md:block">
        <SmallScreenDialogs />
      </div>
      <div className="md:hidden">
        <FullScreenDialogs />
      </div>
    </div>
  );
};

export default Profile;
