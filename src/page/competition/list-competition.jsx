import { asset_competition } from "../../assets/images";
import { Noted } from "../../assets/noted";
import Slick_List_Competition from "./slick-slider/slick-list-competition";
const ListCompetition = () => {
  return (
    <div className="flex flex-col w-full h-full relative">
      <Noted />
      <div className="absolute w-full h-full">
        <img
          src={asset_competition.img_bg_competition}
          className="w-full h-full"
        />
      </div>
      <div className="relative flex flex-col items-center  gap-2.5 z-10 pt-8 pb-[200px]">
        <img src={asset_competition.img_piala} className="w-36 h-36" />
        <div className="flex gap-2.5">
          <h1 className="font-bold text-5xl text-[#FFFAEB]">CHALLENGE</h1>
          <h1 className="font-bold text-5xl text-[#FDC833]">YOUR SKILLS!</h1>
        </div>
        <div className="w-[620px] text-center">
          <p className="font-medium text-2xl">
            From Coding to Design, Join Various Exciting Competitions at
            Cakrawala Festival!
          </p>
        </div>
        <div>
          <Slick_List_Competition />
        </div>
      </div>
    </div>
  );
};

export default ListCompetition;
