"use client";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import bgImage from "@/public/rose.svg";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Ripples from "react-ripples";

export default function Hero() {
  return (
    <section className=" font-Poppins bg-slate-900 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-600 grid grid-cols-1 lg:grid-cols-2 w-full h-auto lg:px-20 xl:px-24 py-10 ">
      <Fade>
        <div className=" w-full h-auto px-5 sm:px-10 lg:p-0 ">
          <Ripples className=" rotate-[6deg]">
            <button
              type="button"
              className="flex items-center gap-3 bg-slate-700  text-white  ring-white ring-inset ring-1 rounded-full px-5 py-1"
            >
              Ready to Launch one?
              <Link href={"/Contact"}>
              <span className=" flex items-center text-sky-400 font-medium text-sm">
                here
                <span className=" text-sky-400 text-2xl">
                  <BsArrowRightShort />
                </span>
              </span>
              </Link>
            </button>
          </Ripples>
          <h1 className=" text-white text-3xl sm:text-6xl lg:text-6xl font-semibold py-6">
            Where we build your software and manage your bussiness.
          </h1>
          <p className=" text-slate-200 font-medium font-Poppins  py-4 text-md lg:text-xl">
            Our landing page Will guide you in all aspects about our offers that
            suits your need.
            <br />
            Offers that works on all devices, so you only have to set it up
            once, and get beautiful results forever.
          </p>
          <div>
            <Link href={"/Contact"}>
              <Ripples className="my-6 ">
                <button className=" bg-sky-400 rounded-md px-8 py-3 font-medium hover:bg-sky-600">
                  Request for one
                </button>
              </Ripples>
            </Link>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className=" flex items-center justify-center px-5">
          <Image
            src={bgImage}
            alt="An svg Image that looks like stripes of line(rectangular) in 45deg"
            className=" sm:w-[60%] lg:w-[100%] my-3 w-[100%] h-[100%]"
          />
        </div>
      </Fade>
    </section>
  );
}
