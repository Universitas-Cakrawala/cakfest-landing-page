import { asset_list_competition } from "../../../assets/images";
import Slider from "react-slick";
import { Button_List_Competition } from "../button-svg";
import { useState, useRef } from "react";

const Slick_List_Competition = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "340px",
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    arrows: true,
    cssEase: "linear",
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 500,
    afterChange: setCurrentSlide,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerPadding: "240px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "140px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 830,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full overflow-hidden lg:px-32 py-10">
      <Slider {...settings} ref={sliderRef}>
        {asset_list_competition.map((item, index) => {
          const {
            img_name_competition,
            img_logo_competition,
            description1: description,
            img_bg_list,
          } = item;

          return (
            <div
              key={index}
              className={`relative size-full px-5 transition-opacity hover:opacity-100 ${
                index === currentSlide ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="relative w-full h-full">
                <img
                  src={img_bg_list}
                  className="absolute inset-0 w-full h-full"
                />
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 lg:gap-5 relative z-2 w-full h-full p-8">
                  <img
                    src={img_logo_competition}
                    className="w-full h-fit aspect-square lg:max-w-[200px] max-w-[150px] shrink-0"
                  />
                  <div className="flex flex-col w-full h-full items-center gap-4">
                    <img
                      className="h-auto w-full max-w-[200px]"
                      src={img_name_competition}
                    />
                    <p className="font-normal font-jakarta-sans text-sm lg:text-base text-balance text-center text-black w-full h-full">
                      {description}
                    </p>
                    <Button_List_Competition item={item} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Slick_List_Competition;
