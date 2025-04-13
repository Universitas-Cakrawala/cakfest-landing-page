import { asset_prize_pool } from "../../assets/images";

const PrizePool = () => {
  return (
    <div className="w-full h-full">
      <div className="flex relative w-full h-full">
        <img
          src={asset_prize_pool.img_bg}
          className="size-full inset-0 absolute object-cover object-bottom"
        />
        <div className="flex flex-col items-center w-full h-full gap-2.5 pt-16 relative pb-96">
          <img
            src={asset_prize_pool.img_coin}
            className="w-[152.23px] h-[152.23px]"
          />
          <div className="flex gap-2.5">
            <h1 className="font-bold text-5xl">PRIZE POOL</h1>
            <h1 className="font-bold text-5xl text-[#FDC833]">PULUHAN JUTA</h1>
          </div>
          <p className="w-[620px] text-center font-medium font-jakarta-sans text-2xl">
            From Coding to Design, Join Various Exciting Competitions at
            Cakrawala Festival!
          </p>
          <img src={asset_prize_pool.img_prize} className="pt-20 " />
        </div>
      </div>
    </div>
  );
};
export default PrizePool;
