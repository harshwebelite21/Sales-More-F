import React from "react";
import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "Sales More",
  };
  return <HeroSection myData={data} />;
};

export default Home;
