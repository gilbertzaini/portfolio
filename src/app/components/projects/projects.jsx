import React from "react";
import { FaDocker, FaLaravel, FaReact } from "react-icons/fa6";
import {
  SiArduino,
  SiChakraui,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiJinja,
  SiMysql,
  SiPytorch,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import Showcase from "../showcase/Showcase";
import { TbSql } from "react-icons/tb";
import SectionTemplate from "../sectionTemplate/SectionTemplate";

const Projects = () => {
  const projects = [
    {
      src: "/assets/projects/NemaAppV2/logo.png",
      heading: "NemaAppV2",
      text: (
        <>
          <p>
            NemaApp is an Al-powered application for nematode identification
            using microscopic images. This app is designed to assist
            researchers, academics, and practitioners in agriculture and biology
            in distinguishing between genus of parasitic nematodes and feeding
            behavior of non-parasitic nematodes. In this project, I:
          </p>
          <ul>
            <li>
              Developed the application with FastApi, Jinja2, and Tailwind CSS
            </li>
            <li>
              Integrated 3 computer vision models for nematode identification
            </li>
            <li>
              Implemented pywebview to deliver a clean, native-like application
              interface
            </li>
            <li>
              Packaged the application with PyInstaller for both Windows and
              MacOS
            </li>
          </ul>
        </>
      ),
      position: "Full Stack Developer",
      period: "Feb 2025 - March 2025",
      stack: [
        <SiFastapi key={"flask"} />,
        <SiJinja key={"jinja"} />,
        <SiTailwindcss key={"tailwindcss"} />,
      ],
      screenshots: [
        "/assets/projects/NemaAppV2/1.png",
        "/assets/projects/NemaAppV2/2.png",
        "/assets/projects/NemaAppV2/3.png",
        "/assets/projects/NemaAppV2/4.png",
        "/assets/projects/NemaAppV2/5.png",
      ],
    },
    {
      src: "/assets/projects/MySalak/logo.png",
      heading: "MySalak",
      text: (
        <>
          <p>
            <a
              href="https://mysalak.com"
              target="_blank"
              className="text-cyan-400"
            >
              MySalak
            </a>{" "}
            is a part of Epics in IEEE 2024 project, which is aimed to help
            snakefruit farmers, especially those who are affiliated with
            Paguyuban Mitra Turindo. This project involves various process,
            starting from the IoT development, dataset collection, AI model
            traning, and the PWA development. In this project, I:
          </p>
          <ul>
            <li> Mapped the vegetation area with drones </li>
            <li> Labelled the captured vegetation dataset </li>
            <li>
              {" "}
              Trained an image segmentation model with UNet++ based on PyTorch
            </li>
            <li>
              {" "}
              Developed the front-end of MySalak PWA with React and ChakraUI{" "}
            </li>
            <li>
              Developed the back-end server with Express.js, Sequelize,
              WebSocket, and MySQL
            </li>
            <li>
              {" "}
              Integrated multiple weather prediction models and a YOLOv5 model
              with a Flask back-end server
            </li>
            <li>
              {" "}
              Implemented Leaflet with Polygons for vegetation area
              visualization
            </li>
            <li>Handled the history visualization with ApexCharts</li>
            <li>Implemented role-based authorization for admin pages</li>
            <li>
              {" "}
              Dockerized the services of MySalak and handled the deployment with
              a VPS{" "}
            </li>
          </ul>
        </>
      ),
      position: "Software Developer",
      period: "Jan 2024 - Present",
      stack: [
        <FaReact key={"react"} />,
        <SiChakraui key={"chakra"} />,
        <SiExpress key={"express"} />,
        <SiFlask key={"flask"} />,
        <SiPytorch key={"pytorch"} />,
        <FaDocker key={"docker"} />,
        <SiMysql key={"mysql"} />,
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
    // {
    //   src: "/assets/projects/NemaApp/logo.png",
    //   heading: "NemaApp",
    //   text: (
    //     <>
    //       <p>
    //         NemaApp is a project that integrates an agriculture-based AI model
    //         into a webapp to identify the species of a certain parasitic or
    //         non-parasitic organism based on its microscopic image. In this
    //         project, I:
    //       </p>
    //       <ul>
    //         <li>Developed the application with Flask</li>
    //         <li>Integrated both the parasitic and non-parasitic models</li>
    //         <li>
    //           Made bash scripts to install and run the application locally in
    //           MacOS
    //         </li>
    //         <li>
    //           Made batch scripts to install and run the application locally in
    //           Windows
    //         </li>
    //       </ul>
    //     </>
    //   ),
    //   position: "Back-end Developer",
    //   period: "Nov 2023 - Jan 2024",
    //   stack: [<SiFlask key={"flask"} />],
    //   screenshots: [
    //     "/assets/projects/NemaApp/1.png",
    //     "/assets/projects/NemaApp/2.png",
    //     "/assets/projects/NemaApp/3.png",
    //   ],
    // },
    {
      src: "/assets/projects/DiTag/logo.png",
      heading: "DiTag",
      text: (
        <>
          <p>
            DiTag is an IoT tracking device assembled with ESP32, a GPS Module,
            and a buzzer, along with a battery as its power source. The device
            can then be tracked on DiTag website, and a notification will be
            sent if the device is more than 20m apart. The buzzer can be rang
            remotely on the same website. In this project, I:
          </p>
          <ul>
            <li>Designed the hardware wiring</li>
            <li>Assembled the IoT device</li>
            <li>Programmed the ESP32</li>
            <li>Developed the front-end with React.js and ChakraUI</li>
            <li>
              {" "}
              Developed the back-end with Express.js, Sequelize, MySQL, and
              WebSocket
            </li>
            <li>Handled the authentication with session-based system</li>
            <li>Implemented account-based authorization</li>
            <li>
              Integrated Leaflet with Geolocation for precise mapping and
              distance measurement
            </li>
            <li>
              {" "}
              Implemented MQTT communication protocol on both the website and
              the device
            </li>
            <li> Deployed the webapp with cPanel</li>
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
            <li>Developed the application with Laravel</li>
            <li>
              Handled authentication and authorization with Laravel Breeze
            </li>
            <li>Implemented CRUD on multiple data tables</li>
            <li>Implemented export feature for all reports</li>
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
      <SectionTemplate data={projects} title={"Projects"} />{" "}
    </div>
  );
};

export default Projects;
