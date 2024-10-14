import { useEffect } from "react";
import ConsultForm from "../../Components/pageFormConsult/ConsultForm";
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
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-[1225px] lg:w-full">
          <SectionSpecialist />
          <ConsultForm />
        </div>
      </div>
    </>
  );
};

export default ConsultNow;
