import { asset_about } from "../../assets/images";
import Contact_Us from "../competition/contact-us";
import VisiMisi from "./visi-misi";

const About = () => {
  return (
    <>
      <div className="w-full min-h-screen relative flex justify-center">
        <img
          src={asset_about.img_bg_hero}
          className="absolute w-full h-full object-cover"
        />
        <div className="relative z-2 flex flex-col items-center w-full h-full gap-16 py-64">
          <img src={asset_about.img_title} className="w-[840px] h-[237px]" />
          <div className="font-medium text-2xl w-full max-w-[1272px] space-y-6 text-center">
            <p>
              Cakrawala Festival hadir sebagai ajang bagi siswa dan mahasiswa
              untuk mengasah kreativitas, membangun kepercayaan diri, serta
              memperluas relasi melalui berbagai kompetisi akademik dan
              non-akademik dengan nuansa yang menyenangkan.
            </p>
            <p>
              Mengusung tema "Young Creators, Future Innovators", Cakrawala
              Festival merepresentasikan perjalanan kreatif dan inovatif para
              peserta. Mereka tidak hanya akan diuji melalui kompetisi, tetapi
              juga mendapatkan kesempatan untuk mengembangkan keterampilan yang
              akan membentuk mereka menjadi inovator masa depan.
            </p>
          </div>
        </div>
      </div>
      <VisiMisi />
      <Contact_Us />
    </>
  );
};
export default About;
