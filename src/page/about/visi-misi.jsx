import { asset_about } from "../../assets/images";
import { Noted } from "../../assets/noted";

const VisiMisi = () => {
  return (
    <div className="flex flex-col w-full h-[1000px]">
      <Noted />
      <div className="relative w-full h-full">
        <img
          src={asset_about.img_bg_visi_misi}
          className="absolute inset-0 w-full h-full"
        />
        <div className="flex flex-col items-center w-full h-full gap-8 relative z-10 pt-32">
          <div className="flex flex-col items-center">
            <img src={asset_about.img_telescope} />
            <div className="flex gap-2.5">
              <h1 className="font-bold text-5xl text-[#FFFAEB]">OUR</h1>
              <h1 className="font-bold text-5xl text-[#FDC833]">VISION</h1>
            </div>
            <p className="w-[620px] font-medium text-2xl text-center pt-2.5">
              Transforming Cakrawala University into a dynamic hub where
              learning and play ignite innovation
            </p>
          </div>
          <div className="flex flex-col gap-2.5 justify-center">
            <div className="flex gap-2.5 justify-center">
              <h1 className="font-bold text-5xl text-[#FFFAEB]">OUR</h1>
              <h1 className="font-bold text-5xl text-[#FDC833]">MISSION</h1>
            </div>
            <div className="relative w-full h-full pt-2.5">
              <img src={asset_about.img_bg_misi} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VisiMisi;
