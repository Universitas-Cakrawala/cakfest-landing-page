import { asset_partners } from "../../assets/images";
import { Noted } from "../../assets/noted";
import { Slick_Partnership } from "./slick-slider/slick-list-partnership";

const Our_Partnership = () => {
  return (
    <>
      <Noted />
      <div className="relative w-full h-full pt-4 pb-48">
        <img
          src={asset_partners.img_bg}
          className="w-full h-full absolute inset-0 object-cover object-bottom"
        />
        <div className="flex flex-col items-center w-full gap-2.5 relative z-1">
          <img src={asset_partners.img_stars} />
          <div className="flex gap-2.5">
            <h1 className="font-bold text-5xl">OUR</h1>
            <h1 className="font-bold text-5xl text-[#FDC833]">PARTNERSHIP</h1>
          </div>
          <p className="w-[620px] text-center font-medium text-2xl">
            From Coding to Design, Join Various Exciting Competitions at
            Cakrawala Festival!
          </p>
          <div className="w-full pt-20 space-y-7.5">
            <Slick_Partnership />
            <Slick_Partnership rtl />
          </div>
        </div>
      </div>
    </>
  );
};
export default Our_Partnership;
