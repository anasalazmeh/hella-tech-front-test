import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/axios";
import { DataConsultants } from "../../typeData";
const SectionSpecialist = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const [data, setdata] = useState<DataConsultants>();

  useEffect(() => {
    const GetData = async () => {
      const res = await http.get(`/consultant/${slug}`);
      setdata(res.data.data);
    };
    GetData();
  }, []);
  return (
    <div className="">
      <div className="flex mt-3">
        <img src={data?.image} alt="" className="w-[40%] h-auto " />
        <div className="w-[60%] h-auto bg-[#F4F4F4] p-2 md:p-5">
          <div
            className={` flex flex-col justify-between p-1 md:p-2  ${
              i18n.language === "ar"
              ? "border-r-[0.87px] md:border-r-[6.67px]"
              : "border-l-[0.87px] md:border-l-[6.67px]"
            } border-solid border-[#0D1C22]`}
          >
            <h2 className="text-[12px] md:text-[50px] font-700 text-[#34C87C] m-0 p-0">
              {t("about")} {data?.translations.name[i18n.language]}
            </h2>
            <p className="text-[8px] md:text-[36px] font-[400] mb-1 ">
              {data?.translations.specialization[i18n.language]}
            </p>
          </div>
          <p className="leading-[12.7px] sm:text-[14px] sm:leading-[19.04px] text-[9px] md:leading-[47.04px] my-1 md:my-5 md:mt-9  md:text-[32px] font-[400] h-[80%] md:h-auto flex justify-center items-center ">
            {data?.translations.description[i18n.language]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionSpecialist;
