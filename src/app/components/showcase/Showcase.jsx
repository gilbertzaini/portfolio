import React, { useEffect, useState } from "react";
import { Pagination, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "./showcase.css";
import Image from "next/image";

const Showcase = (data) => {
  const items = data.data;
  const [selected, setSelected] = useState(0);
  const [selectionSwiper, setSelectionSwiper] = useState(null);

  return (
    <section>
      <div className="showcase-container flex flex-col lg:flex-row items-center justify-center">
        <div className="showcase-slider h-1/2 lg:h-full w-full lg:w-9/12 rounded-xl flex items-center">
          <div className="showcase-swiper-logo hidden lg:block">
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
        <div className="showcase-right-bar flex flex-col lg:mb-0 h-1/2 lg:h-5/6 w-full lg:w-3/12">
          {/* title */}
          <div className="px-7 pt-3 md:pt-5 lg:pe-3 h-1/6">
            <h4 className="text-xl md:text-xl pb-1">
              {items[selected].heading}
            </h4>
            <div className="flex justify-between items-center">
              <h5 className="text-xs xl:text-sm whitespace-nowrap">
                {items[selected].position}
              </h5>
              <div className="showcase-period flex items-center px-2 whitespace-nowrap">
                <p className="text-xs my-auto">{items[selected].period}</p>
              </div>
            </div>
          </div>

          {/* option */}
          <Swiper
            className="showcase-option w:1/2 lg:w-full h-1/6 lg:h-1/6 md:-mt-5 mb-1"
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

          <div className="relative showcase-desc px-7 pb-8 lg:pe-3 w-full h-4/6">
            {/* stack */}
            <div className="h-1/6 showcase-stack flex items-center gap-3">
              {items[selected].stack.map((item, index) => (
                <div className="stack-wrapper text-xl lg:text-3xl" key={index}>
                  {item}
                </div>
              ))}
            </div>
            {/* detail */}
            <div className="h-5/6 showcase-detail text-xs md:text-sm lg:text-base text-justify pe-5 mt-5">
              {items[selected].text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
