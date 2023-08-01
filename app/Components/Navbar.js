"use client"
import Link from "next/link";
import React from "react";
import { BiLogoPatreon } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import Ripples from "react-ripples"

export default function Navbar() {
  return (
    <header className=" font-Poppins bg-slate-800 w-full h-[70px] top-0 left-0 flex justify-between items-center py-3 relative px-5 md:px-10 lg:px-20 xl:px-24 ">
     <Link href={"/home"}>
     <div className=" flex items-center justify-normal gap-2">
        <span className=" text-pink-400 text-5xl">
          <BiLogoPatreon />
        </span>
        <h1 className=" text-white text-2xl font-bold">Packt</h1>
      </div>
     </Link>
    <Link href={"/Contact"}>
    <Ripples>
     <button className=" font-Poppins font-medium hover:bg-cyan-600 group flex items-center gap-2 justify-center text-white py-2 px-5 bg-sky-500 rounded">
        Get started
        <span className=" text-white group-hover:translate-x-2 transition-all duration-300 text-2xl"><BsArrowRightShort/></span>
      </button>
     </Ripples>
    </Link>
    </header>
  );
}
