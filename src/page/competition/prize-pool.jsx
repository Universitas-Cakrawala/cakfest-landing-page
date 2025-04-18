import { asset_prize_pool } from "../../assets/images";

const PrizePool = () => {
  return (
    <div className="w-full h-full">
      <div className="flex relative w-full h-full">
        <picture>
          <source media="(max-width: 600px)" srcSet={asset_prize_pool.img_bg_phone} />
          <source media="(max-width: 1000px)" srcSet={asset_prize_pool.img_bg_tablet} />
          <source media="(min-width: 1001px)" srcSet={asset_prize_pool.img_bg} />
          <img
            src={asset_prize_pool.img_bg}
            className="size-full inset-0 absolute object-cover object-bottom"
            alt="Prize pool background"
          />
        </picture>
        <div className="flex flex-col items-center w-full h-full gap-2.5 pt-16 px-4 relative pb-72 sm:pb-84">
          <img src={asset_prize_pool.img_coin} className="size-[120px] md:size-[152px]" />
          <h2 className="text-2xl sm:text-5xl font-bold text-center">
            <span className="text-[#FFFAEB]">PRIZE POOL</span>{" "}
            <span className="text-[#FDC833]">PULUHAN JUTA</span>
          </h2>
          <p className="w-full max-w-[620px] text-center font-medium font-jakarta-sans text-base sm:text-2xl">
            Join Various Exciting Competitions at Cakrawala Festival!
          </p>
          <picture>
            <source media="(max-width: 600px)" srcSet={asset_prize_pool.img_prize_phone} />
            <source media="(max-width: 1000px)" srcSet={asset_prize_pool.img_prize_tablet} />
            <source media="(min-width: 1001px)" srcSet={asset_prize_pool.img_prize} />
            <img
              src={asset_prize_pool.img_prize}
              className="lg:-mt-6 pt-10 lg:pt-0 px-4 md:px-16 lg:px-40 w-full max-w-full"
              alt="Prize pool"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
export default PrizePool;
