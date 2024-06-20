import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const ImageCover = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full">
      <img
        className="w-full h-[300px] object-left object-cover md:object-cover lg:object-fill "
        src="/images/contact-us/cover.png"
        alt="cover"
      />
      <img
        className="w-full h-[300px] absolute top-0"
        src="/images/contact-us/cover-color.png"
        alt="cover"
      />

      <div className="absolute w-full top-0 px-[10px] md:px-[30px] lg:px-[190px] pt-[60px] pb-[126px] text-white">
        <Typography
          variant="h6"
          gutterBottom
          fontSize="18px"
          fontWeight={"normal"}
        >
          // {t("contact_us")}
        </Typography>

        <div
          // variant="h3"
          className="text-[24px] md:text-[30px] font-medium lg:text-[30px] xl:text-[40px] w-full"
        >
          {t("lets_build_something_awesome_together")}
        </div>
      </div>
    </div>
  );
};

export default ImageCover;
