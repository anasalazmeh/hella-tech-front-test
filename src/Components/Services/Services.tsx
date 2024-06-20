import React from "react";
import ContactCard from "../ContactUs/ContactCard/ContactCard";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div id="services" className=" w-full flex flex-col   items-center px-3  ">
      <div id="ContentRoot" className="    xl:w-[1225px] lg:w-full    ">
        <div id="Services1" className="text-lg   text-[#34c87c]">
          // <div className="text-[#1c1d22] contents">01 . {t("services")}</div>
        </div>
        <div className="text-4xl  font-medium text-[#0d1c22] mb-20 lg:w-1/2 md:w-full ">
          {t("high_impact_services_to_take_your_business_to_the_next_level")}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 place-items-center  gap-x-[72px] gap-y-[60px] ">
          <ContactCard
            title="grapgic_design"
            subTitle="convey_your_message_to_the_audience_through_distinctive_visual_content"
            iconUrl="/images/services/graphic-design.png"
            isService
          />
          <ContactCard
            title="consulting"
            subTitle="we_offer_you_a_free_30-minute_consultation_to_discuss_the_optimal_ways_to_provide_unique_solutions"
            iconUrl="/images/services/consulting.png"
            isService
          />
          <ContactCard
            title="video_editing"
            subTitle="enhance_your_business_with_graphic_design_and_brand_development_services"
            iconUrl="/images/services/video-editing.png"
            isService
          />
          <ContactCard
            title="wordpress_development"
            subTitle="website_that_reflects_your_identity_and_goals_technologies_and_attractive_designs"
            iconUrl="/images/services/wordpress.png"
            isService
          />
          <ContactCard
            title="web_development"
            subTitle="custom_designed_website_for_you_or_your_business"
            iconUrl="/images/services/web-dev.png"
            isService
          />
          <ContactCard
            title="app_development"
            subTitle="get_your_app_and_share_your_services_interactively_on_both_android_and_iOS_platforms"
            iconUrl="/images/services/app-dev.png"
            isService
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
