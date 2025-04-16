import { asset_contact_us } from "../../assets/images";
import {
  Button_About_Competition,
  Button_Contact_Us_Competition,
} from "./button-svg";

const Contact_Us = () => {
  return (
    <div className="w-full h-full relative pt-64 pb-80 sm:pb-64">
      <picture>
        <source
          media="(max-width: 600px)"
          srcSet={asset_contact_us.img_bg_phone}
        />
        <source
          media="(max-width: 1000px)"
          srcSet={asset_contact_us.img_bg_tablet}
        />
        <source media="(min-width: 1001px)" srcSet={asset_contact_us.img_bg} />
        <img
          src={asset_contact_us.img_bg}
          className="absolute inset-0 size-full object-cover object-top"
          alt="Contact us background"
        />
      </picture>
      <div className="flex flex-col items-center w-full gap-4 sm:gap-14 relative px-4 sm:px-0">
        <img
          src={asset_contact_us.img_title}
          className="w-full max-w-[335px] sm:max-w-[619px] h-auto"
        />
        <p className="w-full max-w-[620px] text-center font-medium text-base sm:text-2xl">
          Tunjukkan bakat dan kreativitas kamu di berbagai kompetisi seru. Mari
          bergabung dan nantikan kejutannya!
        </p>
        <div className="hidden sm:flex gap-8 flex-wrap justify-center items-center">
          <Button_Contact_Us_Competition />
          <Button_About_Competition />
        </div>
      </div>
    </div>
  );
};
export default Contact_Us;
