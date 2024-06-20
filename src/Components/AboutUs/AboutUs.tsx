import React from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className=" flex flex-col  items-center justify-center content-center w-full">
      <div>
        <div id="about_us" className="text-lg   text-[#34c87c]">
          //{" "}
          <div id="AboutUs" className="text-[#1c1d22] contents">
            02 . {t("about_us")}
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col xs:flex-col gap-8 w-full lg:items-start xl:w-[1225px] lg:w-full md:items-center ">
        <img
          src={process.env.PUBLIC_URL + "aboutus.png"}
          id="Element1"
          className="mt-2 sm:w-[500px] w-full"
        />
        <div className="self-end flex flex-col mb-[-26px] gap-4 lg:w-1/2 md:w-full lg:h-[724px]  md:h-[724px]  sm:h-auto xs:h-auto items-start">
          <div className="text-4xl   font-medium text-[#0d1c22] mb-12 w-full">
            {t("when_passion_meets_creativity_the_hela_team_takes_shape")}
          </div>
          <div
            id="Line"
            className="border-solid border-[#cfcfcf] self-stretch mb-4   shrink-0 border-t border-b-0 border-x-0"
          />
          <div className="text-lg   text-[#555555] mb-12 w-full">
            {t("hela_is_a_company")}
          </div>
          <div className="self-stretch flex flex-row items-start mb-12 ms-1 md:ms-20">
            <img
              src="https://file.rendit.io/n/3HlZA6WdmC7zfN5DjCxg.svg"
              id="Icon"
              className="mt-2 w-20 shrink-0"
            />
            <div className="flex flex-col gap-5 w-auto items-start">
              <div className="self-stretch flex flex-col gap-4 h-12 shrink-0 items-start">
                <div className="md:text-3xl text-2xl  font-medium text-[#1c1d22] ms-2">
                  {t("guaranteed_results")}
                </div>
                <div
                  id="Line1"
                  className="border-solid border-[#cfcfcf] self-stretch h-px shrink-0 border-t border-b-0 border-x-0"
                />
              </div>
              <div className="text-lg   text-[#555555] ms-4 w-5/6">
                {t("all_of_our_bussiness")}
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row ms-1 md:ms-20 items-start">
            <img
              src="https://file.rendit.io/n/FAMQGMdZWTWPWke9Uyve.svg"
              id="Icon1"
              className="mt-2 w-20 shrink-0"
            />
            <div className="flex flex-col gap-5 w-auto items-end">
              <div className="self-stretch flex flex-col gap-4 h-12 shrink-0 items-start">
                <div className="md:text-3xl text-2xl font-medium text-[#1c1d22] ms-2">
                  {t("team_of_industry_experts")}
                </div>
                <div
                  id="Line2"
                  className="border-solid border-[#cfcfcf] self-stretch h-px shrink-0 border-t border-b-0 border-x-0"
                />
              </div>
              <div className="text-lg   text-[#555555] w-full">
                {t("a_diverse_team")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
