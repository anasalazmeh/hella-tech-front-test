/* eslint-disable jsx-a11y/alt-text */
import { AppBar, Drawer, IconButton } from "@mui/material";
import { MutableRefObject, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavTextButton from "../NavTextButton/NavTextButton";

import { useNavigate } from "react-router-dom";
import useScrollSpy from "react-use-scrollspy";
import { DirectionResolver } from "../../utils/hooks";
import LangMenu from "./components/LangMenu";
import LanguagesSlider from "./components/LanguagesSlider";
import SideBar from "./components/SideBar";
import logo from "./image/HelaLogo.png";
import languagesSmButton from "./image/languagesSmButton.svg";
import langugesButon from "./image/langugesButon.svg";
import sideBarSmButton from "./image/sideBarSmButton.png";
interface IProps {
  sectionRefs: MutableRefObject<any>[] | null;
  isContactUs?: boolean;
  isVideo?: boolean;
  isConsultNow?: boolean;
}
const NavBar = ({
  sectionRefs,
  isContactUs,
  isVideo,
  isConsultNow,
}: IProps) => {
  const [menuOn, setMenuOn] = useState(false);
  const { t } = useTranslation();
  const [drawer, setDrawer] = useState<"left" | "right">();
  const [drawerSide, setDrawerSide] = useState<"left" | "right">();
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs ?? [],
    offsetPx: -80,
  });
  const navigate = useNavigate();
  const handleResize = () => {
    let isBigScreen = window.innerWidth > 760;
    if (isBigScreen) {
      setDrawer(undefined);
      setDrawerSide(undefined);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "white", py: "5px" }}
      onScroll={(v) => {}}
    >
      <div className="w-full flex items-center justify-between" dir="ltr">
        <IconButton
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" },
          }}
          onClick={() => setDrawerSide("left")}
          edge="start"
          color="inherit"
          aria-label="menu"
          className={`${DirectionResolver() !== "ltr" ? "rotate -180" : ""}`}
        >
          <img src={sideBarSmButton} alt="" />
        </IconButton>
        <div className="w-full flex items-center justify-center lg:justify-center">
          <div className="xl:w-[1225px] lg:w-full   flex  relative justify-between items-center">
            <div
              dir={DirectionResolver()}
              className=" w-full flex flex-row-reverse gap-[20px] justify-between items-center justify-items-center place-items-center flex-wrap"
            >
              <IconButton
                sx={{
                  display: { xs: "none", md: "none", lg: "flex" },
                  // display: "none",
                }}
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setMenuOn(!menuOn)}
              >
                <div className="relative">
                  <img src={langugesButon} className="w-16 shrink-0 " />
                  {menuOn && <LangMenu setMenuOn={setMenuOn} />}
                </div>
              </IconButton>
              <a
                href="#consult"
                onClick={() => {
                  if (isVideo || isContactUs || isConsultNow) navigate("/");
                }}
                className={`${
                  activeSection === 6 ? "font-extrabold shadow-md" : ""
                }`}
              >
                <NavTextButton
                  text="get_consulting"
                  style={{ fontWeight: "bold !important" }}
                  sx={{
                    border:
                      activeSection === 6
                        ? "2px solid #28ea86"
                        : "2px solid #34C87C",
                    py: "8px",
                    px: "15px",
                    display: { xs: "none", md: "none", lg: "flex" },
                    fontWeight: 700,
                  }}
                ></NavTextButton>
              </a>

              <div className="lg:flex flex-row gap-[40px] px-[52px] md:hidden xs:hidden  flex-wrap ">
                <a
                  href="#home"
                  onClick={() => {
                    if (isVideo || isContactUs || isConsultNow) navigate("/");
                  }}
                >
                  <div
                    className={`text-[18px] font-normal  leading-normal  ${
                      activeSection === 0 && sectionRefs
                        ? " text-[#34C87C]  font-weight-800  text-[18px] "
                        : "text-black font-weight-400 text-[18px] "
                    } `}
                    color="inherit"
                  >
                    {t("home")}
                  </div>
                </a>
                <a
                  href="#services"
                  onClick={() => {
                    if (isVideo || isContactUs || isConsultNow) navigate("/");
                  }}
                >
                  <div
                    className={`text-[18px] font-normal  leading-normal  ${
                      activeSection === 1
                        ? " text-[#34C87C]  font-weight-800  text-[18px] "
                        : "text-black font-weight-400 text-[18px] "
                    } `}
                    color="inherit"
                  >
                    {t("services")}
                  </div>
                </a>
                <a
                  href="#about_us"
                  onClick={() => {
                    if (isVideo || isContactUs || isConsultNow) navigate("/");
                  }}
                >
                  <div
                    className={`text-[18px] font-normal  leading-normal  ${
                      activeSection === 2
                        ? " text-[#34C87C]  font-weight-800  text-[18px] "
                        : "text-black font-weight-400 text-[18px] "
                    } `}
                    color="inherit"
                  >
                    {t("about_us")}
                  </div>
                </a>
                <a
                  href="#process"
                  onClick={() => {
                    if (isVideo || isContactUs || isConsultNow) navigate("/");
                  }}
                >
                  <div
                    className={`text-[18px] font-normal  leading-normal  ${
                      activeSection === 3
                        ? " text-[#34C87C]  font-weight-800  text-[18px] "
                        : "text-black font-weight-400 text-[18px] "
                    } `}
                    color="inherit"
                  >
                    {t("process")}
                  </div>
                </a>{" "}
                <a
                  href="#our_team"
                  onClick={() => {
                    if (isVideo || isContactUs || isConsultNow) navigate("/");
                  }}
                >
                  <div
                    className={`text-[18px] font-normal  leading-normal  ${
                      activeSection === 5
                        ? " text-[#34C87C]  font-weight-800  text-[18px] "
                        : "text-black font-weight-400 text-[18px] "
                    } `}
                    color="inherit"
                  >
                    {t("our_team")}
                  </div>{" "}
                </a>
                <div
                  className={`text-[18px] hover:text-[#34C87C] hover:cursor-pointer font-normal  leading-normal  ${
                    isContactUs
                      ? " text-[#34C87C]  font-weight-800  text-[18px] "
                      : "text-black font-weight-400 text-[18px] "
                  } `}
                  color="inherit"
                  onClick={() => navigate("/contact-us")}
                >
                  {t("contact_us")}
                </div>
                <div
                  className={`text-[18px] hover:text-[#34C87C] hover:cursor-pointer font-normal  leading-normal  ${
                    isContactUs
                      ? " text-[#34C87C]  font-weight-800  text-[18px] "
                      : "text-black font-weight-400 text-[18px] "
                  } `}
                  color="inherit"
                  onClick={() => navigate("/blogs")}
                >
                  {t("blogs")}
                </div>
              </div>
              <img
                onClick={() => navigate("/")}
                className="cursor-pointer ms-4 lg:ms-0"
                src={logo}
                alt=""
              />
            </div>
          </div>
        </div>
        <IconButton
          onClick={() => setDrawer("right")}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" },
          }}
          edge="start"
          color="inherit"
          aria-label="menu"
          className={`${DirectionResolver() !== "ltr" ? "rotate -180" : ""}`}
        >
          <img src={languagesSmButton} alt="" />
        </IconButton>
      </div>
      <Drawer
        anchor={drawer === "left" ? "left" : "right"}
        open={drawer ? true : false}
        onClose={() => setDrawer(undefined)}
      >
        {drawer !== "left" ? <LanguagesSlider setDrawer={setDrawer} /> : ""}
      </Drawer>

      <Drawer
        anchor={
          drawerSide === "left"
            ? "left"
            : drawerSide === "right"
            ? "right"
            : undefined
        }
        onClose={() => setDrawerSide(undefined)}
        open={drawerSide ? true : false}
      >
        <SideBar
          activeSection={activeSection}
          sectionRefs={sectionRefs}
          setDrawer={setDrawerSide}
          isContactUs={isContactUs}
          isVideo={isVideo}
          isConsultNow={isConsultNow}
        />
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
