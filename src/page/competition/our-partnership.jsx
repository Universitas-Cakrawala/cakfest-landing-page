import { asset_partners } from "../../assets/images";
import { Noted } from "../../assets/noted";
import { Slick_Partnership } from "./slick-slider/slick-list-partnership";

const Our_Partnership = () => {
  return (
    <>
      <Noted />
      <div className="relative w-full h-full pb-64 sm:pb-48 pt-12 lg:pt-4">
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet={asset_partners.img_bg_phone}
          />
          <source
            media="(max-width: 1000px)"
            srcSet={asset_partners.img_bg_tablet}
          />
          <source media="(min-width: 1001px)" srcSet={asset_partners.img_bg} />
          <img
            src={asset_partners.img_bg}
            className="w-full h-full absolute inset-0 object-cover object-bottom"
            alt="Partnership background"
          />
        </picture>
        <div className="w-full z-1 relative">
          <div className="flex flex-col items-center gap-2.5 px-4">
            <img
              src={asset_partners.img_stars}
              className="size-[120px] md:size-[152px]"
            />
            <h2 className="text-2xl sm:text-5xl font-bold text-center">
              <span>OUR</span>{" "}
              <span className="text-[#FDC833]">PARTNERSHIP</span>
            </h2>
            <p className="w-full max-w-[620px] text-center font-medium text-base sm:text-2xl">
              From Coding to Design, Join Various Exciting Competitions at
              Cakrawala Festival!
            </p>
          </div>
          <div className="w-full pt-20 pb-10 lg:px-32 space-y-2 md:space-y-5">
            <Slick_Partnership />
            <Slick_Partnership rtl />
          </div>
        </div>
      </div>
    </>
  );
};
export default Our_Partnership;
