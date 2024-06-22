/* eslint-disable react/jsx-key */
import React from "react";
import "./Experiences.css";
import { FaAngular } from "react-icons/fa6";
import { BsBootstrapFill } from "react-icons/bs";
import { SiExpress, SiFlask, SiMysql } from "react-icons/si";
import Showcase from "../showcase/Showcase";

const Experiences = () => {
  const experiences = [
    {
      src: "/assets/experiences/kcg/kcg.png",
      heading: "PT. Kurnia Ciptamoda Gemilang",
      text: "Lorem ipsum dolor sit amet.",
      position: "Web Developer Intern",
      stack: [<FaAngular />, <BsBootstrapFill />, <SiExpress />, <SiMysql />],
      screenshots: [
        "/assets/experiences/kcg/1.png",
        "/assets/experiences/kcg/2.png",
        "/assets/experiences/kcg/3.png",
      ],
    }
  ];

  return (
    <div className="secondary-bg">
      <Showcase data={experiences} title={"Experiences"} />
    </div>
  );
};

export default Experiences;
