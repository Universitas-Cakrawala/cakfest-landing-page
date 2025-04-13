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
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full overflow-hidden lg:px-32 py-10">
      <Slider {...settings} className="h-full" adaptiveHeight>
        {asset_list_partners.map((item, index) => (
          <div className="px-2" key={index}>
            <div
              className="focus:outline-none w-full-full h-38 grid place-items-center relative py-10 px-24 lg:px-10"
              aria-label={item.name_partner}
            >
              <img
                src={item.img_bg_list}
                className="size-full absolute inset-0"
              />
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
