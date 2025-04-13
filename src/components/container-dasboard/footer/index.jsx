import { asset_footer } from "../../../assets/images";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-32 py-8 bg-[#210A28] w-full h-full">
      <span>Copyright 2025 by Student Government Association</span>
      <div className="flex gap-5">
        <a
          href="https://www.tiktok.com/@cakrawalafest?_t=ZS-8vDixzaXCUx&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="tiktok" src={asset_footer.img_tiktok} />
        </a>
        <a
          href="https://www.instagram.com/cakrawalafest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="instagram" src={asset_footer.img_instagram} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=6289526956197"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="whatsapp" src={asset_footer.img_whatsapp} />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
