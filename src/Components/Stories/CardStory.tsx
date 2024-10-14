import img from "./image/Rectangle 9562 (1).png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { GoChevronLeft ,GoChevronRight } from "react-icons/go";
const CardStory = () => {
  return (
    <div className="flex flex-col  md:flex-row justify-center items-center md:w-[916px] md:h-[453px] p-6 md:p-0  ">
      <img
        src={img}
        alt=""
        className="rounded-md w-full   md:w-[369px] h-[453px]"
      />
      {/* <div className="flex flex-col gap-9 px-4 md:px-9 py-3 md:py-7"> */}
      <div className="px-4 md:px-8 py-3 md:py-7 h-full">
        <div className="flex flex-col  gap-5 md:gap-0 w-full h-full">
          <h1 className="uppercase text-2xl md:text-3xl text-main underline flex-[2]">
            impacts of technological developments on mrketing avtivities
          </h1>
          <p className="text-2xl flex-[2] content-center">
            Technological developments, are now more than just innovations,
            profoundly influence production processes and consumers' daily
            lives, changing their habits and behaviours................
          </p>
          <div className="flex-1 content-end ">
            <button className="flex border group  px-[30px] gap-2 py-[10px] items-center justify-center w-[180px] rounded-md border-black hover:bg-main hover:text-white hover:border-main transition-all">
              Read More <GoChevronRight className="ms-1 h-4 w-4 bg-black text-white text-3xl rounded-full group-hover:bg-main transition-all" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStory;
