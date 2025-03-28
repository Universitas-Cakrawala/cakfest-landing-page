import { asset_partners } from "../../assets/images";
import { Noted } from "../../assets/noted";
import {
  Slick_Bottom_Partnership,
  Slick_Top_Partnership,
} from "./slick-slider/slick-list-partnership";

const Our_Partnership = () => {
  return (
    <div className="z-10">
      <Noted />
      {asset_partners.map((item, index) => {
        return (
          <div key={index} className="relative">
            <img src={item.img_bg} className="w-screen h-screen" />
            <div className="flex flex-col items-center w-full gap-2.5 absolute top-8">
              <img src={item?.img_stars} />
              <div className="flex gap-2.5">
                <h1 className="font-bold text-5xl">OUR</h1>
                <h1 className="font-bold text-5xl text-[#FDC833]">
                  PARTNERSHIP
                </h1>
              </div>
              <p className="w-[620px] text-center font-medium text-2xl">
                From Coding to Design, Join Various Exciting Competitions at
                Cakrawala Festival!
              </p>
              {/* <div className=""> */}
              <Slick_Top_Partnership />
              <Slick_Bottom_Partnership />
              {/* </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Our_Partnership;
