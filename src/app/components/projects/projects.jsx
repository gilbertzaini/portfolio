/* eslint-disable react/jsx-key */
import React from "react";
import { FaLaravel, FaReact } from "react-icons/fa6";
import {
  SiArduino,
  SiChakraui,
  SiExpress,
  SiFlask,
  SiMysql,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import Showcase from "../showcase/Showcase";

export const Projects = () => {
  const projects = [
    {
      src: "/assets/1.jpg",
      heading: "DiTag",
      text: "Lorem ipsum dolor sit amet.",
      position: "Full Stack Developer",
      stack: [
        <SiArduino />,
        <FaReact />,
        <SiChakraui />,
        <SiExpress />,
        <SiMysql />,
      ],
      screenshots: [],
    },
    {
      src: "/assets/1.jpg",
      heading: "Nema-APP",
      text: "Lorem ipsum dolor sit amet.",
      position: "Back-end Developer",
      stack: [<SiFlask />],
      screenshots: [],
    },
    {
      src: "/assets/1.jpg",
      heading: "SIKEBAS",
      text: "Lorem ipsum dolor sit amet.",
      position: "Full Stack Developer",
      stack: [<FaLaravel />, <BsBootstrapFill />, <SiMysql />],
      screenshots: [],
    },
  ];

  return (
    <div>
      <Showcase data={projects} title={"Projects"} />{" "}
    </div>
  );
};
