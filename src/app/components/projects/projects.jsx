import React from "react";
import { FaDocker, FaLaravel, FaReact } from "react-icons/fa6";
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
import { TbSql } from "react-icons/tb";

const Projects = () => {
  const projects = [
    {
      src: "/assets/projects/MySalak/logo.png",
      heading: "MySalak",
      text: (
        <>
          <p>
            <a href="https://mysalak.com" target="_blank" className="text-cyan-400">MySalak</a> is a part of Epics in IEEE 2024 project, which is aimed to
            help snakefruit farmers, especially those who are affiliated with
            Paguyuban Mitra Turindo. This project involves various process,
            starting from the IoT development, dataset collection, AI model
            traning, and the PWA development. In this project, I:
          </p>
          <ul>
            <li>
              {" "}
              Developed the front-end of MySalak PWA with React and ChakraUI{" "}
            </li>
            <li>
              Developed the back-end server with Express.js, Sequelize, and
              MySQL
            </li>
            <li>
              {" "}
              Developed a Flask back-end to enable access to multiple ML models
            </li>
            <li>
              {" "}
              Dockerized the services of MySalak and handled the deployment with
              a VPS{" "}
            </li>
            <li> Supervise the progress of MySalak website development </li>
            <li>
              Perform QC on committed codes before continuing into the
              deployment
            </li>
            <li> Took part in spatial area mapping using drone </li>
            <li> Labelled the drone dataset </li>
            <li> Trained an image segmentation model with UNet++</li>
          </ul>
        </>
      ),
      position: "Software Developer",
      period: "Jan 2024 - Present",
      stack: [
        <FaReact key={"react"} />,
        <SiChakraui key={"chakra"} />,
        // <SiTensorflow key={"tensorflow"} />,
        <SiExpress key={"express"}/>,
        <SiFlask key={"flask"}/>,
        <FaDocker key={"docker"}/>,
        <SiMysql key={"mysql"}/>
      ],
      screenshots: [
        "/assets/projects/MySalak/1.jpg",
        "/assets/projects/MySalak/2.jpg",
        "/assets/projects/MySalak/3.jpg",
        "/assets/projects/MySalak/4.jpg",
        "/assets/projects/MySalak/5.jpg",
        "/assets/projects/MySalak/6.jpg",
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
      stack: [<SiFlask key={"flask"} />],
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
        <SiArduino key={"arduino"} />,
        <FaReact key={"react"} />,
        <SiChakraui key={"chakra"} />,
        <SiExpress key={"express"} />,
        <SiMysql key={"sql"} />,
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
              Reports on each of the customer&#39;s account (can be filtered by
              a range of date)
            </li>
            <li>Report export</li>
          </ul>
        </>
      ),
      position: "Full Stack Developer",
      period: "Jun - Nov 2023",
      stack: [
        <FaLaravel key={"laravel"} />,
        <BsBootstrapFill key={"bootstrap"} />,
        <SiMysql key={"sql"} />,
      ],
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
