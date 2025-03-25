import { Noted } from "../../assets/noted";
import Piala from "../../assets/piala.png";
import BackgroundListCompetition from "../../assets/background-list-competition.png";
import Slick_List_Competition from "./slick-slider/slick-list-competition";
const ListCompetition = () => {
  return (
    <div className="flex flex-col w-screen h-screen relative">
      <Noted />
      <div className="flex absolute">
        <div className="relative w-full h-full">
          <img src={BackgroundListCompetition} className="w-screen h-screen" />
        </div>
        <div className="flex flex-col items-center w-full h-full  absolute gap-2.5 z-10 pt-28">
          <img src={Piala} className="w-36 h-36" />
          <div className="flex gap-2.5">
            <h1 className="font-bold font-normal text-5xl">CHALLANGE</h1>
            <h2 className="font-bold font-normal text-5xl text-[#FDC833]">
              YOUR SKILLS!
            </h2>
          </div>
          <div className="w-[620px] text-center">
            <p className="font-normal font-medium text-2xl">
              From Coding to Design, Join Various Exciting Competitions at
              Cakrawala Festival!
            </p>
          </div>
          <div>
            <Slick_List_Competition />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListCompetition;
