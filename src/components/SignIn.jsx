import React from "react";
import { BsPersonFill } from "react-icons/bs";

const SignIn = () => {
  return (
    <div className="w-96  h-fit">
      <div className="flex flex-wrap justify-center py-2">
        <div className="w-16 h-16 rounded-full border-[1px] border-gray-300 flex justify-center py-4 text-gray-600 cursor-pointer">
          <BsPersonFill size={30} />
        </div>
      </div>
      <div className="mt-8  px-4 ">
        <form className="flex flex-col space-y-5 px-2 text-sm ">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-8 border-b-2 focus:border-red-300 duration-300 outline-none cursor-pointer"
          />
          {/* <p>Error</p> */}
          <input
            type="password"
            placeholder="Password"
            className="w-full h-8 border-b-2 focus:border-green-300 duration-300 outline-none cursor-pointer"
          />
          {/* <p>Error</p> */}
          <div className=" text-xs text-black cursor-pointer">
            Forget password ?
          </div>
          <button className="w-full h-8 bg-blue-500 text-white rounded-md">
            Signin
          </button>
        </form>
        <div className="text-sm text-center mt-4 cursor-pointer">
          Not a memeber ? Signup
        </div>
      </div>
    </div>
  );
};

export default SignIn;
