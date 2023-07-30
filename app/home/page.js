import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";

function page() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Section1/>
      <Section2/>
    </>
  );
}

export default page;
