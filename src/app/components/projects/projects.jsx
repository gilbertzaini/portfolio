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

const Projects = () => {
  const projects = [
    {
      src: "/assets/projects/MySalak/logo.png",
      heading: "MySalak",
      text: (
        <>
          <p>
            MySalak is a part of Epics in IEEE 2024 project, which is aimed to
            help snakefruit farmers, especially they who are affiliated with
            Paguyuban Mitra Turindo. This project involves various process,
            starting from the IoT development, dataset collection, AI model
            traning, and the PWA development. In this project, I:
          </p>
          <ul>
            <li> Designed the initial IoT&#39;s schematic diagram </li>
            <li> Took part in farm mapping using drone </li>
            <li> Labelled the drone dataset </li>
            <li>
              {" "}
              Developed the front-end of MySalak PWA with React and ChakraUI{" "}
            </li>
            <li> Integrated the AI Model with TensorFlowJs </li>
          </ul>
        </>
      ),
      position: "Software Developer",
      period: "Jan 2024 - Present",
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
      heading: "NemaApp",
      text: (
        <>
          <p>
            NemaApp is a project that integrates an agriculture-based AI model
            into a webapp to identify the species of a certain parasitic or
            non-parasitic organism based on its microscopic image. In this
            project, I:
          </p>
          <ul>
            <li>Developed the application using Flask</li>
            <li>Integrated the AI Model</li>
            <li>
              Made bash scripts to install and run the application locally in
              MacOS
            </li>
            <li>
              Made batch scripts to install and run the application locally in
              Windows
            </li>
          </ul>
        </>
      ),
      position: "Back-end Developer",
      period: "Nov 2023 - Jan 2024",
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
      text: (
        <>
          <p>
            DiTag is an IoT tracking device assembled with ESP32, a GPS Module,
            and a buzzer, with a battery as its power source. The device can
            then be tracked using DiTag website, and a notification will be sent
            if the device is more than 20m apart. The buzzer can be rang
            remotely using the same website to locate the tagged item. In this
            project, I:
          </p>
          <ul>
            <li>Designed the hardware wiring</li>
            <li> Took part in assembling the device</li>
            <li> Programmed the ESP32</li>
            <li> Developed the front-end using React.js and ChakraUI</li>
            <li>
              {" "}
              Developed the back-end using Express.js, Sequelize, MySQL, and
              WebSocket
            </li>
            <li>
              {" "}
              Implemented MQTT communication protocol on both the website and
              the device
            </li>
            <li> Deployed the webapp using cPanel</li>
          </ul>
        </>
      ),
      position: "Full Stack IoT Developer",
      period: "Sep - Dec 2023",
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
        "/assets/projects/DiTag/6.jpeg",
      ],
    },
    {
      src: "/assets/projects/SIKEBAS/logo.png",
      heading: "SIKEBAS",
      text: (
        <>
          <p>
            SIKEBAS (Sistem Internal Keuangan Bank Sampah) is a web-based waste
            bank management system built specially for Puri Pamulang RW 25 Waste
            Bank. The goal of this system is to digitalize the daily operation
            of the waste bank, making it easier to be tracked and managed. Its
            features includes:
          </p>
          <ul>
            <li>Log-in and authentication system</li>
            <li>Role-based authorization</li>
            <li>
              CRUD on the waste list, customer list, administrator list, and
              waste collectors list
            </li>
            <li>Transactions</li>
            <li>
              Reports on each of the customer&#39;s account (can be filtered by a
              range of date)
            </li>
            <li>Report export</li>
          </ul>
        </>
      ),
      position: "Full Stack Developer",
      period: "Jun - Nov 2023",
      stack: [<FaLaravel />, <BsBootstrapFill />, <SiMysql />],
      screenshots: [
        "/assets/projects/SIKEBAS/1.png",
        "/assets/projects/SIKEBAS/2.png",
        "/assets/projects/SIKEBAS/3.png",
        "/assets/projects/SIKEBAS/4.png",
        "/assets/projects/SIKEBAS/5.png",
        "/assets/projects/SIKEBAS/6.png",
      ],
    },
  ];

  return (
    <div>
      <Showcase data={projects} title={"Projects"} />{" "}
    </div>
  );
};

export default Projects;
