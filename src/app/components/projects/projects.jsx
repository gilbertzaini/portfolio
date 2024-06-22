/* eslint-disable react/jsx-key */
import React from "react";
import { FaLaravel, FaReact } from "react-icons/fa6";
import {
  SiArduino,
  SiChakraui,
  SiExpress,
  SiFlask,
  SiMysql,
  SiTensorflow,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import Showcase from "../showcase/Showcase";

export const Projects = () => {
  const projects = [
    {
      src: "/assets/projects/MySalak/logo.png",
      heading: "MySalak",
      text: "Lorem ipsum dolor sit amet.",
      position: "Software Developer",
      stack: [<FaReact />, <SiChakraui />, <SiTensorflow />],
      screenshots: [
        "/assets/projects/MySalak/1.jpeg",
        "/assets/projects/MySalak/2.jpeg",
        "/assets/projects/MySalak/3.jpeg",
        "/assets/projects/MySalak/4.jpeg",
        "/assets/projects/MySalak/5.jpeg",
      ],
    },
    {
      src: "/assets/projects/NemaApp/logo.png",
      heading: "Nema-APP",
      text: "Lorem ipsum dolor sit amet.",
      position: "Back-end Developer",
      stack: [<SiFlask />],
      screenshots: [
        "/assets/projects/NemaApp/1.png",
        "/assets/projects/NemaApp/2.png",
        "/assets/projects/NemaApp/3.png",
      ],
    },
    {
      src: "/assets/projects/DiTag/logo.png",
      heading: "DiTag",
      text: "Lorem ipsum dolor sit amet.",
      position: "Full Stack IoT Developer",
      stack: [
        <SiArduino />,
        <FaReact />,
        <SiChakraui />,
        <SiExpress />,
        <SiMysql />,
      ],
      screenshots: [
        "/assets/projects/DiTag/1.png",
        "/assets/projects/DiTag/2.png",
        "/assets/projects/DiTag/3.png",
        "/assets/projects/DiTag/4.jpeg",
        "/assets/projects/DiTag/5.jpeg",
      ],
    },
    {
      src: "/assets/projects/SIKEBAS/logo.png",
      heading: "SIKEBAS",
      text: "Lorem ipsum dolor sit amet.",
      position: "Full Stack Developer",
      stack: [<FaLaravel />, <BsBootstrapFill />, <SiMysql />],
      screenshots: [
        "/assets/projects/SIKEBAS/1.png",
        "/assets/projects/SIKEBAS/2.png",
        "/assets/projects/SIKEBAS/3.png",
        "/assets/projects/SIKEBAS/4.png",
        "/assets/projects/SIKEBAS/5.png",
        "/assets/projects/SIKEBAS/5.png",
      ],
    },
  ];

  return (
    <div>
      <Showcase data={projects} title={"Projects"} />{" "}
    </div>
  );
};
