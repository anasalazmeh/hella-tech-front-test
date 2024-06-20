import React from 'react'
import { useTranslation } from 'react-i18next';

const WhatsappIcon = () => {
  const icon = process.env.PUBLIC_URL + "/assets/iconWhatsapp.svg";
  const { i18n } = useTranslation();
  return (
    <a
      target="_blank"
      href="https://api.whatsapp.com/send/?phone=905510444213&text&type=phone_number&app_absent=0"
      className={
        i18n.language === "en"
          ? "right-0 m-2 w-14 md:w-20 fixed bottom-0 bg-[#25D366] text-6xl z-50 rounded-full"
          : "left-0 m-2 w-14 md:w-20 fixed bottom-0 bg-[#25D366] text-6xl z-50 rounded-full"
      }
    >
      
      <img src={icon} className="w-full" alt="" />
    </a>
  );
};

export default WhatsappIcon