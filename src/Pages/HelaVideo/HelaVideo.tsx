import { useTranslation } from "react-i18next";
import WhatsappIcon from "../../Components/WhatsappIcon/WhatsappIcon";
const HelaVideo = () => {
  const { t } = useTranslation();
  return (
    <>
      <WhatsappIcon />
      <div
        id="video"
        className="flex flex-col gap-[20px] items-center w-full px-2 mt-12  "
      >
        <div className=" mt-4   xl:w-[1225px] lg:w-full    ">
          <div className="text-lg  text-[#34c87c]">
            //{" "}
            <div className="text-[#1c1d22] contents">
              03 . {t("introduction_video")}
            </div>
          </div>
        </div>
        <div className="  xl:w-[1225px] lg:w-full flex flex-col   items-center px-3  ">
          <div id="ContentRoot" className="    xl:w-[1225px] lg:w-full    ">
            <div className="text-4xl  font-medium text-[#0d1c22] mb-20 w-full md:w-1/2 ">
              {t("watch_video_about_company")}
            </div>
          </div>

          <div className="flex justify-center w-full mt-0 items-center mb-12">
            <div className="w-full">
              <iframe
                src="https://streamable.com/e/p6ojog?loop=0"
                allowFullScreen
                style={{ width: "100%" }}
                className="rounded-md h-[450px] -mt-[100px] -mb-[160px] md:mb-0 md:mt-0 lg:h-[746px] md:h-[450px] sm:h-max"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelaVideo;
