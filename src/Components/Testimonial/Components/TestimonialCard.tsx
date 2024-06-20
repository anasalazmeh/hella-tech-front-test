/* eslint-disable jsx-a11y/alt-text */
import { Rating } from "@mui/material";
import React from "react";
interface IProps {
  name: string;
  comment: string;
  image?: string;
  rate: number;
  ref?: any;
}
const TestimonialCard = ({ comment, name, rate, image, ref }: IProps) => {
  return (
    <div className="inline-block  min-w-full p-5 " ref={ref}>
      <div
        id="ContentRoot"
        className="flex flex-col gap-2 justify-center w-full  items-center    px-3"
      >
        <div
          dir="ltr"
          className="relative flex flex-col  justify-end mb-2 w-40 items-start pt-24 px-3"
        >
          <img
            src={
              image
                ? image
                : "https://file.rendit.io/n/rvLCoSczrRfh5a7HsUrb.svg"
            }
            id="Image1"
            className="w-[143px] shadow-md rounded-[100px] h-[143px] bg-[url(https://file.rendit.io/n/bUrlMZeMN7ztLQsOvnC5.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-5"
          />
          <img
            src="https://file.rendit.io/n/ZizsiY4LyaFAFS1Tod1J.svg"
            id="Ellipse"
            className="w-12 h-12 absolute top-[90px] left-0"
          />
          <div className="text-6xl  font-bold leading-[66px] text-white relative">
            “
          </div>
        </div>
        <Rating name="read-only" value={rate} readOnly />

        <div className="text-xl   font-bold leading-[22px] text-[#1c1d22]">
          {name}
        </div>
      </div>
      <div className="w-full"></div>
      <div className="text-center text-2xl leading-[37.6px] text-[#555555] ">
        {comment}
      </div>
    </div>
  );
};

export default TestimonialCard;
