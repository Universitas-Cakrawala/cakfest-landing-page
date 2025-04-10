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
    <div className="flex flex-col w-full h-[1000px]">
      <Noted />
      <div className="relative w-full h-full">
        <img
          src={asset_about.img_bg_visi_misi}
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="flex flex-col items-center w-full h-full gap-8 relative z-10 py-20">
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
            <div className="relative w-full h-full pt-2.5 max-w-[1053px]">
              <svg
                className="w-full h-full absolute inset-0"
                viewBox="0 0 1053 408"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="16" width="1021" height="408" fill="#591266" />
                <rect y="16" width="1053" height="376" fill="#591266" />
                <rect x="16" width="1021" height="16" fill="#9747A6" />
                <rect x="1021" y="16" width="32" height="16" fill="#9747A6" />
              </svg>
              <ul className="space-y-5 relative px-12 py-6">
                {MISSIONS.map((mission, index) => (
                  <li key={index} className="flex gap-4 items-center">
                    <svg
                      className="shrink-0 size-10"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" fill="#D9D9D9" />
                      <rect x="30" width="10" height="20" fill="#C395CC" />
                      <rect y="20" width="10" height="20" fill="#C395CC" />
                      <rect
                        x="10"
                        y="30"
                        width="30"
                        height="10"
                        fill="#C395CC"
                      />
                      <rect width="30" height="10" fill="#C395CC" />
                    </svg>
                    <p className="font-medium text-2xl">{mission}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VisiMisi;
