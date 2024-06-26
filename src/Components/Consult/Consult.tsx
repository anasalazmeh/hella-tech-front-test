import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DirectionResolver } from "../../utils/hooks";
import BoxSlider from "./Components/BoxSlider";
import "./Consult.css";
import { DataConsultants } from "../../typeData";

const Consult = ({data}:{data:DataConsultants[]}) => {
  const { t, i18n } = useTranslation();


  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentSlideMobile, setCurrentSlideMobile] = useState<number>(0);
  const [number, setnumber] = useState<number>(1);
  const moveSlides = (n: number) => {
    let newSlide = currentSlide + n;
    if (newSlide >= data.length - 2) {
      newSlide = 0;
    } else if (newSlide < 0) {
      if (newSlide === 0 && data?.length === 3) {
        newSlide = 0;
      } else {
        newSlide = data.length - 3;
      }
    }
    setCurrentSlide(newSlide);
  };
  const moveSlidesMobile = (n: number) => {
    let newSlide = currentSlideMobile + n;
    if (newSlide >= data.length) {
      newSlide = 0;
    } else if (newSlide < 0) {
      if (newSlide === 0) {
        newSlide = 0;
      } else {
        console.log(data.length)
        newSlide = data.length -1 ;
      }
    }
    setCurrentSlideMobile(newSlide);
  };
  const handleScrollRight = () => {
    moveSlides(1);
    moveSlidesMobile(1);
  };

  const handleScrollLeft = () => {
    moveSlides(-1);
    moveSlidesMobile(-1);
  };

  useEffect(() => {
    if (number > 0) {
      const interval = setInterval(() => {
        moveSlides(1);
        moveSlidesMobile(1);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [currentSlide, currentSlideMobile]);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full xl:w-[1225px] lg:w-full">
        <div className="flex flex-col justify-center gap-2 lg:flex-row lg:justify-between w-full mb-3 lg:gap-4 items-start">
          <div className="my-5 mx-2" >
            <div id="ConsultNow" className="text-lg text-[#34c87c]">
              //{" "}
              <div id="OurPortfolio" className="text-[#1c1d22] contents">
                08 . {t("consult_now")}
              </div>
            </div>
            <div className="text-4xl tracking-wide spac font-medium text-[#1c1d22] sm:w-full lg:w-[750px]">
              {t("get_your_tech")}
            </div>
          </div>
          <div className=" xs:flex sm:flex flex-row gap-4">
            <IconButton onClick={handleScrollLeft}>
              <img
                src={
                  DirectionResolver() == "ltr"
                    ? "https://file.rendit.io/n/KPXggonPzRO2FkhQGfEl.svg"
                    : "https://file.rendit.io/n/W0OzU87yvdUIP19qf7L3.svg"
                }
                id="Element4"
                className="    shrink-0"
              />
            </IconButton>
            <IconButton onClick={handleScrollRight}>
              <img
                src={
                  DirectionResolver() == "ltr"
                    ? "https://file.rendit.io/n/W0OzU87yvdUIP19qf7L3.svg"
                    : "https://file.rendit.io/n/KPXggonPzRO2FkhQGfEl.svg"
                }
                id="Element3"
                className="  shrink-0"
              
              />
            </IconButton>
          </div>
        </div>

        <div>
          <div className="slider">
            <div
              className="slides"
              style={{
                transform: `translateX(${i18n.language === "ar" ? "+" : "-"}${
                  +(currentSlide * 100) / 3
                }%)`,
              }}
            >
              {data?.map((item) => (
                <div className="slide">
                  <BoxSlider
                    item={item}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slider2">
          <div
            className="slides2"
            style={{
              transform: `translateX(${i18n.language === "ar" ? "+" : "-"}${
                currentSlideMobile * 100
              }%)`,
            }}
          >
            {data?.map((item) => (
              <div className="slide2">
                <BoxSlider
                  item={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
