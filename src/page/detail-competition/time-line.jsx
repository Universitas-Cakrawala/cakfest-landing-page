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
            <img src={item?.img_bg} className="w-full h-full" />
            <div className="flex flex-col w-full items-center absolute top-[135px] gap-2.5">
              <img src={item?.img_clock} />
              <div className="flex gap-2.5">
                <h1 className="font-bold text-5xl">TIME LINE </h1>
                <h1 className="font-bold text-5xl text-[#FDC833]">{path}</h1>
              </div>
              <p className="flex w-[620px] text-center font-medium text-2xl">
                From Coding to Design, Join Various Exciting Competitions at
                Cakrawala Festival!
              </p>
              <img src={img_time_line} className="pt-[90px]" />
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
