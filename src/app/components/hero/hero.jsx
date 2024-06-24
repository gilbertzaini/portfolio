import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdDarkMode, MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import "./Hero.css";
import Link from "next/link";

export const Hero = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
    console.log("clicked");
  };

  return (
    <section className="relative p-5 sm:px-14 lg:px-20 container flex flex-col-reverse lg:flex-row justify-center lg:justify-around align-center">
      <button
        id="dark-mode-button"
        className="z-10 rounded-full w-10 h-10 absolute top-10 right-10 lg:right-5"
        onClick={() => {
          toggleDarkMode();
        }}
      >
        <MdDarkMode />
      </button>

      <div id="description" className="flex flex-col justify-center pl-5 gap-5">
        <h3 className="text-2xl lg:text-5xl">Hi!</h3>
        <h1 className="text-3xl lg:text-6xl">I'm Gilbert Zaini</h1>
        <h3 className="text-2xl lg:text-5xl">
          And I'm a <strong>Web Developer</strong>
        </h3>
        <div id="resume" className="flex items-center gap-x-5">
          <button className="icons-btn">
            <Link href={"https://www.github.com/gilbertzaini"} target="_blank">
              <FaGithub />
            </Link>
          </button>
          <button className="icons-btn">
            <Link
              href={"https://www.linkedin.com/in/gilbert-zaini-98a107278/"}
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
          </button>
          <button id="resumeButton" className="flex items-center">
            <Link
              href={"/Gilbert Zaini_Resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <MdOutlineFileDownload />
              Resume
            </Link>
          </button>
        </div>
      </div>
      <div
        id="avatar"
        className="lg:me-5 relative flex justify-center items-center"
      >
        <div className="w-96 h-96 relative">
          <Image
            src={"/assets/avatar.png"}
            alt="avatar"
            fill="true"
            style={{ objectFit: "contain", borderRadius: "50%" }}
          />
        </div>
        {/* <img src='../../assets/avatar.png' alt="avatar" /> */}
      </div>
    </section>
  );
};
