import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import WhatsappIcon from "../../Components/WhatsappIcon/WhatsappIcon";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <WhatsappIcon />
      <NavBar sectionRefs={null} isVideo />
      <div className="w-full flex-col flex justify-center items-center">
        <iframe
          height={700}
          src={
            process.env.PUBLIC_URL +
            `/pdfs/${
              localStorage.getItem("i18nextLng") === "ar"
                ? "privacy-policy-ar.pdf"
                : "privacy-policy.pdf"
            }`
          }
          className="w-full"
        />
      </div>
    </>
  );
};

export default PrivacyPolicy;
