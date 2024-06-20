import React from "react";
import { useTranslation } from "react-i18next";
import { DirectionResolver } from "../../../utils/hooks";

const LangMenu = ({ setMenuOn }: { setMenuOn: (val: boolean) => void }) => {
  const { i18n, t } = useTranslation();

  return (
    <div
      className={`flex flex-col w-full absolute px-5 ${
        DirectionResolver() == "rtl" ? "left-[310%]" : "right-[143%]"
      }`}
    >
      <div className="w-[344px] h-[263px] bg-[url(https://file.rendit.io/n/DXI3TfxSHPVyP3IJrjl3.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col gap-5  shrink-0 items-start justify-center mt-[-12px] mb-[-18px] mx-[-15px] pt-12 pb-10 ps-16">
        <div
          onClick={() => {
            i18n.changeLanguage("en");
            setMenuOn(false);
          }}
          className="flex flex-row mb-0 text-[#555555] hover:text-[#34c87c] gap-5 w-24 items-center"
        >
          <img
            src="https://file.rendit.io/n/RZQb2kCGybQ8mWoftt8i.svg"
            className="mt-px w-8 shrink-0"
          />
          <div
            className={` font-medium ${
              i18n.language === "en" ? "text-[#34c87c]" : " text-inherit"
            }`}
          >
            {t("english")}
          </div>
        </div>
        <div
          onClick={() => {
            i18n.changeLanguage("ar");
            setMenuOn(false);
          }}
          className="flex flex-row mb-0 text-[#555555] hover:text-[#34c87c] gap-5 w-24 items-center"
        >
          <img
            src="https://file.rendit.io/n/X8VAHKdBM5Yp062XYen1.svg"
            className="mt-px w-8 shrink-0"
          />
          <div
            className={` font-medium ${
              i18n.language == "ar" ? "text-[#34c87c]" : "text-inherit"
            }`}
          >
            {t("arabic")}
          </div>
        </div>
        {/* <div className="flex flex-row gap-5 w-24 items-center">
          <img
            src="https://file.rendit.io/n/HoxtFwvC8ckVQmDMwSnS.svg"
            className="mt-px w-8 shrink-0"
          />
          <div className="  text-[#555555]">Turkish</div>
        </div> */}
      </div>
    </div>
  );
};

export default LangMenu;
