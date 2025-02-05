import React from "react";
import { FaAngular, FaPython } from "react-icons/fa6";
import { BsBootstrapFill } from "react-icons/bs";
import {
  SiExpress,
  SiFlask,
  SiJupyter,
  SiMysql,
  SiTensorflow,
} from "react-icons/si";
import Showcase from "../showcase/Showcase";
import SectionTemplate from "../sectionTemplate/SectionTemplate";

const Experiences = () => {
  const experiences = [
    {
      src: "/assets/experiences/umn/umn.png",
      heading: "Universitas Multimedia Nusantara",
      text: (
        <>
          <p>
            As a laboratory assistant of Image Processing subject, I was tasked
            to conduct laboratory sessions for the course, focusing on the
            application of image processing techniques and development of
            image-based machine learning models using Python, with Jupyter Lab
            and Google Colab as its platform. The materials range from basic
            image transformation, filters, morphology image processing, image
            segmentation, feature detection and description, supervised learning
            with KNN, unsupervised learning with K-Means Clustering, and
            Tensorflow Keras-based CNN Models for Image Classification
          </p>
        </>
      ),
      position: "Laboratory Assistant",
      period: "Aug 2024 - Jan 2025",
      stack: [
        <FaPython key={"python"} />,
        <SiJupyter key={"jupyter"} />,
        <SiTensorflow key={"tensorflow"} />,
      ],
      screenshots: [
        "/assets/experiences/umn/1.png",
        "/assets/experiences/umn/2.png",
        "/assets/experiences/umn/3.png",
        "/assets/experiences/umn/4.png",
        "/assets/experiences/umn/5.png",
      ],
    },
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
        <SiExpress key={"express"} />,
        <SiMysql key={"sql"} />,
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
      <SectionTemplate data={experiences} title={"Experiences"} />
    </div>
  );
};

export default Experiences;
