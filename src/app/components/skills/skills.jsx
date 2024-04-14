import React from "react";
import { FaGitlab } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaPhp,
  FaLaravel,
  FaReact,
  FaAngular,
  FaGithub,
} from "react-icons/fa6";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import {
  SiTypescript,
  SiExpress,
  SiFlask,
  SiArduino,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";
import "./skills.css";

export const Skills = () => {
  const skillItems = [
    {
      logo: <FaHtml5 fill="#f16529" />,
      name: "HTML",
    },
    {
      logo: <FaCss3 fill="#1aa5df" />,
      name: "CSS",
    },
    {
      logo: <BiLogoJavascript fill="#f7e025" />,
      name: "JavaScript",
    },
    {
      logo: <BiLogoTypescript fill="#087ece" />,
      name: "TypeScript",
    },
    {
      logo: <FaPhp fill="#4c83c3" />,
      name: "PHP",
    },
    {
      logo: <FaReact fill="#50d6ff" />,
      name: "React.js",
    },
    {
      logo: <FaAngular fill="#c50836" />,
      name: "Angular",
    },
    {
      logo: <FaLaravel fill="#ff3326" />,
      name: "Laravel",
    },
    {
      logo: <SiNextdotjs fill="#080808" />,
      name: "Next.js",
    },
    {
      logo: <SiMysql fill="#00608c" />,
      name: "MySQL",
    },
    {
      logo: <SiExpress fill="#4f4f4f" />,
      name: "Express.js",
    },
    {
      logo: <SiFlask fill="#0a0a0a" />,
      name: "Flask",
    },
    {
      logo: <SiArduino fill="#0c8c97" />,
      name: "Arduino",
    },
    {
      logo: <FaGithub fill="#0c0f0f" />,
      name: "GitHub",
    },
    {
      logo: <FaGitlab fill="#e34930" />,
      name: "GitLab",
    },
  ];

  return (
    <section>
      <h1 className="text-center my-5">Skills</h1>
      <div className="logo-container flex flex-wrap justify-around items-center gap-8 px-3">
        {skillItems.map((item) => (
          <div className="logo-wrapper flex flex-col justify-center items-center py-2">
            {item.logo}
            <div className="logo-text">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
