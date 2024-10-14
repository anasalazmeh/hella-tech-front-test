import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ContactCardContainer from "../../Components/ContactUs/ContactCardContainer/ContactCardContainer";
import ContactCardForm from "../../Components/ContactUs/ContactCardForm/ContactCardForm";
import ImageCover from "../../Components/ContactUs/ImageCover/ImageCover";
import NavBar from "../../Components/NavBar/NavBar";
import WhatsappIcon from "../../Components/WhatsappIcon/WhatsappIcon";

const ContactUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <NavBar sectionRefs={null} isContactUs/>

      {/* Image With text*/}

      <ImageCover />
      <div className="w-full flex-col flex justify-center items-center">
        <div className="flex justify-center items-center w-[80%]">
          <ContactCardContainer />
        </div>
        <div className="w-[80%]">
          <ContactCardForm />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
