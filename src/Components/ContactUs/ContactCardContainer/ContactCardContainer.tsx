import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import { useTranslation } from "react-i18next";

const ContactCardContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="grid gap-[72px] w-full place-items-center  relative bottom-[87px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ContactCard
        title="email"
        subTitle="info@hela-tech.com"
        iconUrl="/images/contact-us/mail-box.png"
      />

      <ContactCard
        title="phone"
        subTitle="+90 551 044 42 13"
        iconUrl="/images/contact-us/call.png"
      />

      <div className="w-full flex justify-center md:justify-center md:items-center col-span-1 relative md:bottom-[32px] lg:bottom-0 md:col-span-2 lg:col-span-1">
        <ContactCard
          title="location"
          subTitle={t("istanbul_turkye")}
          iconUrl="/images/contact-us/location.png"
        />
      </div>
    </div>
  );
};

export default ContactCardContainer;
