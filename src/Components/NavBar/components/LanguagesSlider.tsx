import React from "react";
import { useTranslation } from "react-i18next";
interface IProps {
  setDrawer: (val: "left" | "right" | undefined) => void;
}
const LanguagesSlider = ({ setDrawer }: IProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col w-full h-full ">
      <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] bg-[#fbfbfa] flex flex-col gap-8  h-full  shrink-0 items-end py-16 rounded-tl-lg rounded-bl-lg">
        <div className="self-end flex flex-row ml-20 gap-6 items-start">
          <div className="text-xl   font-bold text-[#34c87c] mt-px">
            {t("choose_language")}
          </div>
          <img
            src="https://file.rendit.io/n/e5RUSrpLkozVpiAUOLZy.svg"
            className="w-16 shrink-0 cursor-pointer"
            onClick={() => setDrawer(undefined)}
          />
        </div>
        <img
          src="https://file.rendit.io/n/2mNXGLb9nB0ThF3qdUnX.svg"
          className="self-center "
        />
        <div
          className="flex flex-row gap-4 hover:cursor-pointer items-start mb-4 mr-8"
          onClick={() => {
            i18n.changeLanguage("en");
            setDrawer(undefined);
          }}
        >
          <div
            className={`text-right text-lg  hover:text-[#34c87c] hover:cursor-pointer font-['DINNextLTArabic-Regular']   ${
              i18n.language === "en"
                ? "font-bold text-[#34c87c]"
                : " text-[#555555]"
            }`}
          >
            {t("english")}
          </div>
          <img
            src="https://file.rendit.io/n/iAiLvGOzqJsfLeWmmAc2.svg"
            className="mt-px w-8 shrink-0"
          />
        </div>
        <div
          className="flex flex-row gap-4 w-24 hover:cursor-pointer items-start mb-4 mr-8"
          onClick={() => {
            i18n.changeLanguage("ar");
            setDrawer(undefined);
          }}
        >
          <div
            className={`text-right text-lg hover:text-[#34c87c] hover:cursor-pointer  font-['DINNextLTArabic-Regular'] ${
              i18n.language === "ar"
                ? "font-bold text-[#34c87c]"
                : " text-[#555555]"
            }`}
          >
            {t("arabic")}
          </div>
          <img
            src="https://file.rendit.io/n/LcQY5pxnyf3B0AkxCIW9.svg"
            className="mt-px w-8 shrink-0"
          />
        </div>
        {/* <div className="flex hover:cursor-pointer flex-row mr-8 gap-4 items-start">
          <div
            className={`text-right text-lg   hover:text-[#34c87c] hover:cursor-pointer  font-['DINNextLTArabic-Regular'] ${
              i18n.language === "tr"
                ? "font-bold text-[#34c87c]"
                : " text-[#555555]"
            }`}
          >
            {t("turkish")}
          </div>
          <img
            src="https://file.rendit.io/n/s3NlPH9TK47vyLQcZqzT.svg"
            className="mt-px w-8 shrink-0"
          />
        </div> */}
      </div>
    </div>
  );
};

export default LanguagesSlider;
