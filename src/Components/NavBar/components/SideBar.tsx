/* eslint-disable jsx-a11y/alt-text */
import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
interface IProps {
  setDrawer: (val: "left" | "right" | undefined) => void;
  activeSection: any;
  sectionRefs: any;
  isContactUs?: boolean;
  isVideo?: boolean;
  isConsultNow?:boolean;
}
const SideBar = ({
  setDrawer,
  activeSection,
  sectionRefs,
  isVideo,
  isContactUs,
  isConsultNow
}: IProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div id="NewRootRoot" className="flex h-full flex-col w-full">
      <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] bg-[#fbfbfa] flex flex-col gap-5  h-full overflow-scroll shrink-0 items-start py-16 rounded-tr-lg rounded-br-lg">
        <div className="self-stretch flex flex-row gap-12 items-center mb-3 mr-[115px]">
          <img
            src="https://file.rendit.io/n/655R8LISmQDBrT7or7g4.svg"
            className="self-start w-16 shrink-0"
            onClick={() => setDrawer(undefined)}
          />
          <div className="text-xl   font-bold text-[#34c87c]">
            {t("side_menu")}
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/n5X0MHzgf2eePsY2CMog.svg"
          className="self-center"
        />
        {/* <div className="text-xl  font-['DINNextLTArabic-Regular']  font-bold text-[#34c87c] mb-2 ml-8">
          {t("home")}
        </div> */}
        <a
          href="#home"
          onClick={() => {
            if (isVideo || isContactUs || isConsultNow) navigate("/");
            setDrawer(undefined);
          }}
        >
          <div
            className={`text-xl font-['DINNextLTArabic-Regular'] font-normal leading-normal mb-2 ml-8 ${
              activeSection === 0 && sectionRefs
                ? " text-[#34C87C]  font-weight-800  text-[18px] "
                : "text-xl font-nomral leading-normal"
            } `}
            color="inherit"
          >
            {t("home")}
          </div>
        </a>

        <a
          href="#services"
          className="font-normal"
          onClick={() => {
            if (isVideo || isContactUs || isConsultNow) navigate("/");
            setDrawer(undefined);
          }}
        >
          <div
            className={`text-xl font-['DINNextLTArabic-Regular'] font-normal leading-normal mb-2 ml-8 ${
              activeSection === 1 && sectionRefs
                ? " text-[#34C87C]  font-weight-800  text-[18px] "
                : "text-xl font-nomral leading-normal"
            } `}
            color="inherit"
          >
            {t("services")}
          </div>
        </a>
        <a
          href="#about_us"
          className="font-normal"
          onClick={() => {
            if (isVideo || isContactUs || isConsultNow) navigate("/");
            setDrawer(undefined);
          }}
        >
          <div
            className={`text-xl font-['DINNextLTArabic-Regular'] font-normal leading-normal mb-2 ml-8 ${
              activeSection === 2 && sectionRefs
                ? " text-[#34C87C]  font-weight-800  text-[18px] "
                : "text-xl font-normal leading-normal"
            } `}
            color="inherit"
          >
            {t("about_us")}
          </div>
        </a>
        <a
          href="#process"
          className="font-normal"
          onClick={() => {
            if (isVideo || isContactUs || isConsultNow) navigate("/");
            setDrawer(undefined);
          }}
        >
          <div
            className={`text-xl font-['DINNextLTArabic-Regular'] font-normal leading-normal mb-2 ml-8 ${
              activeSection === 3 && sectionRefs
                ? " text-[#34C87C]  font-weight-800 text-[18px] "
                : "text-xl font-normal leading-normal"
            } `}
            color="inherit"
          >
            {t("process")}
          </div>
        </a>
        {/* <div className="text-xl   font-['DINNextLTArabic-Regular'] text-[#555555] mb-2 ml-8">
          {t("consulting")}
        </div> */}
        <a
          href="#our_team"
          className="font-normal"
          onClick={() => {
            if (isVideo || isContactUs || isConsultNow) navigate("/");
            setDrawer(undefined);
          }}
        >
          <div
            className={`text-xl font-['DINNextLTArabic-Regular'] font-normal leading-normal mb-2 ml-8 ${
              activeSection === 4 && sectionRefs
                ? " text-[#34C87C]  font-weight-800 text-[18px] "
                : "text-xl font-normal leading-normal"
            } `}
            color="inherit"
          >
            {t("our_team")}
          </div>
        </a>
        <div
          className={`text-xl font-['DINNextLTArabic-Regular'] hover:text-[#34C87C] hover:cursor-pointer font-normal leading-normal mb-2 ml-8 ${
            isContactUs || isConsultNow
              ? " text-[#34C87C]  font-weight-800 text-[18px] "
              : "text-xl font-normal leading-normal"
          } `}
          color="inherit"
          onClick={() => {
            navigate("/contact-us");
            setDrawer(undefined);
          }}
        >
          {" "}
          {t("contact_us")}
        </div>
        <div
          className={`text-xl font-['DINNextLTArabic-Regular'] hover:text-[#34C87C] hover:cursor-pointer font-normal leading-normal mb-2 ml-8 ${
            isContactUs || isConsultNow
              ? " text-[#34C87C]  font-weight-800 text-[18px] "
              : "text-xl font-normal leading-normal"
          } `}
          color="inherit"
          onClick={() => {
            navigate("/blogs");
            setDrawer(undefined);
          }}
        >
          {" "}
          {t("blogs")}
        </div>
        <a
          href="#consult"
          onClick={() => {
            if (isVideo || isContactUs || isConsultNow) navigate("/");
            setDrawer(undefined);
          }}
        >
          <Button
            id="Button1"
            sx={{
              border: "2px solid #34C87C",
              marginInlineStart: "8px",
            }}
            className="border-solid me-2 border-[#34c87c] overflow-hidden flex flex-col justify-center ml-5 w-full h-16 shrink-0 items-center border-2 rounded"
          >
            <div className="text-center text-lg  font-semibold capitalize text-[#34c87c]">
              {t("get_consulting")}
            </div>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
