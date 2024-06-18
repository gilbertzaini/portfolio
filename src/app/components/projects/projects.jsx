// import '/assets/1.jpg' from "../../../../public/assets/1.jpg"
import React from "react";
import { Card } from "../card/card";
import Image from "next/image";

export const Projects = () => {
  const cardItems = [
    
    {
      src: '/assets/1.jpg',
      heading: "DiTag",
      text: "Lorem ipsum dolor sit amet.",
      position: "Full Stack Developer",
      type: "Project"
    },
    {
      src: '/assets/1.jpg',
      heading: "Nema-APP",
      text: "Lorem ipsum dolor sit amet.",
      position: "Back-end Developer",
      type: "Project"
    },
    {
      src: '/assets/1.jpg',
      heading: "SIKEBAS",
      text: "Lorem ipsum dolor sit amet.",
      position: "Full Stack Developer",
      type: "Project"
    },
    {
      src: '/assets/1.jpg',
      heading: "PT. Kurnia Ciptamoda Gemilang",
      text: "Lorem ipsum dolor sit amet.",
      position: "Front-end Developer Intern",
      type: "Experience"
    },
    {
      src: '/assets/1.jpg',
      heading: "Serah Tahunan UMN 2023",
      text: "Lorem ipsum dolor sit amet.",
      position: "Lead Full Stack Developer",
      type: "Experience"
    },
    {
      src: '/assets/1.jpg',
      heading: "Mr. & Ms. UMN 2023",
      text: "Lorem ipsum dolor sit amet.",
      position: "Front-end Developer",
      type: "Experience"
    },
  ];

  return (
    <section className="secondary-bg">
      <h1 className="text-center my-5">Experiences</h1>
      <div className="flex flex-wrap justify-center items-center gap-5 mb-8 sm:gap-y-8 sm:gap-x-10">
        {cardItems.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </section>
  );
};