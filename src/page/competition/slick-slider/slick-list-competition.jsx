import { useState } from "react";
import { asset_list_competition } from "../../../assets/images";
import Slider from "react-slick";
import { useNavigate } from "react-router";

const Slick_List_Competition = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [getPath, setGetPath] = useState("/");
  const [getPathOnHover, setGetPathOnHover] = useState("/");
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (getPath !== null) {
      setGetPath(path);
      navigate(`/details-competitions/${path}`);
      console.log(path);
    }
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    slideToScroll: 1,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 500,
  };

  return (
    <div className="slider-container w-screen overflow-hidden px-32 py-10">
      <Slider {...settings}>
        {asset_list_competition.map((item, index) => {
          const img_name_competition = item?.img_name_competition;
          const img_logo_competition = item?.img_logo_competition;
          const description = item?.description;
          const img_bg_list = item?.img_bg_list;
          return (
            <div key={index} className="flex justify-center">
              <div className="relative w-full h-full">
                <img
                  src={img_bg_list}
                  className="mx-[345px] pl-[40px]"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="flex absolute top-8 left-[420px] gap-10 z-10">
                  <img src={img_logo_competition} />
                  <div className="flex flex-col w-full items-center gap-4">
                    <img
                      className="h-[70px] w-[190px]"
                      src={img_name_competition}
                    />
                    <p className="font-normal text-xs text-center text-black w-80 ">
                      {description}
                    </p>
                    <a
                      className="cursor-pointer"
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setGetPathOnHover(item?.pathName);
                      }}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={() => {
                        handleClick(item?.pathName);
                      }}
                    >
                      <svg
                        width="125"
                        height="43"
                        viewBox="0 0 125 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_95_2"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="125"
                          height="43"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 0H117V4H121V8H125V35H121V39H117V43H8V39H4V35H0V8H4V4H8V0Z"
                            fill="#FDC833"
                          />
                        </mask>
                        <g mask="url(#mask0_95_2)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 0H117V4H121V8H125V35H121V39H117V43H8V39H4V35H0V8H4V4H8V0Z"
                            fill={
                              isHovered && getPathOnHover === item?.pathName
                                ? "#591266"
                                : "#7D1990"
                            }
                          />
                          <rect
                            x="8"
                            y="39"
                            width="109"
                            height="4"
                            fill="#591266"
                          />
                          <rect
                            x="117"
                            y="35"
                            width="4"
                            height="4"
                            fill="#591266"
                          />
                          <rect
                            x="121"
                            y="31"
                            width="4"
                            height="4"
                            fill="#591266"
                          />
                          <rect
                            x="117"
                            y="4"
                            width="109"
                            height="4"
                            transform="rotate(180 117 4)"
                            fill="#A865B5"
                          />
                          <rect
                            x="8"
                            y="8"
                            width="4"
                            height="4"
                            transform="rotate(180 8 8)"
                            fill="#A865B5"
                          />
                          <rect
                            x="4"
                            y="12"
                            width="4"
                            height="4"
                            transform="rotate(180 4 12)"
                            fill="#A865B5"
                          />
                          <path
                            d="M19.6113 24.192V22.752H18.1553V13.904H19.7713V22.592H23.9633V21.136H25.5953V22.752H24.1233V24.192H19.6113ZM27.5303 24.192V16.8H29.1463V24.192H27.5303ZM27.5303 15.52V13.904H29.1463V15.52H27.5303ZM31.0772 24.192V13.904H32.6932V18.256H33.9732V16.8H37.0452V18.256H38.5172V24.192H36.8852V18.4H34.1332V19.84H32.6932V24.192H31.0772ZM41.5957 24.192V22.752H40.1397V18.256H41.5957V16.8H46.1077V18.256H47.5797V22.592H49.0357V24.192H47.4197V22.752H46.1077V24.192H41.5957ZM41.7557 22.592H45.9477V18.4H41.7557V22.592ZM52.0982 24.192V22.752H50.6582V18.4H49.2022V16.8H50.6582V13.904H52.2582V16.8H56.6422V18.4H52.2582V22.592H56.4822V21.136H58.0982V22.752H56.6422V24.192H52.0982ZM63.2334 24.192V13.904H67.7614V15.36H69.2014V16.8H70.6734V21.296H69.2014V22.752H67.7614V24.192H63.2334ZM64.8494 22.592H67.6014V21.136H69.0414V16.96H67.6014V15.52H64.8494V22.592ZM74.0644 24.192V22.752H72.6084V18.256H74.0644V16.8H78.5764V18.256H80.0484V19.84H78.4164V18.4H74.2244V19.68H77.1364V21.296H74.2244V22.592H78.4164V21.12H80.0484V22.736H78.5764V24.192H74.0644ZM84.8794 24.192V22.752H83.4394V18.4H81.9834V16.8H83.4394V13.904H85.0394V16.8H89.4234V18.4H85.0394V22.592H89.2634V21.136H90.8794V22.752H89.4234V24.192H84.8794ZM93.7832 24.192V22.752H92.3272V18.256H93.7832V16.8H98.2952V18.256H99.7672V22.592H101.223V24.192H99.6072V22.752H98.2952V24.192H93.7832ZM93.9432 22.592H98.1352V18.4H93.9432V22.592ZM102.671 24.192V16.8H104.287V24.192H102.671ZM102.671 15.52V13.904H104.287V15.52H102.671ZM106.218 24.192V13.904H107.834V24.192H106.218Z"
                            fill="#F2E8F4"
                          />
                        </g>
                      </svg>
                    </a>
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
