import { Link, useLocation } from "react-router";
import {
  asset_detail_competition,
  asset_list_competition,
} from "../../assets/images";
import {
  Button_Contact_Us_Detail_Competition,
  Button_Guidebook_detail_competition,
} from "../competition/button-svg";
import Time_Line from "./time-line";

const Hero_Detail_Competitions = () => {
  const { state } = useLocation();
  const competition = asset_list_competition.find(
    (item) => item.pathName === state?.path
  );

  if (!competition)
    return (
      <div className="w-full min-h-screen grid place-items-center">
        <div className="text-center space-y-2">
          <h1 className="font-bold text-5xl text-white">
            Data tidak ditemukan
          </h1>
          <Link to="/" className="text-[#FDC833] hover:underline text-xl">
            Kembali ke halaman utama
          </Link>
        </div>
      </div>
    );

  return (
    <>
      <div className="w-full h-full min-h-screen relative">
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet={asset_detail_competition.img_bg_phone}
          />
          <source
            media="(max-width: 1000px)"
            srcSet={asset_detail_competition.img_bg_tablet}
          />
          <source
            media="(min-width: 1001px)"
            srcSet={asset_detail_competition.img_bg}
          />
          <img
            src={asset_detail_competition.img_bg}
            className="w-full h-full absolute object-cover object-bottom"
            alt="Competition background"
          />
        </picture>
        <div className="flex flex-col items-center w-full pb-64 md:pb-44 pt-24 sm:pt-44 gap-8 sm:gap-16 z-1 relative px-4">
          <h1 className="text-center font-bold text-2xl sm:text-5xl">
            <span className="text-[#FDC833] block">{competition.pathName}</span>{" "}
            <span>Competition</span>
          </h1>
          <div className="text-center font-normal font-jakarta-sans text-base sm:text-2xl gap-4 flex flex-col">
            <p>{competition.description1}</p>
            <p>{competition.description2}</p>
          </div>
          <div className="hidden sm:flex gap-8 flex-wrap justify-center items-center">
            <Button_Guidebook_detail_competition />
            <Button_Contact_Us_Detail_Competition
              contact_pic={competition.contact_pic}
            />
          </div>
        </div>
      </div>
      <Time_Line
        path={competition.pathName}
        img_time_line={competition.img_time_line}
      />
    </>
  );
};
export default Hero_Detail_Competitions;
