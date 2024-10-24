import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import img from "../../image/Rectangle 9562 (1).png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const CardStory = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="flex flex-col  md:flex-row justify-center items-center w-full md:w-[916px] md:h-[453px] px-6 md:p-0  ">
      <img
        src={img}
        alt=""
        className="rounded-md w-full md:w-[369px] h-[453px]"
      />
      {/* <div className="flex flex-col gap-9 px-4 md:px-9 py-3 md:py-7"> */}
      <div className="px-4 md:px-8 py-3 md:py-7 h-full">
        <div className="flex flex-col  gap-5 md:gap-0 w-full h-full">
          <Link to={"details/1"}>
            <h1 className="uppercase text-2xl md:text-3xl text-main underline flex-[2]">
              impacts of technological developments on mrketing avtivities
            </h1>
          </Link>
          <p className="text-2xl flex-[2] content-center">
            Technological developments, are now more than just innovations,
            profoundly influence production processes and consumers' daily
            lives, changing their habits and behaviours................
          </p>
          <div className="flex-1 content-end ">
            <Link to={"details/1"}>
              <button className="flex border group  px-[30px] gap-2 py-[10px] items-center justify-center w-[180px] rounded-md border-black hover:bg-main hover:text-white hover:border-main transition-all">
                {t("read_more")}
                {i18n.language === "en" ? (
                  <GoChevronRight className=" h-4 w-4 mt-1 bg-black text-white text-3xl rounded-full group-hover:bg-main transition-all" />
                ) : (
                  <GoChevronLeft className=" h-4 w-4 mt-1 bg-black text-white text-3xl rounded-full group-hover:bg-main transition-all" />
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStory;
