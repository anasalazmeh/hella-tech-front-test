/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  id?: number;
  reverse: boolean;
  title: string;
  text: string;
  imageLink: string[];
}

const Process = ({ id, reverse, imageLink, text, title }: IProps) => {
  const { t } = useTranslation();
  const [isAboveMiddle, setIsAboveMiddle] = useState(false);

  const handleScroll = () => {
    const component = document.getElementById("circle" + id);
    if (component) {
      const rect = component.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const componentTop = rect.top;
      const isAbove = componentTop < viewportHeight / 2;
      setIsAboveMiddle(isAbove);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* vertical line */}

      {/* circle */}
      {/* main row */}
      <div
        className={`flex xs:gap-[20px] xs:flex-col-reverse  ${
          reverse
            ? " lg:flex-row-reverse lg:gap-[94px] "
            : " lg:flex-row lg:gap-[60px] "
        } items-center justify-center content-center`}
      >
        <div className="flex flex-col w-[332px]">
          <div
            className={`text-3xl font-bold ${
              isAboveMiddle ? "text-[#34c87c]" : "text-[#555555]"
            }`}
          >
            {t(title)}

            <br />
          </div>
          <div className="text-lg text-[#555555] max-w-[310px]">{t(text)}</div>
        </div>
        {/* sub row circle and image */}
        <div
          className={` flex  xs:gap-[40px] items-center content-center justify-center xs:flex-col ${
            reverse
              ? "lg:flex-row-reverse lg:gap-[60px]"
              : "lg:flex-row lg:gap-[94px]"
          }`}
        >
          <div
            id={`circle${id}`}
            className={` w-20 h-20 bg-cover bg-50%_50% border-solid border-[8px]  rounded-[100px] bg-blend-normal bg-no-repeat flex justify-center content-center relative items-center z-20
            ${isAboveMiddle ? " border-[#34c87c] " : " border-[#555555] "}
            `}
            style={{
              backgroundColor: "white",
            }}
          >
            <div className="bg-white">
              {id !== 1 && (
                <hr
                  className={`xs:hidden lg:block absolute left-[48.8%] bottom-[125px]  -rotate-90 transform -translate-x-1/2 z-10 ${
                    isAboveMiddle ? "border-[#34c87c]" : "border-[#555555]"
                  } border-dashed border-[2px]  w-[103px]
                  
                  bg-[#E9F9F2] z-20
                  `}
                />
              )}
              <div
                className={`text-center text-3xl font-medium z-30 ${
                  isAboveMiddle ? "text-[#34c87c]" : "text-[#555555]"
                }`}
              >
                {id}
              </div>
              {id !== 5 && (
                <hr
                  className={` xs:hidden  lg:block absolute left-[48.8%] top-[119px]  -rotate-90 transform -translate-x-1/2 z-10  ${
                    isAboveMiddle ? "border-[#34c87c]" : "border-[#555555]"
                  } border-dashed w-[90px] divide-dashed border-[2px] z-10 `}
                />
              )}
            </div>
          </div>
          <div className="w-[332px] flex items-center content-center justify-center ">
            <img src={`${isAboveMiddle ? imageLink[0] : imageLink[1]}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
