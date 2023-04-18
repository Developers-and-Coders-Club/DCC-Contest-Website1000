import React from "react";
import Navbar from "../../components/Navbar";
import ThreePicAbout from "./ThreePicAbout";
import Ritik from "./Ritik";
import Atithi from "./Atithi";

function About() {
  return (
    <div className="bg-white dark:bg-gray-900 pt-16">
      <Navbar />
      <ThreePicAbout />
      <Ritik />
      <Atithi />
    </div>
  );
}

export default About;
