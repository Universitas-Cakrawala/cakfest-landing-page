import { asset_partners } from "../../assets/images";

const Our_Partnership = () => {
  return (
    <div>
      {asset_partners.map((item, index) => {
        return (
          <div key={index} className="col-md-4">
            <img src={item.img_bg} className="w-full h-full" />
            <div className=" top-2 flex flex-col items-center ">
              <img src={item?.img_stars} className="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Our_Partnership;
