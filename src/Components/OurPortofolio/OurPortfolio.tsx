import React, { useEffect, useRef } from "react";
import OurPortfolioCard from "./OurPortofolioCard/OurPortofolioCard";
import { useDraggable } from "react-use-draggable-scroll";
import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";
import { DirectionResolver } from "../../utils/hooks";

const OurPortfolio = () => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  const { t } = useTranslation();
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (ref.current) {
        const container = ref.current;
        const scrollableWidth = container.scrollWidth - container.clientWidth;
        const scrollPosition = container.scrollLeft;

        if (-scrollPosition + 50 > scrollableWidth) {
          container.scrollTo({ left: scrollableWidth, behavior: "smooth" });
        } else {
          container.scrollBy({
            left: -ref?.current?.offsetWidth,
            behavior: "smooth",
          });
        }
      }
    }, 5000); // Scroll every two seconds

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  const handleScrollRight = () => {
    if (ref.current)
      ref.current.scrollTo({
        left: ref.current.scrollLeft + ref?.current.offsetWidth + 30,
        behavior: "smooth",
      });
  };

  const handleScrollLeft = () => {
    if (ref.current)
      ref.current.scrollTo({
        left: ref.current.scrollLeft - ref?.current.offsetWidth + 150,
        behavior: "smooth",
      });
  };

  return (
    <div className=" w-full flex justify-center  ">
      <div className="flex flex-col gap-4 w-full items-start xl:w-[1225px] lg:w-full">
        <div className="flex flex-row sm:flex-col w-full lg:flex-row justify-between mr-px items-start">
          <div className="flex flex-col justify-center gap-2 lg:flex-row lg:justify-between w-full mb-1 lg:gap-4 items-start">
            <div>
              <div id="OurPortfolio1" className="text-lg    text-[#34c87c]">
                //{" "}
                <div id="OurPortfolio" className="text-[#1c1d22] contents">
                  08 . {t("our_portfolio")}
                </div>
              </div>
              <div className="text-4xl tracking-wide spac font-medium text-[#1c1d22] sm:w-full lg:w-[400px]">
                {/* An overview of the projects executed by the Hela team. */}
                {t("an_overview_of_the_projects")}
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
        </div>
        <div
          dir="rtl"
          className="flex lg:flex-row team-slider   w-full flex-shrink-0 gap-8 items-start overflow-x-auto"
          {...events}
          ref={ref}
        >
          <OurPortfolioCard
            link="https://almoayedsolutions.com"
            title="moayad_website"
            subtitle="moayad_desc"
            image="/images/port/moayad.jpg"
            number={1}
          />
          <OurPortfolioCard
            link="https://jubrantekstil.com"
            title="gebran_website"
            subtitle="gebran_desc"
            image="/images/port/jubrantekstil.jpg"
            number={2}
          />
          <OurPortfolioCard
            link="https://avrasyabazaar.com"
            title="avrasia_website"
            subtitle="avrasia_desc"
            image="/images/port/avrasya.jpg"
            number={3}
          />
          <OurPortfolioCard
            link="https://baracart.com"
            title="bara_website"
            subtitle="bara_desc"
            image="/images/port/baracart.jpg"
            number={4}
          />
        </div>
      </div>
    </div>
  );
};

export default OurPortfolio;
