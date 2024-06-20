import React, { useRef, useEffect } from "react";
import TeamCart from "./TeamCard/TeamCart";
import { useTranslation } from "react-i18next";
import { useDraggable } from "react-use-draggable-scroll";
import "./style.css";

const OurTeam = () => {
  const { t } = useTranslation();
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (ref.current) {
        const container = ref.current;
        const scrollableWidth = container.scrollWidth - container.clientWidth;
        const scrollPosition = container.scrollLeft;

        if (-scrollPosition + 2 > scrollableWidth) {
          container.scrollTo({ left: scrollableWidth, behavior: "smooth" });
        } else {
          container.scrollBy({ left: -450, behavior: "smooth" });
        }
      }
    }, 2000); // Scroll every two seconds

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);
  return (
    <div id="our_team" className=" w-full flex justify-center  ">
      <div className="flex flex-col gap-20 w-full items-start xl:w-[1225px] lg:w-full ">
        <div className="flex flex-col gap-3 lg:w-3/5 md:w-full items-start">
          <div className="text-lg  text-[#34c87c]">
            //{" "}
            <div id="OurTeam" className="text-[#1c1d22] contents">
              06 . {t("our_team")}
            </div>
          </div>
          <div className="text-4xl  font-medium text-[#0d1c22]">
            {t("we_listen_discuss_advise_and_then_take_action")}
          </div>
        </div>

        <div
          dir="rtl"
          className="flex items-center team-slider gap-x-[35px] overflow-x-auto flex-shrink-0 place-items-center w-full"
          {...events}
          ref={ref}
        >
          <TeamCart
            name="Ayla Bektaş"
            role="founder_and_ceo_fe"
            image="/images/team/ayla.png"
            tags={["CEO"]}
          />
          <TeamCart
            name="Ahmad Yassine"
            role="media_director"
            image="/images/team/ahmad.png"
            tags={["Photography", "Videography"]}
          />
          <TeamCart
            name="Anas Kahreyah"
            role="art_director"
            image="/images/team/anas.png"
            tags={["UI/UX", "Graphics", "Visuals"]}
          />

          <TeamCart
            name="Bayan Amouri"
            role="front_end_developer_fe"
            image="/images/team/bayan.png"
            tags={["CSS", "React", "Javascript"]}
          />
          <TeamCart
            name="Suzan Al-Najdi"
            role="project_manager"
            image="/images/team/suzan.png"
            tags={["Project Manager"]}
          />
          <TeamCart
            name="Rhaf Moute"
            role="back_end_developer_fe"
            image="/images/team/rahaf.png"
            tags={["HTML", "PHP", "Laravel"]}
          />
          <TeamCart
            name="Sohaib Alkharsa"
            role="video_editor"
            image="/images/team/sohaib.png"
            tags={["Video Editor"]}
          />
          <TeamCart
            name="SALMA FAKHANI"
            role="writer_content_creator"
            image="/images/team/salma.png"
            tags={["Writer", "Content Creator"]}
          />

          <TeamCart
            name="Büşra Al-khatib"
            role="voice_commentor"
            image="/images/team/busra.png"
            tags={["Voice Over"]}
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
