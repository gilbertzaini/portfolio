import React from "react";
import { FaReact } from "react-icons/fa6";
import { SiChakraui, SiExpress, SiMysql, SiNextdotjs } from "react-icons/si";
import Showcase from "../showcase/Showcase";

const Organization = () => {
  const organizations = [
    {
      src: "/assets/organizations/stukm/logo.png",
      heading: "Serah Tahunan UMN 2023",
      text: (
        <>
          <p>
            Serah Tahunan is an event organized by the Student Executive Board
            (BEM) to facilitate the transition of leadership roles among core
            members within various student activity units. As a lead web
            developer, I:
          </p>
          <ul>
            <li>
              Initialized the website project using React.js, Express.js, and
              ChakraUI
            </li>
            <li>
              Coordinated the execution of the project within the team and with
              other division
            </li>
            <li>
              Distributed the workload to the team members based on the
              individual&#39;s ability
            </li>

            <li>Developed the voting form and its related APIs</li>
            <li>
              {" "}
              Handled the authentication, authorization, and session management{" "}
            </li>
            <li> Deployed the website using cPanel </li>
          </ul>
        </>
      ),
      position: "Lead Web Developer",
      period: "May - Dec 2023",
      stack: [<FaReact key={"react"}/>, <SiChakraui key={"chakra"}/>, <SiExpress key={"express"}/>, <SiMysql key={"sql"}/>],
      screenshots: [
        "/assets/organizations/stukm/1.png",
        "/assets/organizations/stukm/2.png",
        "/assets/organizations/stukm/3.png",
      ],
    },
    {
      src: "/assets/organizations/mrms/logo.png",
      heading: "Mr. & Ms. UMN 2023",
      period: "Mar - Nov 2023",
      text: (
        <>
          <p>
            Mr. & Ms. UMN is an annual event held by Multimedia Nusantara
            University that involves the selection of university ambassadors. As
            a web developer, I:
          </p>
          <ul>
            <li> Developed sponsor and media partner pages layout </li>
            <li> Developed &quot;Meet Our Candidates&quot; section </li>
            <li>Developed the Gallery template </li>
          </ul>
        </>
      ),
      position: "Front-end Developer",
      stack: [<SiNextdotjs key={"next"}/>, <SiChakraui key={"chakra"}/>],
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
