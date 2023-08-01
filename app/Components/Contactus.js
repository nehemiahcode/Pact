"use client";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { RiLoader4Line } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import {IoClose} from "react-icons/io"
import Ripples from "react-ripples";
import { MdClose } from "react-icons/md";

const schema = yup.object({
  first_name: yup.string().required("firstname is a required field"),
  last_name: yup.string().required("lastname is a required field"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid"),
  subject: yup.string().required("subject is a required field"),
  message: yup.string().required("message is a required field"),
});

export default function Contactus() {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmit(true);
      reset();
    }, 4000);
  };
  const Inputs = [
    {
      type: "text",
      errors: "first_name",
      placeholder: "Firstname",
    },
    {
      type: "text",
      errors: "last_name",
      placeholder: "Lastname",
    },
    {
      type: "email",
      errors: "email",
      placeholder: "Email",
    },
  ];

  const Area = [
    { type: "text", placeholder: "Subject", errors: "subject" },
    { type: "text", placeholder: "Message", errors: "message", height: true },
  ];
  return (
    <section className="font-Poppins w-auto h-auto bg-gradient-to-br from-slate-800 via-slate-400 to-slate-600 py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" form bg-slate-200 w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto  rounded-lg shadow-xl h-[auto] py-10"
      >
        <h1 className="text-3xl pl-3 font-Poppins font-semibold bg-gradient-to-r from-slate-500 via-black to-slate-950 text-transparent bg-clip-text">
          Ready to Launch your dream site?
        </h1>
        <p className="text-md pl-3 py-3 font-medium font-Poppins px-3">
          Fill in the awesome form and tell us what you need.
        </p>
        {submit && (
          <div className=" bg-green-500 w-[90%] mx-auto flex items-center justify-between rounded-lg px-2 py-4">
           <div className="flex items-center gap-3">
           <span className=" text-white text-2xl"><GiCheckMark/></span>
                Sent
           </div>
           <span onClick={() => setSubmit(!submit)} className=" text-black text-xl  cursor-pointer bg-slate-300 p-2 rounded-md"><MdClose/></span>
          </div>
        )}
        {Inputs.map((input, index) => (
          <div key={index}>
            <span className=" w-full flex flex-col items-center">
              <input
                type={input.type}
                placeholder={input.placeholder}
                {...register(input.errors)}
                disabled={loading}
                autoComplete="off"
                className={`${
                  loading && "cursor-not-allowed"
                } mt-3 bg-white outline-none shadow-md placeholder:text-neutral-500 font-medium border-[2px]  w-[95%] h-[50px] py-3 px-3`}
              />
            </span>
            <span className="text-red-600 text-sm pl-5 mb-5 font-medium">
              {errors[input.errors]?.message}
            </span>
          </div>
        ))}

        {Area.map((texts, index) => (
          <div key={index}>
            <div className=" flex flex-col items-center">
              <textarea
                placeholder={texts.placeholder}
                disabled={loading}
                autoComplete="off"
                {...register(texts.errors)}
                className={` w-[95%] border-[2px] ${loading && "cursor-not-allowed"} shadow-md mx-auto px-3 py-3 ${
                  texts.height && "h-[150px]"
                }  placeholder:text-neutral-500 font-medium outline-none bg-white resize-none`}
              ></textarea>
            </div>
            <span className="text-red-600 text-sm pl-5 mb-5 font-medium">
              {errors[texts.errors]?.message}
            </span>
          </div>
        ))}

        <div className="my-4 ml-4">
          <Ripples>
            <button
              disabled={loading}
              type="submit"
              className={`${
                loading && " cursor-not-allowed"
              } bg-gradient-to-br from-slate-800 to-blue-900 duration-300 active:ring-2 ring-inset ring-white flex items-center justify-center rounded transition-all
               px-3 py-3 w-[auto] text-white font-Poppins active:scale-105 hover:bg-red-400`}
            >
              {loading ? (
                <div className="animate-spin text-2xl text-white">
                  <RiLoader4Line />
                </div>
              ) : (
                " Create Account"
              )}
            </button>
          </Ripples>
        </div>
      </form>
    </section>
  );
}
