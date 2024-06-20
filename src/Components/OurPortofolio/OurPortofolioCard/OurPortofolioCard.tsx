import React from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  number: Number;
}
const OurPortfolioCard = ({ title, subtitle, image, number, link }: IProps) => {
  const { i18n, t } = useTranslation();
  return (
    <div
      dir={i18n.language === "en" ? "ltr" : "rtl"}
      className="bg-[#f4f4f4] gap-6 shrink-0 min-h-[320px] max-h-[320px] flex tems-center rounded-lg p-6"
    >
      <div className="flex flex-col gap-16 ">
        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-row gap-2  md:w-full items-start">
            <div className="text-xl font-bold text-[#34c87c]">
              #{number.toString()}
            </div>
            <img
              src="https://file.rendit.io/n/nBaEbRDHIllxc9kbZRDk.svg"
              className="mt-[9px] w-[2px] shrink-0"
            />
            <div className="text-xl w-[240px] font-bold text-[#0d1c22]">
              <a href={link} target="_blank">
                {t(title)}
              </a>
            </div>
          </div>
          <div className="text-xl text-[#555555] w-[280px]">{t(subtitle)}</div>
        </div>
        {/* <div
          id="BTN"
          className="border-solid border-[#0d1c22] flex flex-row justify-center w-[170px] mr-16 pt-3 gap-5 h-16 shrink-0 items-center border rounded-lg"
        >
          <div className="text-center text-lg font-['Nunito'] font-medium leading-[28.8px] capitalize text-[#0d1c22] self-start mt-px">
            Read More
          </div> */}
        {/* <img
            src="https://file.rendit.io/n/B115lY5xGv8Yamsmfh3T.svg"
            className="w-3 shrink-0"
          /> */}
        {/* </div> */}
      </div>
      <div className="self-start relative flex flex-col rounded-lg bg-[#34C87C] items-start ">
        {/* <div className="w-64 h-64 bg-[#34c87c]   top-2 left-2 rounded-lg" /> */}
        <a href={link} target="_blank">
          <img
            src={image}
            className={`relative w-[260px] h-[260px] rounded-lg ${
              i18n.language === "en" ? "bottom-2 right-2" : "bottom-2 left-2"
            }`}
          />
        </a>
      </div>
    </div>
  );
};

export default OurPortfolioCard;
