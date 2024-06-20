/* eslint-disable eqeqeq */
import React from "react";
import ConsuluteCard from "./Components/ConsultCard";
import ConsultCard from "./Components/ConsultCard";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { DirectionResolver } from "../../utils/hooks";

const Consulting = () => {
  const { t } = useTranslation();
  const naviage = useNavigate();
  return (
    <div
      id="consulting"
      className="w-full flex items-center content-center justify-center "
    >
      <div className="flex flex-col gap-20 xl:w-[1225px] lg:w-full  ">
        <div className="flex flex-row justify-between -ms-px items-start">
          <div className="flex flex-col gap-3 lg:w-3/5 md:w-full items-start">
            <div id="Consulting1" className="text-lg   text-[#34c87c]">
              //{" "}
              <div id="Consulting" className="text-[#1c1d22] contents">
                05 . {t("consulting")}
              </div>
            </div>
            <div className="text-4xl   font-medium text-[#0d1c22] w-full">
              {t("we_offer_you")}{" "}
              <div className="text-[#34c87c] contents">30 {t("minutes")}</div>
              <div className="contents">
                {" "}
                {t("of_free_consultation_for_your_business")}
              </div>
            </div>
          </div>
          <button
            id="Button1"
            onClick={() => naviage("contact-us")}
            className="bg-[#f4f4f4] lg:flex md:hidden xs:hidden flex-row justify-center  gap-6 h-16 items-center px-6 py-4 rounded-lg"
          >
            <div className="text-lg  font-medium leading-[28.8px] capitalize text-[#1c1d22]">
              {t("contact_us")}
            </div>
            <img
              src="https://file.rendit.io/n/4NYF6VETfINg6H1VPDFl.svg"
              className={`w-3 shrink-0 ${
                DirectionResolver() == "rtl" ? "rotate-180" : ""
              } `}
              alt=""
            />
          </button>
        </div>
        <div
          className="flex lg:flex-row md:flex-col xs:flex-col  items-center  lg:gap-[30px] md:gap-[60px]  sm:gap-[60px] xs:
        gap-[60px]  mx-1"
        >
          <ConsultCard
            title="make_appointment"
            // image={process.env.PUBLIC_URL+''}
            text="contact_us_through_the_information"
          />{" "}
          <ConsultCard
            title="consultation"
            // image={process.env.PUBLIC_URL+''}
            text="we_will_provide_you_with"
          />{" "}
          <ConsultCard
            title="enjoy_the_service"
            // image={process.env.PUBLIC_URL+''}
            text="after_determining_the_optimal_approach"
          />
        </div>
      </div>
    </div>
  );
};

export default Consulting;
