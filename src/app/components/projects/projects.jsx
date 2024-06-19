/* eslint-disable react/jsx-key */
// import '/assets/1.jpg' from "../../../../public/assets/1.jpg"
import React from "react";
import { Card } from "../card/Card";
import Image from "next/image";
import { FaLaravel, FaReact } from "react-icons/fa6";
import { SiChakraui, SiExpress, SiFlask, SiMysql } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

export const Projects = () => {
  const cardItems = [
    {
      src: "/assets/1.jpg",
      heading: "DiTag",
      text: "Lorem ipsum dolor sit amet.",
      position: "Full Stack Developer",
      stack: [<FaReact />, <SiChakraui />, <SiExpress />, <SiMysql />],
      type: "Project",
    },
    {
      src: "/assets/1.jpg",
      heading: "Nema-APP",
      text: "Lorem ipsum dolor sit amet.",
      position: "Back-end Developer",
      stack: [<SiFlask />],
      type: "Project",
    },
    {
      src: "/assets/1.jpg",
      heading: "SIKEBAS",
      text: "Lorem ipsum dolor sit amet.",
      position: "Full Stack Developer",
      stack: [<FaLaravel />, <BsBootstrapFill />, <SiMysql />],
      type: "Project",
    },
  ];

  return (
    <section>
      <h1 className="text-center my-5">Experiences</h1>
      <div className="flex flex-wrap justify-center items-center gap-5 mb-8 sm:gap-y-8 sm:gap-x-10">
        {cardItems.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </section>
  );
};
