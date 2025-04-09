import { asset_list_competition } from "../../../assets/images";
import Slider from "react-slick";
import { Button_List_Competition } from "../button-svg";

const Slick_List_Competition = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "340px",
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: false,
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
          const description = item?.description1;
          const img_bg_list = item?.img_bg_list;
          return (
            <div key={index} className="relative h-[270px] w-[640px] px-5">
              <div className="relative w-full h-full">
                <img
                  src={img_bg_list}
                  className="absolute inset-0 w-full h-full"
                />
                <div className="flex gap-5 relative z-2 w-full h-full p-8">
                  <img src={img_logo_competition} />
                  <div className="flex flex-col w-full items-center gap-4">
                    <img
                      className="h-[70px] w-[190px]"
                      src={img_name_competition}
                    />
                    <p className="font-normal text-xs text-center text-black w-[340px] h-[65px] overflow-hidden line-clamp-4">
                      {description}
                    </p>
                    <Button_List_Competition item={item} />
                  </div>
                </div>
              </div>
            </div>

            // <div key={index} className="flex justify-center">
            //   <div className="relative w-full h-full">
            //     <img
            //       src={img_bg_list}
            //       className="mx-[345px] pl-[40px]"
            //       style={{ width: "100%", height: "100%" }}
            //     />
            //     <div className="flex absolute top-8 left-[420px] gap-10 z-10">
            //       <img src={img_logo_competition} />
            //       <div className="flex flex-col w-full items-center gap-4">
            //         <img
            //           className="h-[70px] w-[190px]"
            //           src={img_name_competition}
            //         />
            //         <p className="font-normal text-xs text-center text-black w-[340px] h-[65px] overflow-hidden line-clamp-4">
            //           {description}
            //         </p>
            //         <Button_List_Competition item={item} />
            //       </div>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Slick_List_Competition;
