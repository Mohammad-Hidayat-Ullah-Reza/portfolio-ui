import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const showNavbar = toggle ? "flex" : "hidden";

  console.log(toggle);
  return (
    <div className="">
      <div onClick={() => setToggle(!toggle)}>
        <Bars3Icon className="h-6 w-6 ml-auto mr-4 my-3 md:hidden"></Bars3Icon>
      </div>
      <div
        className={`p-4 md:pr-8 gap-2 md:gap-8 ${showNavbar} md:flex flex-col md:flex-row items-end md:items-center justify-center md:justify-end font-bold bg-slate-50`}
      >
        <div className="hover:text-blue-500">
          <a href="/works">Works</a>
        </div>
        <div className="hover:text-blue-500">
          <a href="/blog">Blog</a>
        </div>
        <div className="hover:text-blue-500">
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
