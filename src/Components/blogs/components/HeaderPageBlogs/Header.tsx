import React from "react";
import './Header.css'
import { useTranslation } from "react-i18next";
const Header = () => {
  const {t}=useTranslation()
  return (
    <div className="backgroundHeader text-white py-4">

      <div className="w-full flex justify-center">
      <div className="w-full xl:w-[1225px] lg:w-full space-y-5">
        <p>{"//"} {t("our_stories")}</p>
        <p className="uppercase text-2xl md:text-4xl">" {t("we_create_awesome_blog")} "</p>
      </div>
      </div>
    </div>
  );
};
// background: linear-gradient(180deg, #34C87C 0%, #00B08C 100%);
export default Header;
