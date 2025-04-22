import { asset_about } from "../../assets/images";
import Contact_Us from "../competition/contact-us";
import VisiMisi from "./visi-misi";

const About = () => {
  return (
    <>
      <div className="w-full min-h-screen relative">
        <picture>
          <source media="(max-width: 600px)" srcSet={asset_about.img_bg_hero_phone} />
          <source media="(max-width: 1000px)" srcSet={asset_about.img_bg_hero_tablet} />
          <source media="(min-width: 1001px)" srcSet={asset_about.img_bg_hero} />
          <img
            src={asset_about.img_bg_hero}
            className="absolute w-full h-full object-cover object-bottom"
            alt="About background"
          />
        </picture>
        <div className="relative z-1 flex flex-col items-center w-full h-full gap-10 sm:gap-16 pt-52 sm:pt-64 pb-64 px-4 md:px-12 lg:px-24">
          <img
            src={asset_about.img_title}
            className="w-full max-w-[335px] sm:max-w-[558px] xl:max-w-[837px] h-auto"
          />
          <div className="font-medium font-jakarta-sans text-base sm:text-2xl w-full max-w-[1272px] space-y-6 text-center">
            <p>
              Cakrawala Festival hadir sebagai ajang bagi siswa dan mahasiswa untuk mengasah
              kreativitas, membangun kepercayaan diri, serta memperluas relasi melalui berbagai
              kompetisi akademik dan non-akademik dengan nuansa yang menyenangkan.
            </p>
            <p>
              Mengusung tema "Young Creators, Future Innovators", Cakrawala Festival
              merepresentasikan perjalanan kreatif dan inovatif para peserta. Mereka tidak hanya
              akan diuji melalui kompetisi, tetapi juga mendapatkan kesempatan untuk mengembangkan
              keterampilan yang akan membentuk mereka menjadi inovator masa depan.
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
