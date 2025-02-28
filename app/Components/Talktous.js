import React from "react";
import Link from "next/link";

const Talktous = ({ text }) => {
  return (
    <div
      className="flex items-center justify-between md:w-64 w-full  px-4 py-2 border rounded-full text-white md:justify-center"
      style={{ backgroundColor: "#140152" }}
    >
   
      <Link href="/" className="text-lg md:text-center flex-1 md:text-lg text-left font-bold">
        {text}
      </Link>

   
      <span className="border rounded-full bg-white text-indigo-950 p-2 px-4 md:text-3xl">
        &#8599;
      </span>
    </div>
  );
};

export default Talktous;
