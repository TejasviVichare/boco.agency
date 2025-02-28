import React from "react";
import Link from "next/link";

const Button = ({ text }) => {
  return (
    <div className="flex items-center justify-center border border-violet-950 rounded-full text-violet-950 px-6 py-3 text-center">
      <Link href="/" className="text-lg font-semibold">
        {text}
      </Link>
    </div>
  );
};

export default Button;
