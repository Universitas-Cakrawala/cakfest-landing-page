import { useLocation } from "react-router";
import {
  asset_detail_competition,
  asset_list_competition,
} from "../../assets/images";
import {
  Button_Contact_Us_Detail_Competition,
  Button_Guidebook_detail_competition,
} from "../competition/button-svg";
import Time_Line from "./time-line";

const Hero_Detail_Competitions = () => {
  const location = useLocation();
  const path = location.state?.path;
  return (
    <>
      {asset_list_competition.find((item) => item.pathName === path) ? (
        asset_list_competition.map((item) =>
          item.pathName === path
            ? asset_detail_competition.map((asset, index) => {
                const img_bg = asset?.img_bg;
                return (
                  <div key={index}>
                    <div className="w-screen h-screen relative">
                      <img src={img_bg} className="w-full h-full" />
                      <div className="flex flex-col items-center w-full absolute top-44 gap-16">
                        <div className="text-center">
                          <h1 className="font-bold text-5xl text-[#FDC833]">
                            {item?.pathName}
                          </h1>
                          <h1 className="font-normal text-5xl">Competition</h1>
                        </div>
                        <div className="text-center font-normal text-2xl px-52 gap-4 flex flex-col">
                          <p>{item?.description1}</p>
                          <p>{item?.description2}</p>
                        </div>
                        <div className="flex gap-8">
                          <Button_Guidebook_detail_competition />
                          <Button_Contact_Us_Detail_Competition />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Time_Line
                        path={item?.pathName}
                        img_time_line={item?.img_time_line}
                      />
                    </div>
                  </div>
                );
              })
            : null
        )
      ) : (
        <p>Data tidak ditemukan atau path tidak valid.</p>
      )}
    </>
  );
};
export default Hero_Detail_Competitions;
