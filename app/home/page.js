
import React from "react";
import Hero from "../Components/Hero";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Sections3 from "../Components/Sections3";
import Tabs from "../Components/Tabs";
import Getstarted from "../Components/Getstarted";
import Mainlayout from "../Components/Mainlayout";

function Page() {

  return (
    <>  
        <Mainlayout>
          <Hero />
          <Section1 />
          <Sections3 />
          <Section2 />
          <Tabs />
          <Getstarted />
        </Mainlayout>
   
    </>
  );
}

export default Page;
