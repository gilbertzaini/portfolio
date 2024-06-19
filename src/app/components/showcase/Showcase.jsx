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

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section>
      <h1 className="text-center my-5">{data.title}</h1>

      <div className="showcase-container flex flex-col lg:flex-row align-center justify-center">
        <div className="showcase-slider w-full lg:w-9/12 rounded-xl flex align-center">
          <Swiper
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
            <SwiperSlide>
              <Image
                className="object-contain w-full h-full"
                src={items[selected].src}
                alt={items[selected].heading}
                layout="fill"
                objectFit="contain"
              ></Image>
            </SwiperSlide>
            {items[selected].screenshots.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item}
                  alt={`${items[selected].heading} - ${index}`}
                  layout="fill"
                  objectFit="contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="showcase-right-bar flex flex-col lg:py-5 w-full lg:w-3/12">
          <Swiper
            className="showcase-option w-full h-1/6"
            slidesPerView={1.5}
            spaceBetween={10}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <button
                  className="showcase-option-item"
                  onClick={() => {
                    setSelected(index);
                  }}
                  disabled={item.heading === "Coming Soon"}
                >
                  <Image
                    src={item.src}
                    alt={item.heading}
                    layout="fill"
                    objectFit="contain"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="showcase-desc ps-3 pt-3 lg:pt-5">
            <h4 className="text-2xl lg:text-3xl">{items[selected].heading}</h4>
            <h5 className="text-sm lg:text-base">{items[selected].position}</h5>
            <div className="flex my-3 align-center gap-3">
              {items[selected].stack.map((item, index) => (
                <div className="stack-wrapper text-xl lg:text-3xl" key={index}>
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs lg:text-base">{items[selected].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
