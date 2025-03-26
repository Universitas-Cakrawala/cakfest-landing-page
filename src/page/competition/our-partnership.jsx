import { asset_partners } from "../../assets/images";

const Our_Partnership = () => {
  return (
    <div>
      {asset_partners.map((item, index) => {
        return (
          <div key={index} className="col-md-4">
            <div className="card">
              <img
                src={item.img_bg}
                className="w-screen h-screen object-cover"
                alt="..."
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Our_Partnership;
