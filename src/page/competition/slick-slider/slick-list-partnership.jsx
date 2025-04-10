import { asset_list_partners } from "../../../assets/images";
import Slider from "react-slick";

export const Slick_Partnership = ({ rtl = false }) => {
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
    rtl,
  };
  return (
    <div className="slider-container w-full overflow-hidden px-[230px]">
      <Slider {...settings}>
        {asset_list_partners.map((item, index) => (
          <div
            key={index}
            className="focus:outline-none flex justify-center relative"
          >
            <img src={item.img_bg_list} className="max-w-[220px] h-auto" />
            <div className="flex justify-center items-center w-[90%]  h-full absolute top-0">
              <img src={item.img_logo_list} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
