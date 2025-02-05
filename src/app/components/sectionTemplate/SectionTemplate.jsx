import React, { useEffect, useState } from "react";
import { Pagination, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "./SectionTemplate.css";
import Image from "next/image";

const SectionTemplate = (props) => {
  const title = props.title;
  const data = props.data;
  const [selected, setSelected] = useState(0);

  return (
    <section>
      <div className="template-container flex items-center justify-between w-full">
        {/* Title */}
        <div className="template-title flex flex-col justify-between items-center w-1/12 h-full">
          <div className="template-title-bar w-1/12 h-1/6 mx-auto"></div>
          <h1 className="my-auto text-4xl font-montserrat">{title}</h1>
          <div className="template-title-bar w-1/12 h-3/6 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row h-full w-11/12">
          {/* Detail */}
          <div className="template-detail flex flex-col w-full lg:w-10/12 h-5/6 lg:h-full pt-3 ps-2 lg:p-5">
            <div className="template-detail-title flex flex-col justify-between items-center h-auto pe-3">
              <div className="flex gap-2 lg:gap-5 items-center justify-start w-full">
                <div className="template-detail-logo h-8 w-8 lg:h-11 lg:w-11">
                  <Image
                    src={data[selected].src}
                    alt={"logo"}
                    fill
                    // style={{ objectFit: "contain" }}
                  ></Image>
                </div>
                <h1 className="text-4xl lg:text-5xl font-montserrat">
                  {data[selected].heading}
                </h1>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center  justify-start w-full">
                <div className="template-detail-position lg:w-4/6 text-sm lg:text-lg font-montserrat">
                  <strong>
                    {data[selected].position} | {data[selected].period}
                  </strong>
                </div>
                <div className="template-detail-stack w-full gap-2 my-2 lg:w-2/6 h-2/4 flex items-center m-auto overflow-x-auto overflow-y-hidden">
                  {data[selected].stack.map((item, index) => (
                    <div
                      className="stack-wrapper text-xl lg:text-3xl"
                      key={index}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Swiper
              className="template-detail-images-container w-full h-2/6 mb-1"
              slidesPerView={1.2}
              spaceBetween={20}
              slidesOffsetBefore={20}
              loop={true}
              pagination={{ clickable: true }}
              grabCursor={true}
              breakpoints={{
                1024: {
                  // When screen width is 1024px (lg) or larger
                  slidesPerView: 3.2, // Show 3 slides
                },
              }}
            >
              {data[selected].screenshots.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="template-detail-image relative w-2/6 h-full flex-none"
                >
                  <Image
                    src={item}
                    alt="image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="template-detail-desc h-3/6 mt-3 pe-3 lg:pe-5 overflow-y-auto text-justify">
              {data[selected].text}
            </div>
          </div>

          {/* Options */}
          <div className="w-full lg:w-2/12 h-1/6 lg:h-full flex items-center justify-center pe-3 lg:pe-0">
            <div className="template-options w-full lg:w-3/6 h-1/2 lg:h-5/6 rounded-full flex lg:flex-col gap-5 lg:gap-10 px-2 lg:px-0 lg:py-5 items-center justify-center overflow-y-auto">
              {data.map((item, index) => (
                <button
                  className="relative template-options-item p-7 lg:p-10 rounded-full flex-none"
                  onClick={() => setSelected(index)}
                  key={index}
                >
                  <Image
                    src={item.src}
                    alt={item.heading}
                    fill
                  ></Image>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTemplate;
