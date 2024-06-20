import React from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  title: string;
  text: string;
  image?: string;
}
const ConsultCard = ({ image, text, title }: IProps) => {
  const { t } = useTranslation();
  return (
    <div className="relative grow flex flex-col md:w-full xs:w-full lg:w-[368px]  shrink-0 items-center justify-center ">
      <div
        id="Process"
        className="w-full h-[306px] bg-[#f4f4f4]   top-8 left-0 flex flex-col justify-center gap-4 items-center rounded-lg"
      >
        <div className="text-center text-3xl   font-medium text-[#1c1d22]">
          {t(title)}
        </div>
        <div className="text-center text-lg   text-[#555555] w-4/5">
          {t(text)}
        </div>
      </div>
      <img
        src={
          image ? image : "https://file.rendit.io/n/J72JeLK6E44aNak1A5Tw.svg"
        }
        id="Icon"
        className="absolute -top-7 w-16"
      />
    </div>
  );
};

export default ConsultCard;
