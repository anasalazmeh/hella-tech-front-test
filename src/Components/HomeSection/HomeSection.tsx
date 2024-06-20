/* eslint-disable jsx-a11y/alt-text */
import { Button, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DirectionResolver } from "../../utils/hooks";
import { useNavigate } from "react-router";

const HomeSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div id="home" className="flex flex-col w-full">
      <div
        id="BGColor"
        className=" flex-wrap bg-[linear-gradient(180deg,_rgba(52,_200,_124,_0.05)_0%,rgba(0,_176,_140,_0.05)_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col items-center justify-between pt-[20px] px-[20px]"
      >
        <div className="xl:w-[1225px] lg:w-full  flex flex-row-reverse items-center justify-center  xs:flex-wrap sm:flex-wrap  md:flex-wrap lg:flex-nowrap content-center justify-items-center">
          <img
            src={
              DirectionResolver() == "ltr"
                ? process.env.PUBLIC_URL + "benner.png"
                : process.env.PUBLIC_URL + "benner.png"
            }
            id="Web"
            className=" xs:w-full xs:object-contain sm:w-[378px] sm:object-contain md:object-cover md:w-[556px] lg:w-[750px] sm:h-[30vh] md:h-[40vh] lg:h-[85vh] "
          />

          <div className=" flex flex-col xs:gap-2 lg:gap-10 items-start  max-w-[740px]  flex-wrap">
            <div className="lg:text-[75px] xs:text-[40px] flex-wrap    font-bold tracking-[50] md:leading-[91px] text-[#34c87c]     ">
              {t("hela_tech")}:{" "}
              <div className="text-[#0d1c22] contents">
                {t("crafting_innovation_in_the_digital_Universe")}
              </div>
            </div>
            <div className="text-xl xs:text-[18px] text-[#1c1d22] max-w-[594px] mb-5 ">
              {t("your_optimal_choice")}
            </div>
            <div className=" flex flex-row mb-4 md:mb-0  gap-5 items-center xs:flex-wrap  ">
              <a href="#services">
                <Button
                  variant="contained"
                  id="Button1"
                  className="border-solid border-[#34c87c] bg-[#34c87c] self-start flex flex-col justify-center mr-2 w-48 shrink-0 h-16 items-center border-2 rounded"
                >
                  <div className="text-center text-lg font-['DINNextLTArabic-Regular'] font-medium text-white">
                    {t("our_services")}
                  </div>
                </Button>
              </a>

              <a href="#video">
                <div className="flex hover:cursor-pointer gap-[20px]">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <img
                      src={process.env.PUBLIC_URL + "assets/videoButton.png"}
                      id="Button2"
                      className="w-12 shrink-0"
                    />
                  </IconButton>{" "}
                  <div
                    id="WatchOurIntroducti"
                    className="text-lg font-['DINNextLTArabic-Regular']  text-[#0d1c22]"
                  >
                    {t("watch_our")}
                    <br />
                    {t("instruction_video")}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="IntroLine" className="bg-[#cfcfcf] h-px shrink-0" />
      </div>
    </div>
  );
};

export default HomeSection;
