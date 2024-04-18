import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import "./hero.css";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="p-5 sm:px-14 lg:px-44 container flex justify-between align-center">
      <div id="description" className="flex flex-col justify-center pl-5">
        <h3>Hi!</h3>
        <h1>I'm Gilbert Zaini</h1>
        <h3>
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
          <button className="flex items-center">
            <span className="ml-1">
              <MdOutlineFileDownload />
            </span>
            Resume
          </button>
        </div>
      </div>
      <div id="avatar" className="flex justify-center items-center">
        <Image src={"/assets/1.jpg"} width={500} height={500} alt="avatar" />
        {/* <img src='../../assets/avatar.png' alt="avatar" /> */}
      </div>
    </section>
  );
};
