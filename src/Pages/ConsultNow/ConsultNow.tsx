import { useEffect } from "react";
import FormConsult from "../../Components/pageFormConsult/FormConsult";
import SectionSpecialist from "../../Components/pageFormConsult/SectionSpecialist";
import WhatsappIcon from "../../Components/WhatsappIcon/WhatsappIcon";
import NavBar from "../../Components/NavBar/NavBar";
import { useSearchParams } from "react-router-dom";
const ConsultNow = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <NavBar sectionRefs={null} isConsultNow />
      <WhatsappIcon />
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
