/* eslint-disable react/jsx-key */
import React from "react";
import { FaReact } from "react-icons/fa6";
import { SiChakraui, SiExpress, SiMysql, SiNextdotjs } from "react-icons/si";

const Organization = () => {
  const organizations = [
    {
      src: "/assets/1.jpg",
      heading: "Serah Tahunan UMN 2023",
      text: "Lorem ipsum dolor sit amet.",
      position: "Lead Web Developer",
      stack: [<FaReact />, <SiChakraui />, <SiExpress />, <SiMysql />],
      type: "Experience",
    },
    {
      src: "/assets/1.jpg",
      heading: "Mr. & Ms. UMN 2023",
      text: "Lorem ipsum dolor sit amet.",
      position: "Front-end Developer",
      stack: [<SiNextdotjs/>, <SiChakraui />],
      type: "Experience",
    },
  ];
  
  return <div>Organization</div>;
};

export default Organization;
