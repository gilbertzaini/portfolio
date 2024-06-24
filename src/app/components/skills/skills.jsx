import React, { useEffect, useState } from "react";
import { FaGitlab } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaPhp,
  FaLaravel,
  FaReact,
  FaAngular,
  FaGithub,
  FaPython,
} from "react-icons/fa6";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import {
  SiTypescript,
  SiExpress,
  SiFlask,
  SiArduino,
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiChakraui,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import PythonLogo from "../icons/python-logo.svg";
import "./Skills.css";
import Image from "next/image";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth / 16 < 64) setIsMobile(true);
    else setIsMobile(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const skillItems = [
    {
      logo: <FaHtml5 fill="#f16529" />,
      name: "HTML",
      category: "Language",
    },
    {
      logo: <FaCss3 fill="#1aa5df" />,
      name: "CSS",
      category: "Language",
    },
    {
      logo: <BiLogoJavascript fill="#f7e025" />,
      name: "JavaScript",
      category: "Language",
    },
    {
      logo: <BiLogoTypescript fill="#087ece" />,
      name: "TypeScript",
      category: "Language",
    },
    {
      logo: <FaPhp fill="#4c83c3" />,
      name: "PHP",
      category: "Language",
    },
    {
      logo: <Image src={PythonLogo} alt="Python Logo" width="55" height="55" />,
      name: "Python",
      category: "Language",
    },
    {
      logo: <TbSql />,
      name: "SQL",
      category: "Language",
    },
    {
      logo: <FaReact fill="#50d6ff" />,
      name: "React.js",
      category: "Framework",
    },
    {
      logo: <SiNextdotjs fill="#080808" />,
      name: "Next.js",
      category: "Framework",
    },
    {
      logo: <FaAngular fill="#c50836" />,
      name: "Angular",
      category: "Framework",
    },
    {
      logo: <FaLaravel fill="#ff3326" />,
      name: "Laravel",
      category: "Framework",
    },
    {
      logo: <SiExpress fill="#4f4f4f" />,
      name: "Express.js",
      category: "Framework",
    },
    {
      logo: <SiFlask fill="#0a0a0a" />,
      name: "Flask",
      category: "Framework",
    },
    {
      logo: <SiArduino fill="#0c8c97" />,
      name: "Arduino",
      category: "Additional",
    },
    {
      logo: <BsBootstrapFill fill="#8011f5" />,
      name: "Bootstrap",
      category: "Additional",
    },
    {
      logo: <SiTailwindcss fill="#38bdf8" />,
      name: "Tailwind",
      category: "Additional",
    },
    {
      logo: <SiChakraui fill="#60c9ca" />,
      name: "ChakraUI",
      category: "Additional",
    },
    // {
    //   logo: <FaGithub fill="#0c0f0f" />,
    //   name: "GitHub",
    //   category: "Tools",
    // },
    // {
    //   logo: <FaGitlab fill="#e34930" />,
    //   name: "GitLab",
    //   category: "Tools",
    // },
  ];

  let languageArr = [];
  let frameworkArr = [];
  let toolsArr = [];

  skillItems.forEach((item, index) => {
    const frag = (
      <div
        key={index}
        className="logo-wrapper flex flex-col justify-center items-center py-2"
      >
        {item.logo}
        <div className="logo-text">{item.name}</div>
      </div>
    );

    if (item.category === "Language") languageArr.push(frag);
    else if (item.category === "Framework") frameworkArr.push(frag);
    else toolsArr.push(frag);
  });

  return (
    <section>
      <h1 className="text-center my-5">Skills</h1>
      <div className="logo-container flex lg:flex-col flex-wrap justify-around items-center gap-8 px-5 sm:px-14">
        {isMobile ? (
          <>
            {skillItems.map((item, index) => (
              <div
                key={index}
                className="logo-wrapper flex flex-col justify-center items-center py-2"
              >
                {item.logo}
                <div className="logo-text">{item.name}</div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div
              data-aos="fade-down"
              className="logo-category-container flex justify-between items-center gap-8"
            >
              {languageArr}
            </div>
            <div
              data-aos="fade-down"
              className="logo-category-container flex justify-between items-center gap-8"
            >
              {frameworkArr}
            </div>
            <div
              data-aos="fade-down"
              className="logo-category-container flex justify-between items-center gap-8"
            >
              {toolsArr}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;