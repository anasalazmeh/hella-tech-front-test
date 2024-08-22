import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import WhatsappIcon from "../../Components/WhatsappIcon/WhatsappIcon";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const { t } = useTranslation();
  return (
    <>
      <WhatsappIcon />
      <NavBar sectionRefs={null} isVideo />
      <div className="w-full flex justify-center">
        <div className="w-full xl:w-[1225px] lg:w-full">
        <h1 className="w-full text-center text-3xl text-[#25D366] my-3"> {t("terms_and_conditions")}</h1>
      <p>Suhael Owis</p><h1>fdddsdfdfg</h1><p>hgsdfjkksf</p><p>dsfddfsffftsfhgfhfddghhhf</p>
      <iframe
          height={700}
          src={
            process.env.PUBLIC_URL +
            `/pdfs/${
              localStorage.getItem("i18nextLng") === "ar"
                ? "terms-and-conditions-ar.pdf"
                : "terms-and-conditions.pdf"
            }`
          }
          className="w-full"
        />
       
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
