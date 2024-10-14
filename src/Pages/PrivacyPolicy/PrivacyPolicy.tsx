import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import WhatsappIcon from "../../Components/WhatsappIcon/WhatsappIcon";
import { useTranslation } from "react-i18next";
import { DataPolicese } from "../../typeData";
import http from "../../api/axios";
import logo from "./image/HelaLogo.png";
const PrivacyPolicy = () => {
  const [data, setData] = useState<DataPolicese>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fatchData = async () => {
      setLoading(true)
      const res = await http("/pages/privacy-policy");
      setData(res.data.data);
      setLoading(false)
    };
    fatchData();
  }, []);
  const { t, i18n } = useTranslation();
  var   Html=""
  if(data){
     Html =`<div> ${data.description[i18n.language]} </div>`
  }
          
  return (
    <>
      <NavBar sectionRefs={null} isVideo />
      <div className="bg-main relative text-white text-3xl md:text-5xl flex justify-center items-center h-40">
        <div>{t("privacy_policy")}</div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-[1225px] lg:w-full py-5 px-2">
          {/* {data?.description.en} */}
          {loading ? (
            <div role="status" className="animate-pulse">
              <h3 className="h-3 bg-gray-300 rounded-full  w-48 mb-4"></h3>
              <p className="h-2 bg-gray-300 rounded-full max-w-full mb-2.5"></p>
              <p className="h-2 bg-gray-300 rounded-full max-w-[880px] mb-2.5"></p>
              <p className="h-2 bg-gray-300 rounded-full max-w-[540px] mb-2.5"></p>
              <h3 className="h-3 bg-gray-300 rounded-full  w-48 mb-4"></h3>
              <p className="h-2 bg-gray-300 rounded-full max-w-full mb-2.5"></p>
              <p className="h-2 bg-gray-300 rounded-full max-w-[880px] mb-2.5"></p>
              <p className="h-2 bg-gray-300 rounded-full max-w-[540px] mb-2.5"></p>
              <h3 className="h-3 bg-gray-300 rounded-full  w-48 mb-4"></h3>
              <p className="h-2 bg-gray-300 rounded-full max-w-full mb-2.5"></p>
              <p className="h-2 bg-gray-300 rounded-full max-w-[880px] mb-2.5"></p>
              <p className="h-2 bg-gray-300 rounded-full max-w-[540px] mb-2.5"></p>
              <h3 className="h-3 bg-gray-300 rounded-full  w-48 mb-4"></h3>
              <p className="h-2 bg-gray-300 rounded-full max-w-full mb-2.5"></p>
              <p className="h-2 bg-gray-300 rounded-full max-w-[880px] mb-2.5"></p>
              <p className="h-2 bg-gray-300 rounded-full max-w-[540px] mb-2.5"></p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: Html }} className="py-5" />
          )}

        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
