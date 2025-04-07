import { asset_about } from "../../assets/images";
import Contact_Us from "../competition/contact-us";

const About = () => {
  return (
    <>
      <div className="w-screen h-screen relative flex justify-center pt-72">
        {console.log(asset_about.img_bg)}
        <img src={asset_about.img_bg} className="absolute w-screen h-screen" />
        <div className="relative z-2 ">
          <img src={asset_about.img_title} className="w-[840px] h-[237px]" />
          <div className="font-medium text-2xl w-full px-[120px] flex flex-col gap-10 text-center">
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
      <div>
        <Contact_Us />
      </div>
    </>
  );
};
export default About;
