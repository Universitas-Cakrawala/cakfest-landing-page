import { asset_contact_us } from "../../assets/images";

const Contact_Us = () => {
  return (
    <div className="flex w-full h-full">
      {asset_contact_us.map((item, index) => {
        return (
          <div key={index} className="w-full h-full">
            <img src={item?.img_bg} className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
};
export default Contact_Us;
