import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import WhatsappIcon from "../../Components/WhatsappIcon/WhatsappIcon";
import { useTranslation } from "react-i18next";
import { DataPolicese } from "../../typeData";
import http from "../../api/axios";
import logo from "./image/HelaLogo.png";
const PrivacyPolicy = () => {
  const [data,setData]=useState<DataPolicese>()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fatchData= async ()=>{
      const res = await http("/pages/privacy-policy");
      setData(res.data.data)
    }
    fatchData()
  },[]);
  const {t, i18n } = useTranslation();
  console.log(data)
  return (
    <>
      
      <NavBar sectionRefs={null} isVideo />
      <div className="bg-main relative text-white text-5xl flex mb-2 justify-center items-center h-40">
        <img src={logo} alt="" className="absolute top-3 left-14 " />
        <div>{t("privacy-policy")}</div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-[1225px] lg:w-full">
          {data?.description[i18n.language]}
        </div>
      </div>
        {/* <iframe
          height={700}
          src={
            process.env.PUBLIC_URL +
            `/pdfs/${
              localStorage.getItem("i18nextLng") === "ar"
                ? "privacy-policy-ar.pdf"
                : "privacy-policy.pdf"
            }`
          }
          className="w-full"
        /> */}
    </>
  );
};

export default PrivacyPolicy;
