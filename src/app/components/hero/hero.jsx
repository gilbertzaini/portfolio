import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import "./hero.css";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="p-5 sm:px-14 lg:px-20 container flex flex-col-reverse lg:flex-row justify-between align-center">
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
            <span className="me-1">
              <MdOutlineFileDownload />
            </span>
            Resume
          </button>
        </div>
      </div>
      <div id="avatar" className="flex justify-center items-center">
        <img
          src={"/assets/avatar.png"}
          alt="avatar"
        />
        {/* <img src='../../assets/avatar.png' alt="avatar" /> */}
      </div>
    </section>
  );
};
