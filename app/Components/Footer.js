"use client"
import { BiLogoPatreon } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className=" grid grid-cols-1 border-t-[1px] place-content-center place-items-center font-Poppins bg-slate-900 w-full h-auto px-5 py-5">
     <div>
     <div className=" flex items-center justify-normal gap-2">
        <span className=" text-pink-400 text-5xl">
          <BiLogoPatreon />
        </span>
        <h1 className=" text-white text-2xl font-bold">Packt</h1>
      </div>
      <h1 className=" text-slate-200 text-center py-2">Privacy Policy</h1>
     </div>
     <div className=" text-white">
        <p className="text-white text-lg font-semibold text-center">Company</p>
        <div className=" flex gap-4">
            <p className=" py-1 text-sm">About Us</p>
            <p className=" py-1 text-sm">Our Story</p>
            <p className=" py-1 text-sm">Kick Start</p>
        </div>
     </div>
    </footer>
  );
}
