"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import TestImage1 from "@/public/testimonial-01.jpg";
import TestImage2 from "@/public/testimonial-04.jpg";
import TestImage3 from "@/public/testimonial-03.jpg";
import TestImage4 from "@/public/testimonial-09.jpg";
import TestImage5 from "@/public/testimonial-05.jpg";
import TestImage6 from "@/public/testimonial-08.jpg";
import { Fade } from "react-awesome-reveal";
import Ripples from "react-ripples"


export default function Section2() {
 
  const Test = [
    { quotes: "", image: TestImage1, name: "James Pet", social: "J Pet" },
    { quotes: "", image: TestImage2, name: "Licia McFarland", social: "Lia" },
    { quotes: "", image: TestImage3, name: "Max Corsano ", social: "Mx c" },
    { quotes: "", image: TestImage4, name: "Veerle Larson ", social: "Vee" },
    { quotes: "", image: TestImage6, name: "Verale Kate ", social: "Vera" },
    {
      quotes: "",
      image: TestImage5,
      name: "Ana Kennedy",
      social: "Ana-K",
      span: true,
    },
  ];
  return (
    <section className=" bg-slate-900 w-full h-auto py-10 lg:px-20 md:px-2 xl:px-24">
      <h1 className=" text-white font-Poppins text-3xl text-center px-5 sm:px-8 md:p-0 lg:text-4xl font-semibold">
        Sound too good? Hear <br className=" hidden lg:flex"/> what our customers have to say
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 w-full gap-6">
        {Test.map((test, index) => (
          <Fade key={index}>
            <Ripples>
            <div
              className={`flex ${
                test.span && " hidden sm:flex"
              }  flex-col mx-auto bg-slate-700 w-[90%] sm:w-[70%] md:w-[100%] h-[250px] px-5 py-4`}
            >
              <Image
                src={test.image}
                alt="testimonial_images"
                className=" rounded-full h-[55px] w-[55px]"
              />
              <p className=" text-[#9CA3AF] font-Poppins text-md font-medium py-2">
                Compared to other offerings, Neon always has a head start and
                introduces bleeding edge features first.
              </p>
              <span className=" flex items-center gap-1">
                <p className=" font-Poppins text-md font-semibold text-[#9CA3AF]">
                  {test.name} -{" "}
                </p>
                <p className=" text-sky-500 font-semibold font-Poppins text-md">
                  {test.social}
                </p>
              </span>
            </div>
            </Ripples>
          </Fade>
        ))}
      </div>
    </section>
  );
}
