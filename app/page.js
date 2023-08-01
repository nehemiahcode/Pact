"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { RiLoader4Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Ripples from "react-ripples";

const schema = yup.object({
  Name: yup
    .string()
    .required("Name is a required field")
    .max(20, "That's too long!"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(5, "It must be more than 5 characters"),
});

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [signedin, setSignedin] = useState(false);
  const [text, setText] = useState("");
  const route = useRouter();

  useEffect(() => {
    const userHasSignedUp = localStorage.getItem("userSignedUp");
    if (userHasSignedUp) {
      setSignedin(true);
      setText(localStorage.getItem("username"));
    }
  }, []);

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
      setSignedin(true);
      setText(data.Name);
      localStorage.setItem("userSignedUp", "true");
      localStorage.setItem("username", data.Name);
      reset();
    }, 4000);
  };

  const handleNextPage = () => {
    route.push("/home");
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
      <section className="font-Poppins w-screen h-screen bg-gradient-to-br from-slate-800 via-slate-400 to-slate-600 py-20">
        {signedin ? (
          <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] rounded-md mx-auto bg-slate-900 h-[300px] px-5 py-5">
            <h1 className="text-center text-white font-Poppins font-semibold text-2xl">
              Welcome {text}
            </h1>
            <p className="text-md text-white text-center py-2">
              You have successfully created an account with Packt. Click on the
              button below to get started and kick start your Project.
            </p>
            <div className="flex justify-center items-center my-4">
              <Ripples className="mx-auto">
                <button
                  onClick={handleNextPage}
                  className="bg-gradient-to-br from-slate-400 to-blue-600 duration-300 font-medium rounded-md py-2 px-4"
                >
                  Get Started
                </button>
              </Ripples>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form bg-slate-200 w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto  rounded-lg shadow-xl h-[auto] py-10"
          >
            <h1 className="text-3xl pl-3 font-Poppins font-semibold bg-gradient-to-r from-slate-500 via-black to-slate-200 text-transparent bg-clip-text">
              Let's Get Started
            </h1>
            <p className="text-md pl-3 py-3 font-medium font-Poppins px-3">
              Fill in the awesome form to Create an Account with Packt.
            </p>
            {Inputs.map((input, index) => (
              <div key={index}>
                <span className="relative w-full flex flex-col items-center">
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    {...register(input.errors)}
                    disabled={loading}
                    autoComplete="off"
                    className={`${
                      loading && "cursor-not-allowed"
                    } mt-3 bg-white outline-none placeholder:text-neutral-500 font-medium border-[2px]  w-[95%] pl-9 h-[50px] py-3 px-3`}
                  />
                  <span className="absolute text-xl text-black left-5 top-7">
                    {input.icon}
                  </span>
                </span>
                <span className="text-red-600 text-sm pl-5 mb-5 font-medium">
                  {errors[input.errors]?.message}
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
               px-3 py-3 w-[160px] text-white font-Poppins active:scale-105 hover:bg-red-400`}
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
        )}
      </section>
    </>
  );
}
