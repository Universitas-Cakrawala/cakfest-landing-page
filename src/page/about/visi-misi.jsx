import { asset_about } from "../../assets/images";
import { Noted } from "../../assets/noted";

const MISSIONS = [
  "Mengembangkan keterampilan praktis peserta melalui pengalaman yang relevan dan menarik, seolah sedang terlibat dalam permainan yang mendidik.",
  "Meningkatkan kepercayaan diri peserta dengan memberikan ruang untuk berkompetensi dan berkolaborasi.",
  "Mendorong partisipasi aktif mahasiswa Cakrawala University dalam merancang acara, serta memperkuat kolaborasi dan kekompakan antar jurusan.",
  "Mengintegrasi elemen edukasi dan hiburan untuk menciptakan pengalaman belajar yang menyenangkan dan berkesan.",
];

const VisiMisi = () => {
  return (
    <>
      <Noted />
      <div className="relative w-full h-full">
        <picture>
          <source media="(max-width: 600px)" srcSet={asset_about.img_bg_visi_misi_phone} />
          <source media="(max-width: 1000px)" srcSet={asset_about.img_bg_visi_misi_tablet} />
          <source media="(min-width: 1001px)" srcSet={asset_about.img_bg_visi_misi} />
          <img
            src={asset_about.img_bg_visi_misi}
            className="absolute inset-0 w-full h-full object-cover object-bottom"
            alt="Vision and mission background"
          />
        </picture>
        <div className="flex flex-col items-center w-full h-full gap-8 relative z-10 py-20 px-4 md:px-12 lg:px-24">
          <div className="flex flex-col items-center">
            <img src={asset_about.img_telescope} className="size-[100px] sm:size-[120px]" />
            <h2 className="font-bold text-2xl sm:text-5xl text-center">
              <span className="text-[#FFFAEB]">OUR</span>{" "}
              <span className="text-[#FDC833]">VISION</span>
            </h2>
            <p className="w-full max-w-[620px] font-medium font-jakarta-sans text-base sm:text-2xl text-center pt-2.5">
              Transforming Cakrawala University into a dynamic hub where learning and play ignite
              innovation
            </p>
          </div>
          <div className="flex flex-col gap-2.5 justify-center">
            <h2 className="font-bold text-2xl sm:text-5xl text-center">
              <span className="text-[#FFFAEB]">OUR</span>{" "}
              <span className="text-[#FDC833]">MISSION</span>
            </h2>
            <div className="relative w-full h-full pt-2.5 max-w-[1053px]">
              <ul className="space-y-5 relative px-2 sm:px-12 py-10 bg-[#591266] pixel-corners-2">
                <div className="w-full h-[15px] bg-[#9747A6] absolute top-0 left-0" />
                <div className="w-8 h-[15px] bg-[#9747A6] absolute top-[15px] right-0" />
                {MISSIONS.map((mission, index) => (
                  <li key={index} className="flex gap-4 items-center">
                    <svg
                      className="shrink-0 size-8 sm:size-10"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" fill="#D9D9D9" />
                      <rect x="30" width="10" height="20" fill="#C395CC" />
                      <rect y="20" width="10" height="20" fill="#C395CC" />
                      <rect x="10" y="30" width="30" height="10" fill="#C395CC" />
                      <rect width="30" height="10" fill="#C395CC" />
                    </svg>
                    <p className="font-medium font-jakarta-sans text-base sm:text-2xl">{mission}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VisiMisi;
