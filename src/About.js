import React from "react";
import HeroSection from "./components/HeroSection";

function About() {
  const data = {
    name: "Sales More",
  };
  return <HeroSection myData={data} />;
}

export default About;
