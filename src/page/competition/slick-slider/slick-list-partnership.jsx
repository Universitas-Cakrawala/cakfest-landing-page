import { asset_list_partners } from "../../../assets/images";
import Slider from "react-slick";
export const Slick_Top_Partnership = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    slideToScroll: 1,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
    autoplaySpeed: 3000,
    pauseOnHover: false,
    speed: 3000,
  };
  return (
    <div className="slider-container w-full overflow-hidden px-[230px] pt-20 ">
      <Slider {...settings}>
        {asset_list_partners.map((item, index) => (
          <div key={index} className="focus:outline-none flex justify-center">
            <img src={item?.img_bg_list} className="max-w-[220px] h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export const Slick_Bottom_Partnership = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    slideToScroll: 1,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    autoplaySpeed: 3000,
    speed: 3000,
    rtl: true,
  };
  return (
    <div className="slider-container w-full overflow-hidden px-[230px] ">
      <Slider {...settings}>
        {asset_list_partners.map((item, index) => (
          <div key={index} className="focus:outline-none flex justify-center">
            <img src={item?.img_bg_list} className="max-w-[220px] h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
