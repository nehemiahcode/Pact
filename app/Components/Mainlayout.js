import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Mainlayout({children}) {
  return (
   <>
   <Navbar/>
    <div>{children}</div>
    <Footer/>
   </>
  )
}
