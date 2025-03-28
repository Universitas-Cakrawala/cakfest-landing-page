import { asset_partners } from "../../../assets/images";

const Slick_List_Partnership = () => {
  return (
    <div>
      {asset_partners.map((item, index) => {
        return (
          <div key={index} className="flex justify-center">
            <img src={item?.img_bg_list} />
          </div>
        );
      })}
    </div>
  );
};
export default Slick_List_Partnership;
