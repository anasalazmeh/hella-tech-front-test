import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div className="backgroundHeader text-white py-4">

      <div className="w-full flex justify-center">
      <div className="w-full xl:w-[1225px] lg:w-full space-y-5">
        <p>{"//"} Our stories</p>
        <p className="uppercase text-2xl md:text-4xl">" we create awesome blog "</p>
      </div>
      </div>
    </div>
  );
};
// background: linear-gradient(180deg, #34C87C 0%, #00B08C 100%);
export default Header;
