import { useTranslation } from "react-i18next";
import "./SectionSpecialist.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/axios";
interface DataType {
  translations: {
    name: {
      en: string;
      ar: string;
    },
    specialization: {
      en: string;
      ar: string;
    },
    description:{
      en:string,
      ar:string
    }
  };
  image: string;

}
const SectionSpecialist = () => {
  const { t, i18n } = useTranslation();
  const { consultant_id } = useParams();
  const [data, setdata] = useState<DataType>();
  useEffect(() => {
    const GetData = async () => {
      await http
        .get(
          `/consultants/${consultant_id}`
        )
        .then((data) => setdata(data.data.data));
    };
    GetData()
  
  }, []);
  console.log(data)
  return (
    <div className="">
      <div className="section-consult ">
        <img
          src={data?.image}
          alt=""
        />
        <div className="box-text">
          <div
            className={` flex flex-col justify-between p-1 md:p-2  ${
              i18n.language === "en"
                ? "border-l-[0.87px] md:border-l-[6.67px]"
                : "border-r-[0.87px] md:border-r-[6.67px]"
            } border-solid border-[#0D1C22]`}
          >
            <h2 className="text-[12px] md:text-[50px] font-700 text-[#34C87C] m-0 p-0">
              {t("about")}{" "}
              {i18n.language ==="ar" ?data?.translations.name.ar : data?.translations.name.en}
            </h2>
            <p className="text-[8px] md:text-[36px] font-[400] mb-1 ">
            {i18n.language ==="ar" ?data?.translations.specialization.ar : data?.translations.specialization.en}
            </p>
          </div>
          <p className="leading-[12.7px] md:leading-[47.04px] my-5 mt-9 text-[9px] lg:text-[32px] font-[400] ">
          {i18n.language ==="ar" ?data?.translations.description.ar : data?.translations.description.en}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionSpecialist;
