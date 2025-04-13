import { asset_contact_us } from "../../assets/images";
import {
  Button_About_Competition,
  Button_Contact_Us_Competition,
} from "./button-svg";

const Contact_Us = () => {
  return (
    <div className="w-full h-full relative py-64">
      <img
        src={asset_contact_us.img_bg}
        className="absolute inset-0 size-full object-cover object-top"
      />
      <div className="flex flex-col items-center w-full gap-14 relative">
        <img src={asset_contact_us.img_title} className="w-[619px] h-[175px]" />
        <p className="flex w-[620px] text-center font-medium text-2xl">
          Tunjukkan bakat dan kreativitas kamu di berbagai kompetisi seru. Mari
          bergabung dan nantikan kejutannya!
        </p>
        <div className="flex gap-8">
          <Button_Contact_Us_Competition />
          <Button_About_Competition />
        </div>
      </div>
    </div>
  );
};
export default Contact_Us;
