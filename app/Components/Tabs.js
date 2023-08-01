"use client";
import React from "react";
import { useState } from "react";
import { BsRecordCircle, BsDiscord } from "react-icons/bs";
import { MdPhonelink } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { TbArrowZigZag } from "react-icons/tb";
import Ripples from "react-ripples";
import { Fade } from "react-awesome-reveal";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { AiFillGithub, AiFillMediumSquare } from "react-icons/ai";
import { SiReadthedocs } from "react-icons/si";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const MyTabs = [
    { tab: "tab1", icon: <TbArrowZigZag />, text: "For Developers" },
    { tab: "tab2", icon: <BsRecordCircle />, text: "For Designers" },
    { tab: "tab3", icon: <BsFillMoonFill />, text: "For Founders" },
    { tab: "tab4", icon: <MdPhonelink />, text: "For Marketers" },
  ];
  return (
    <section className=" bg-slate-900 py-9 lg:px-20 font-Poppins xl:px-24">
      <h1 className=" text-center text-white font-Poppins px-5 font-semibold text-3xl lg:text-4xl">
        Resources to help you get <br className=" hidden lg:flex"/> the most out of Pact
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-4 w-[100%]  mx-auto  place-content-center place-items-center gap-4 lg:gap-2 py-5 px-5">
        {MyTabs.map((tabs, index) => (
          <Ripples
            key={index}
            className={` ${
              activeTab === `${tabs.tab}` &&
              " rotate-[3deg] shadow-lg  cursor-default md:cursor-pointer shadow-cyan-800 "
            } border-[1px] rounded-full`}
          >
            <button
              className={`  ${
                activeTab === `${tabs.tab}` && "  text-cyan-400 font-semibold"
              }  flex items-center gap-2 px-4 py-2 bg-slate-700  cursor-default  md:cursor-pointer text-white font-Poppins font-medium text-md`}
              onClick={() => setActiveTab(`${tabs.tab}`)}
            >
              <span
                className={`${
                  activeTab === `${tabs.tab}` && "text-cyan-400"
                } text-black`}
              >
                {tabs.icon}{" "}
              </span>
              {tabs.text}
            </button>
          </Ripples>
        ))}
      </div>
      {activeTab === "tab1" && (
        <MainTabs
          text1={"Packt Telegram"}
          text2={"Packt GitHub"}
          icon1={<FaTelegramPlane />}
          icon2={<AiFillGithub />}
        />
      )}
      {activeTab === "tab2" && (
        <MainTabs
          text1={"Packt Discord"}
          text2={"Packt YouTube"}
          icon1={<BsDiscord />}
          icon2={<FaYoutube />}
        />
      )}
      {activeTab === "tab3" && (
        <MainTabs
          text1={"Packt Docs"}
          text2={"Packt Medium"}
          icon1={<SiReadthedocs />}
          icon2={<AiFillMediumSquare />}
        />
      )}
      {activeTab === "tab4" && (
        <div>
          <MainTabs
            text1={"Packt Discord"}
            text2={"Packt Telegram"}
            icon1={<BsDiscord />}
            icon2={<FaTelegramPlane />}
          />
        </div>
      )}
    </section>
  );
}

export function MainTabs({ text1, text2, icon1, icon2 }) {
  const Rs = [
    { icon: icon1, text: text1 },
    { icon: icon2, text: text2 },
  ];
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 w-full h-auto lg:px-24 py-5 lg:gap-0 gap-6 place-content-center place-items-center md:grid-cols-2">
      {Rs.map((rs, index) => (
        <Ripples key={index} className=" w-[90%] lg:w-[80%] ">
          <Fade className=" w-[100%]">
            <div className=" bg-slate-800  group   px-4 py-3">
              <div className=" flex group-hover:text-white transition-all duration-200 items-center justify-center bg-gradient-to-t from-slate-700 to-slate-700 text-3xl shadow-md shadow-cyan-700 text-center rounded-full h-[60px] w-[60px] text-cyan-500 border-slate-400  border-[1px]">
                {rs.icon}
              </div>
              <h1 className=" text-white font-semibold text-2xl font-Poppins py-3">
                {rs.text}
              </h1>
            </div>
          </Fade>
        </Ripples>
      ))}
    </div>
  );
}
