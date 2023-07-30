"use client";
import Images from "@/public/features.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { RiLoader4Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  Name: yup
    .string()
    .required("username is a required field")
    .max(20, "that's too long!"),
  email: yup
    .string()
    .required("email is a required field")
    .email("email is not valid"),
  password: yup
    .string()
    .required("password  is a required field")
    .min(5, "It must be more than 5 characters")
    .max(10, "It must not be more than 10 characters"),
});

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("")
  const route = useRouter();

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
      route.push("/home");
      setText(data.Name);
      reset();
    }, 4000);
  };

  const Inputs = [
    {
      type: "text",
      errors: "Name",
      placeholder: "Name",
      icon: <BiUser />,
    },
    {
      type: "email",
      errors: "email",
      placeholder: "Email",
      icon: <AiOutlineMail />,
    },
    {
      type: "password",
      errors: "password",
      placeholder: "Create a password",
      icon: <MdLockOutline />,
    },
  ];
  return (
    <>
        <section className=" font-Poppins w-screen h-screen bg-gradient-to-br from-slate-800 via-slate-400 to-slate-600   py-20  ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form bg-slate-200 w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto  rounded-lg shadow-xl h-[auto] py-10"
          >
            <h1 className=" text-3xl pl-3  font-Poppins font-semibold bg-gradient-to-r from-slate-500 via-black to-slate-200 text-transparent bg-clip-text">
              Lets Get Started
            </h1>
            <p className=" text-md pl-3 py-3 font-medium font-Poppins px-3">
              Fill in the awesome form to Create an Account with packt.
            </p>
            {Inputs.map((input, index) => (
              <div key={index}>
                <span className=" relative w-full flex flex-col items-center">
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    {...register(input.errors)}
                    disabled={loading}
                    autoComplete="off"
                    className={` ${
                      loading && "cursor-not-allowed"
                    } mt-3 bg-white outline-none placeholder:text-neutral-500 font-medium border-[2px]  w-[95%] pl-9 h-[60px] py-3 px-3`}
                  />
                  <span className=" absolute text-xl text-black  left-5 top-7">
                    {input.icon}
                  </span>
                </span>
                <span className=" text-red-600  text-sm pl-5 mb-5 font-medium">
                  {errors[input.errors]?.message}
                </span>
              </div>
            ))}
            <button
              disabled={loading}
              type="submit"
              className={` ${
                loading && " cursor-not-allowed"
              } bg-gradient-to-br from-slate-800 to-blue-900 duration-300  active:ring-2 ring-inset ring-white flex items-center justify-center  rounded transition-all
                my-4 px-3 py-3 ml-4 w-[160px]  text-white font-Poppins   active:scale-105 hover:bg-red-400`}
            >
              {loading ? (
                <div className=" animate-spin text-2xl text-white">
                  <RiLoader4Line />
                </div>
              ) : (
                " Create Account"
              )}
            </button>
          </form>
        </section>
    </>
  );
}
