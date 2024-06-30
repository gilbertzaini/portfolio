import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdDarkMode, MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import "./hero.css";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const Hero = () => {
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
    <section className="relative p-5 sm:px-14 lg:px-20 container flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center">
      <button
        id="dark-mode-button"
        className="z-10 rounded-full w-10 h-10 absolute top-10 right-10 lg:right-5"
        onClick={() => {
          toggleDarkMode();
        }}
      >
        <MdDarkMode />
      </button>

      <div id="description" className="flex self-start lg:self-auto flex-col justify-center pl-5 gap-5">
        <h3 className="text-2xl lg:text-5xl">Hi!</h3>
        <h1 className="text-3xl lg:text-6xl">I&#39;m Gilbert Zaini</h1>
        <h3 className="text-2xl lg:text-5xl">
          And I&#39;m a{" "}
          <strong>
            {/* Web Developer */}
            <ReactTyped
              loop
              backSpeed={50}
              typeSpeed={50}
              strings={["Web Developer", "IoT Engineer", "Software Developer"]}
              backDelay={2500}
              showCursor={false}
            />
          </strong>
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
        <div className="w-72 h-72 mb-10 lg:mb-0 md:h-96 md:w-96 relative">
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

export default Hero;
