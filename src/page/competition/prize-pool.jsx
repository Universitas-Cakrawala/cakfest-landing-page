import { asset_prize_pool } from "../../assets/images";

const PrizePool = () => {
  return (
    <div className="w-full h-full">
      {asset_prize_pool.map((item, index) => {
        return (
          <div key={index} className="flex relative">
            <img src={item?.img_bg} className="w-full h-full" />
            <div className="absolute flex flex-col items-center w-full h-full gap-2.5 pt-16">
              <img src={item?.img_coin} className="w-[152.23px] h-[152.23px]" />
              <div className="flex gap-2.5">
                <h1 className="font-bold text-5xl">PRIZE POOL</h1>
                <h1 className="font-bold text-5xl text-[#FDC833]">
                  PULUHAN JUTA
                </h1>
              </div>
              <p className="w-[620px] text-center font-medium text-2xl">
                From Coding to Design, Join Various Exciting Competitions at
                Cakrawala Festival!
              </p>
              <img src={item?.img_prize} className="pt-20 " />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PrizePool;
