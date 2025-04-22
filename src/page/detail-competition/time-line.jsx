import { asset_time_line } from "../../assets/images";
import { Noted } from "../../assets/noted";
import Contact_Us from "../competition/contact-us";

const Time_Line = ({ path, img_time_line }) => {
  return (
    <div className="w-full h-full">
      <Noted />
      {asset_time_line.map((item, index) => {
        return (
          <div key={index} className="flex w-full h-full relative">
            <img src={item.img_bg} className="size-full absolute inset-0" />
            <div className="flex flex-col w-full items-center gap-2.5 z-1 relative px-4 md:px-12 lg:px-24 pt-8 pb-[200px]">
              <img src={item.img_clock} />
              <h2 className="font-bold text-2xl sm:text-5xl text-center">
                <span>TIME LINE </span>
                <span className="text-[#FDC833]">{path}</span>
              </h2>
              <p className="w-full max-w-[620px] text-center font-medium font-jakarta-sans text-base sm:text-2xl">
                Join Various Exciting Competitions at Cakrawala Festival!
              </p>
              <img src={img_time_line} className="pt-12" />
            </div>
          </div>
        );
      })}
      <Noted />
      <Contact_Us />
    </div>
  );
};
export default Time_Line;
