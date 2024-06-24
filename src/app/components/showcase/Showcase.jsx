import React, { useEffect, useState } from "react";
import { Pagination, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "./Showcase.css";
import Image from "next/image";

const Showcase = (data) => {
  const items = data.data;
  const [selected, setSelected] = useState(0);
  const [selectionSwiper, setSelectionSwiper] = useState(null);

  return (
    <section>
      <div className="showcase-container flex flex-col lg:flex-row items-center justify-center">
        <div className="showcase-slider h-full w-full lg:w-9/12 rounded-xl flex items-center">
          <div
            data-aos="zoom-out"
            className="showcase-swiper-logo hidden lg:block"
          >
            <Image
              src={items[selected].src}
              alt={items[selected].heading}
              fill="true"
              style={{
                objectFit: "contain",
                borderRadius: "50%",
                background: "transparent",
              }}
            ></Image>
          </div>
          <Swiper
            className="w-11/12 lg:w-3/4 h-3/4"
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[EffectCreative, Pagination]}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
          >
            {items[selected].screenshots.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item}
                  alt={`${items[selected].heading} - ${index}`}
                  fill="true"
                  style={{ objectFit: "contain" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="showcase-right-bar flex flex-col h-full mb-3 lg:mb-0 lg:h-5/6 lg:py-5 w-full lg:w-3/12">
          <div className="ps-7 pt-5 lg:pt-0 pe-3 lg:mb-3">
            <h4 className="text-2xl pb-1">{items[selected].heading}</h4>
            <div className="flex justify-between items-center">
              <h5 className="text-sm lg:text-base">
                {items[selected].position}
              </h5>
              <div className="showcase-period flex items-center px-2 lg:px-3">
                <p className="text-xs my-auto">{items[selected].period}</p>
              </div>
            </div>
          </div>
          <Swiper
            className="showcase-option w:1/2 lg:w-full h-1/6 mt-2 lg:mt-0"
            slidesPerView={2.5}
            spaceBetween={20}
            slidesOffsetBefore={5}
            slidesOffsetAfter={20}
            onSwiper={setSelectionSwiper}
            onSlideChange={() => {
              setSelected(selectionSwiper.activeIndex);
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <button
                  className="showcase-option-item h-full w-full"
                  onClick={() => {
                    selectionSwiper.slideTo(index);
                    setSelected(index);
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.heading}
                    fill="true"
                    style={{ objectFit: "contain" }}
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="showcase-desc ps-7 pe-3 pt-3 lg:pt-5 w-full h-auto">
            <div className="showcase-stack flex  items-center gap-3">
              {items[selected].stack.map((item, index) => (
                <div className="stack-wrapper text-xl lg:text-3xl" key={index}>
                  {item}
                </div>
              ))}
            </div>
            <div className="showcase-detail text-xs lg:text-base text-justify pe-5 mt-5 ">
              {items[selected].text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
