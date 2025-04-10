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
    <div className="w-full h-full min-h-screen relative">
      <img
        src={asset_detail_competition.img_bg}
        className="w-full h-full absolute object-cover object-bottom"
      />
      <div className="flex flex-col items-center w-full py-44 gap-16 z-1 relative">
        <div className="text-center">
          <h1 className="font-bold text-5xl text-[#FDC833]">
            {competition.pathName}
          </h1>
          <h1 className="font-normal text-5xl">Competition</h1>
        </div>
        <div className="text-center font-normal text-2xl px-52 gap-4 flex flex-col">
          <p>{competition.description1}</p>
          <p>{competition.description2}</p>
        </div>
        <div className="flex gap-8">
          <Button_Guidebook_detail_competition />
          <Button_Contact_Us_Detail_Competition
            contact_pic={competition.contact_pic}
          />
        </div>
      </div>
      <Time_Line
        path={competition.pathName}
        img_time_line={competition.img_time_line}
      />
    </div>
  );
};
export default Hero_Detail_Competitions;
