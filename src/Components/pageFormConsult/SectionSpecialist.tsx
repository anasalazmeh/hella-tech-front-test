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
  }, [slug]);
  return (
    <div className=" px-6 pt-2">
      {/* <div className="flex flex-col w-full items-center bg-[#F4F4F4] border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="w-[400px] rounded-t-lg h-52 md:h-full md:rounded-none md:rounded-s-lg"
          src={data?.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 w-full">
          <div
            className={`flex flex-col justify-between p-1 md:p-2  ${
              i18n.language === "ar"
                ? "border-r-[0.87px] md:border-r-[6.67px]"
                : "border-l-[0.87px] md:border-l-[6.67px]"
            } border-solid border-[#0D1C22]`}
          >
            <h2 className="text-[12px] md:text-[30px] font-700 text-[#34C87C] m-0 p-0">
              {t("about")} {data?.translations.name[i18n.language]}
            </h2>
            <p className="text-[8px] md:text-[25px] mb-1 font-bold">
              {data?.translations.specialization[i18n.language]}
            </p>
          </div>
          <p className="leading-[12.7px] sm:text-[14px] sm:leading-[19.04px] text-[9px] md:leading-[30.04px]  md:text-[20px] font-[400]">
            {data?.translations.description[i18n.language]}
          </p>
        </div>
      </div> */}
      <div className="flex bg-[#F4F4F4] rounded-xl">
        <div className="w-[40%] flex justify-center items-center">
          <img src={data?.image} alt="" className="w-full md:max-h-full rounded-s-xl " />
        </div>
        <div className="w-[60%] px-3 py-2 xl:px-5 xl:py-2 flex justify-center  flex-col">
          <div
            className={`flex flex-col justify-between p-1 md:p-2  ${
              i18n.language === "ar"
                ? "border-r-[0.87px] md:border-r-[6.67px]"
                : "border-l-[0.87px] md:border-l-[6.67px]"
            } border-solid border-[#0D1C22]`}
          >
            <h2 className="text-[12px] md:text-[25px] xl:text-[35px] font-700 text-[#34C87C] m-0 p-0">
              {t("about")} {data?.translations.name[i18n.language]}
            </h2>
            <p className="text-[8px] md:text-[20px] xl:text-[25px] mb-1 font-bold">
              {data?.translations.specialization[i18n.language]}
            </p>
          </div>
          <p className="leading-[11.7px] px-2 text-[10px] md:leading-[20.04px] xl:leading-[30.04px] md:text-[15px] xl:text-[20px] font-[400] mt-1">
            {data?.translations.description[i18n.language]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionSpecialist;
