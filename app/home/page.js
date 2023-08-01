"use client";
import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Sections3 from "../Components/Sections3";
import Tabs from "../Components/Tabs";
import Getstarted from "../Components/Getstarted";
import Mainlayout from "../Components/Mainlayout";
import { BiLogoPatreon } from "react-icons/bi";

function page() {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const Timer = setTimeout(() => {
        setLoading(false)
    }, 2000)
    return () => clearTimeout(Timer)
  })
  return (
    <>
      {loading ? (
        <div className="h-screen w-screen fixed top-0 bottom-0 bg-slate-900 flex items-center justify-center">
          <div className=" animate-pulse flex items-center justify-normal gap-2">
        <span className=" text-pink-400 text-5xl">
          <BiLogoPatreon />
        </span>
        <h1 className=" text-white text-2xl font-bold">Packt</h1>
      </div>
        </div>
      ) : (
        <Mainlayout>
          <Hero />
          <Section1 />
          <Sections3 />
          <Section2 />
          <Tabs />
          <Getstarted />
        </Mainlayout>
      )}
    </>
  );
}

export default page;
