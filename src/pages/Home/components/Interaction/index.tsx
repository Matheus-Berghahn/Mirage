import React from "react";

export default function Interaction() {
  return (
    <div className=" md:flex items-center justify-between w-1/2 relative hidden">
      <div className="w-full relative">
        <div
          className="absolute border-2 border-[#e9e6df] image-animation1"
        />

        <div
          className="absolute border-2 border-[#e9e6df] image-animation2 "
        />
      
        <div
          className="absolute border-2 border-[#e9e6df] image-animation3 "
        />
      </div>
    </div>
  );
}
