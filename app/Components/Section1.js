import React from "react";
import myImage from "@/public/features.svg";
import Image from "next/image";
import {FaCode} from "react-icons/fa"
import {MdOutlinePhonelink} from "react-icons/md"
import {LiaShippingFastSolid} from "react-icons/lia"

export default function Section1() {
  const Cards = [
    { heading: "Responsive", icon: <MdOutlinePhonelink/>, paragraph: "" },
    { heading: "Latest Resources", icon: <FaCode/>, paragraph: "" },
    { heading: "Fast Delivery", icon: <LiaShippingFastSolid/>, paragraph: "", margin: true },
  ];
  return (
    <section className=" font-Poppins bg-slate-900 w-full h-auto py-10  lg:px-20 xl:px-24">
      <h1 className=" text-white font-semibold text-4xl lg:text-6xl text-center">
        Focus on solving bigger problems
      </h1>
      <Image
        src={myImage}
        alt="an image showing three other image, first is github logo, second is an random design and third too."
        className=" w-[100%] h-auto lg:h-[400px]"
      />
      <div className=" grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 py-10">
        {Cards.map((card, index) => (
          <div
            key={index}
            className={` py-3 px-3 ${
              card.margin && "md:ml-[50%] lg:m-0"
            } lg:w-[100%] sm:w-[80%] md:w-[100%] font-Poppins mx-auto flex justify-center flex-col items-center text-white bg-slate-700 w-[90%] h-[300px]`}
          >
            <span className=" rounded-full flex items-center text-2xl text-white justify-center w-[60px] bg-gradient-to-b from-fuchsia-700  to-cyan-900 h-[60px]">
              {card.icon}
            </span>
            <h1 className=" font-Poppins text-2xl font-semibold">
              {card.heading}
            </h1>
            <p className=" text-center text-md font-Poppins py-2 font-medium">
              A flexible foundation that evolves with complex ecosystem.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

