"use client";
import React from "react";
import ReactSwipe from "react-swipe";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import Ripples from "react-ripples";
import {
  BsBrowserChrome,
  BsBrowserEdge,
  BsBrowserSafari,
  BsBrowserFirefox,
} from "react-icons/bs";
import { FaOpera } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export default function Sections3() {
  const Swipers = [
    { logo: <BsBrowserChrome />, name: "Google Chrome" },
    { logo: <BsBrowserEdge />, name: "Microsoft Edge" },
    { logo: <BsBrowserSafari />, name: "Safari" },
    { logo: <BsBrowserFirefox />, name: "Firefox" },
    { logo: <FaOpera />, name: "Opera" },
  ];
  let reactSwipeEl;
  return (
    <section className=" w-full h-auto bg-slate-900 lg:px-20 py-10 xl:px-24 px-5">
      <h1 className=" text-center font-Poppins text-white font-semibold text-3xl lg:text-4xl">
        Our Works are supported by all <br className=" hidden lg:flex" />{" "}
        browsers which give you a bigger advantage.
      </h1>
      <p className=" text-md font-Poppins py-2 text-white text-center">
        Use the arrow buttons bellow to see the views of browsers compatible
        with our works.
      </p>
      <ReactSwipe
        className="carousel w-[100%] lg:w-auto  mx-auto py-8 h-auto"
        swipeOptions={{ continuous: true }}
        ref={(el) => (reactSwipeEl = el)}
      >
        {Swipers.map((swipe, index) => (
          <Fade key={index}>
            <div className=" flex justify-center gap-2 flex-col items-center w-[100%] mx-auto sm:w-[70%] md:w-[60%] lg:w-[50%] bg-slate-700 lg:h-[250px] h-[300px]">
              <span className=" text-8xl text-gray-300">{swipe.logo}</span>
              <h1 className=" text-white font-Poppins text-2xl font-semibold py-3">
                {swipe.name}
              </h1>
            </div>
          </Fade>
        ))}
      </ReactSwipe>
      <div className=" flex items-center  justify-center gap-3">
        <Ripples
          onClick={() => reactSwipeEl.prev()}
          className="  h-[50px]  bg-white w-[50px] group flex items-center justify-center active:bg-sky-500  active:scale-110 rounded-full"
        >
          <button className="  bg-white group-active:bg-sky-500  group-active:text-red-500    text-black  text-2xl">
            <RiArrowLeftLine />
          </button>
        </Ripples>
        <Ripples
          onClick={() => reactSwipeEl.next()}
          className=" h-[50px]  bg-white w-[50px] group flex items-center justify-center active:bg-sky-500   active:scale-110 rounded-full"
        >
          <button className="  bg-white group-active:text-red-500 group-active:bg-sky-500    text-black text-2xl ">
            <RiArrowRightLine />
          </button>
        </Ripples>
      </div>
    </section>
  );
}
