import { asset_footer } from "../../../assets/images";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-32 py-8 bg-[#210A28] absolute bottom-0 w-full">
      <span>Copyright 2025 by Student Government Association</span>
      {asset_footer.map((item, index) => {
        return (
          <div className="flex gap-5" key={index}>
            <a
              href="https://www.tiktok.com/@cakrawalafest?_t=ZS-8vDixzaXCUx&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="tiktok" src={item?.img_tiktok} />
            </a>
            <a
              href="https://www.instagram.com/cakrawalafest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="instagram" src={item?.img_instagram} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6289526956197"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="whatsapp" src={item?.img_whatsapp} />
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default Footer;
