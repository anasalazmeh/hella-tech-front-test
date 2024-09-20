import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import WhatsappIcon from "../../Components/WhatsappIcon/WhatsappIcon";
import { useTranslation } from "react-i18next";
import http from "../../api/axios";
import { DataPolicese } from "../../typeData";
import logo from "./image/HelaLogo.png";
const RefundPolicy = () => {
  const [data, setData] = useState<DataPolicese>();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fatchData = async () => {
      const res = await http("/pages/refund-policy");
      setData(res.data.data);
    };
    fatchData();
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <NavBar sectionRefs={null} isVideo />
      <div className="bg-main relative text-white text-5xl flex mb-2 justify-center items-center h-40">
        <img src={logo} alt="" className="absolute top-3 left-14 " />
        <div>{t("refund_policy")}</div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-[1225px] lg:w-full">
        {data?.description.en ? <div dangerouslySetInnerHTML={{__html:data.description.en}} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
