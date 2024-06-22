/* eslint-disable react/jsx-key */
import React from "react";
import { FaReact } from "react-icons/fa6";
import { SiChakraui, SiExpress, SiMysql, SiNextdotjs } from "react-icons/si";
import Showcase from "../showcase/Showcase";

const Organization = () => {
  const organizations = [
    {
      src: "/assets/organizations/stukm/logo.png",
      heading: "Serah Tahunan UMN 2023",
      text: "Lorem ipsum dolor sit amet.",
      position: "Lead Web Developer",
      stack: [<FaReact />, <SiChakraui />, <SiExpress />, <SiMysql />],
      screenshots: [
        "/assets/organizations/stukm/1.png",
        "/assets/organizations/stukm/2.png",
        "/assets/organizations/stukm/3.png",
      ],
    },
    {
      src: "/assets/organizations/mrms/logo.png",
      heading: "Mr. & Ms. UMN 2023",
      text: "Lorem ipsum dolor sit amet.",
      position: "Front-end Developer",
      stack: [<SiNextdotjs />, <SiChakraui />],
      screenshots: [
        "/assets/organizations/mrms/1.png",
        "/assets/organizations/mrms/2.png",
      ],
    },
  ];

  return (
    <div className="secondary-bg">
      <Showcase data={organizations} title={"Organizations"} />{" "}
    </div>
  );
};

export default Organization;
