import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Consulting from "../../Components/Consulting/Consulting";
import HomeSection from "../../Components/HomeSection/HomeSection";
import NavBar from "../../Components/NavBar/NavBar";
import OurPortfolio from "../../Components/OurPortofolio/OurPortfolio";
import OurTeam from "../../Components/OurTeam/OurTeam";
import ProcessSection from "../../Components/ProcessSection/ProcessSection";
import Services from "../../Components/Services/Services";
import Testimonial from "../../Components/Testimonial/Testimonial";
import WhatsappIcon from "../../Components/WhatsappIcon/WhatsappIcon";
import HelaVideo from "../HelaVideo/HelaVideo";
import Consult from "../../Components/Consult/Consult";
import http from "../../api/axios";
import { DataConsultants } from "../../typeData";
const MainPage = () => {
  const { t, i18n } = useTranslation();
  const [data,setData]=useState<DataConsultants[]>()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const fatchData= async ()=>{
      const res = await http("/consultants");
      setData(res.data.data)
      console.log(data)
    }
    fatchData()
  },[]);
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),

    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  return (
    <div className="mb-[10px]  scroll-smooth ">
      <WhatsappIcon />
      <NavBar sectionRefs={sectionRefs} />
      <div className="flex flex-col gap-[100px]  px-2  ">
        <section ref={sectionRefs[0]}>
          <HomeSection />
        </section>
        <section ref={sectionRefs[1]}>
          <Services />
        </section>{" "}
        <section ref={sectionRefs[2]}>
          <AboutUs />
          <HelaVideo />
        </section>
        <section ref={sectionRefs[3]}>
          <ProcessSection />
        </section>
        <section ref={sectionRefs[4]}>
          <Consulting />
        </section>
        <section ref={sectionRefs[5]}>
          <OurTeam />
        </section>
        <section>
          <Testimonial />
        </section>
        <section>
          {data && <Consult data={data} />}
        </section>
        <section>
          <OurPortfolio />
        </section>
      </div>
      {/* The rest of the page */}
    </div>
  );
};

export default MainPage;
