import React from "react";
import { FaAngular } from "react-icons/fa6";
import { BsBootstrapFill } from "react-icons/bs";
import { SiExpress, SiFlask, SiMysql } from "react-icons/si";
import Showcase from "../showcase/showcase";

const Experiences = () => {
  const experiences = [
    {
      src: "/assets/experiences/kcg/kcg.png",
      heading: "PT. Kurnia Ciptamoda Gemilang",
      text: (
        <>
          <p>
            As a web developer intern, I was tasked to take part in migrating
            the original KCG System, which is a desktop-based ERP System, into a
            web-based application. In my internship period, I:
          </p>
          <ul>
            <li>
              {" "}
              Migrated 12 menus from the legacy KCG system to the new web
              application built with Angular{" "}
            </li>
            <li>
              {" "}
              Developed the back-end for KCG Helpdesk with Express.js and MySQL{" "}
            </li>
            <li> Took part in developing the front-end for KCG Helpdesk </li>
          </ul>
        </>
      ),
      position: "Web Developer Intern",
      period: "Feb - Jun 2024",
      stack: [
        <FaAngular key={"angular"} />,
        <BsBootstrapFill key={"Bootstrap"} />,
        <SiExpress key={"express"}/>,
        <SiMysql key={"sql"}/>,
      ],
      screenshots: [
        "/assets/experiences/kcg/1.png",
        "/assets/experiences/kcg/2.png",
        "/assets/experiences/kcg/3.png",
        "/assets/experiences/kcg/4.png",
        "/assets/experiences/kcg/5.png",
        "/assets/experiences/kcg/6.png",
      ],
    },
  ];

  return (
    <div className="secondary-bg">
      <Showcase data={experiences} title={"Experiences"} />
    </div>
  );
};

export default Experiences;
