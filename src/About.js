import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "Sales More",
  };
  return (
    <>
      <HeroSection myData={data} />;
    </>
  );
};

export default About;
