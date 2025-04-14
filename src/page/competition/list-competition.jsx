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
          className="size-full object-cover object-bottom"
        />
      </div>
      <div className="relative flex flex-col items-center gap-2.5 z-10 pt-8 pb-[200px]">
        <img src={asset_competition.img_piala} className="w-36 h-36" />
        <h2 className="inline-flex gap-2.5 text-2xl md:text-5xl font-bold">
          <span className="text-[#FFFAEB]">CHALLENGE</span>
          <span className="text-[#FDC833]">YOUR SKILLS!</span>
        </h2>
        <div className="max-w-[620px] text-center">
          <p className="w-full font-medium text-base md:text-2xl font-jakarta-sans">
            Join Various Exciting Competitions at Cakrawala Festival!
          </p>
        </div>
        <div className="w-full">
          <Slick_List_Competition />
        </div>
      </div>
    </div>
  );
};

export default ListCompetition;
