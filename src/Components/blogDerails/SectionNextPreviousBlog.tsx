import React from "react";
import { useTranslation } from "react-i18next";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import img1 from "../blogs/image/image 4.png";
import img2 from "../blogs/image/image 3.png";
const SectionNextPreviousBlog = () => {
  const { t,i18n } = useTranslation();
  return (
    <div className="bg-[#0D1C22] mt-3 px-3 flex justify-between items-center w-full h-[80px] md:h-[161.11px] ">
      <div className="flex gap-2 border border-[#0D1C22] hover:border-main cursor-pointer text-white items-center justify-center">
      {i18n.language === "en" ? (
                  <GoChevronLeft className="mt-1 bg-white w-[15px] mx-1 h-[15px] rounded-full text-black" />
                ) : (
                  <GoChevronRight className="mt-1 bg-white w-[15px] mx-1 h-[15px] rounded-full text-black" />
                )}
        <p className="uppercase">{t("previous")}</p>
        <img src={img1} alt="" className="w-[50px] sm:w-[80px] h-[50px] sm:h-[80px] rounded-full" />
        <p className={`uppercase hidden md:block text-[12px] ${i18n.language === "en"?'text-left':"text-right"} w-[180px]`}>
          IMPACTS OF TECHNOLOGICAL DEVELOPMENTS ON MARKETING ACTIVITIES
        </p>
      </div>
      <div className="flex gap-2 border border-[#0D1C22] hover:border-main cursor-pointer text-white items-center justify-center">
        <p className={`uppercase hidden md:block text-[12px] ${i18n.language === "en"?'text-right':"text-left"} w-[180px]`}>
          IMPACTS OF TECHNOLOGICAL DEVELOPMENTS ON MARKETING ACTIVITIES
        </p>
        <img src={img2} alt="" className="w-[50px] sm:w-[80px] h-[50px] sm:h-[80px] rounded-full" />
        <p className="uppercase">{t("next")}</p>
        {i18n.language === "en" ? (
                  <GoChevronRight className="mt-1 bg-white w-[15px] mx-1 h-[15px] rounded-full text-black" />
                ) : (
                  <GoChevronLeft className="mt-1 bg-white w-[15px] mx-1 h-[15px] rounded-full text-black" />
                )}
      </div>
    </div>
  );
};

export default SectionNextPreviousBlog;
