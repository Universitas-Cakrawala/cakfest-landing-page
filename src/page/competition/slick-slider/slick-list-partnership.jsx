import { asset_list_partners } from "../../../assets/images";
import Slider from "react-slick";

export const Slick_Partnership = ({ rtl = false }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slideToScroll: 1,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
    autoplaySpeed: 3000,
    pauseOnHover: false,
    speed: 3000,
    rtl,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full overflow-hidden">
      <Slider {...settings} className="h-full" adaptiveHeight>
        {asset_list_partners.map((item, index) => (
          <div className="px-2" key={index}>
            <div
              className="focus:outline-none w-full-full h-38 grid place-items-center relative py-10 px-24 lg:px-10 pixel-corners-2 bg-[#591266]"
              aria-label={item.name_partner}
            >
              <div className="w-full h-[14px] bg-[#9747A6] absolute top-0 left-0" />
              <div className="w-7 h-[14px] bg-[#9747A6] absolute top-[14px] right-0" />
              <div className="w-full h-[14px] bg-[#721783] absolute bottom-0 left-0" />
              <div className="w-7 h-[14px] bg-[#721783] absolute bottom-[14px] left-0" />
              <img
                src={item.img_logo_list}
                className="size-full shrink-0 relative object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
