"use client"
import Link from 'next/link'
import React from 'react'
import Ripples from "react-ripples"

export default function Getstarted() {
  return (
    <section className=' w-full h-auto flex justify-center items-center bg-slate-900 lg:px-20 xl:px-24 px-5 py-10'>
           <div className=' flex items-center flex-col lg:flex-row bg-gradient-to-tr from-blue-900 via-fuchsia-800 to-fuchsia-950 h-[auto] py-10 lg:w-[90%] w-[100%] px-5 rounded-lg'>
                 <div className=' w-[100%]'>
                 <h1 className=' text-white font-Poppins font-semibold text-3xl'>Kick start your Project with Pack now</h1>
                  <p className=' font-medium font-Poppins text-white text-md py-2'>
                  It only takes a few minutes to get started with Packt. Understand your users, book a Project, and launch it.
                  </p>
                 </div>
                <div className=' w-[100%] lg:w-[50%] flex justify-start  lg:justify-end'>
               <Link href={"/Contact"}>
               <Ripples>
               <button className=' px-5 py-2 rounded-md text-white flex bg-blue-600 text-center font-Poppins font-medium'>
                    Seek dev
                 </button>
               </Ripples>
               </Link>
                </div>
           </div>
    </section>
  )
}
