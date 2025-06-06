import { asset_competition } from "../../assets/images";
import { Noted } from "../../assets/noted";
import Slick_List_Competition from "./slick-slider/slick-list-competition";
const ListCompetition = () => {
  return (
    <div id="competition-section" className="flex flex-col w-full h-full relative">
      <Noted />
      <picture>
        <source media="(max-width: 600px)" srcSet={asset_competition.img_bg_competition_phone} />
        <source media="(max-width: 1000px)" srcSet={asset_competition.img_bg_competition_tablet} />
        <source media="(min-width: 1001px)" srcSet={asset_competition.img_bg_competition} />
        <img
          src={asset_competition.img_bg_competition}
          className="absolute inset-0 size-full object-cover object-bottom"
          alt="Competition background"
        />
      </picture>
      <div className="relative z-1 pt-8 pb-[200px]">
        <div className="flex flex-col items-center gap-2.5 px-4">
          <img src={asset_competition.img_piala} className="size-[120px] md:size-[152px]" />
          <h2 className="text-2xl sm:text-5xl font-bold text-center">
            <span className="text-[#FFFAEB]">CHALLENGE</span>{" "}
            <span className="text-[#FDC833]">YOUR SKILLS!</span>
          </h2>
          <div className="w-full max-w-[620px] text-center">
            <p className="w-full font-medium text-base sm:text-2xl font-jakarta-sans text-balance">
              Compete, create, and conquer. This is your arena, own it!
            </p>
          </div>
        </div>
        <div className="w-full">
          <Slick_List_Competition />
        </div>
      </div>
    </div>
  );
};

export default ListCompetition;
