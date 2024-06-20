import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import SectionSpecialist from "../../Components/pageFormConsult/SectionSpecialist";
import FormConsult from "../../Components/pageFormConsult/FormConsult";
import NavBar from "../../Components/NavBar/NavBar";
import WhatsappIcon from "../../Components/WhatsappIcon/WhatsappIcon";

const ConsultNow = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <WhatsappIcon />
      <NavBar sectionRefs={null} isConsultNow />
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-[1225px] lg:w-full">
          <SectionSpecialist />
          <FormConsult />
        </div>
      </div>
    </>
  );
};

export default ConsultNow;
