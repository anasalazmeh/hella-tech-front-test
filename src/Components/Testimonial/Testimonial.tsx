/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef } from "react"
import TestimonialCard from "./Components/TestimonialCard"
import "./Testimonial.css"
import { Box, IconButton } from "@mui/material"
import { DirectionResolver } from "../../utils/hooks"
import { useTranslation } from "react-i18next"
const Testimonial = () => {
  const ref = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (ref.current) {
        const container = ref.current
        const scrollableWidth = container.scrollWidth - container.clientWidth
        const scrollPosition = container.scrollLeft

        if (-scrollPosition + 50 > scrollableWidth) {
          container.scrollTo({ left: scrollableWidth, behavior: "smooth" })
        } else {
          container.scrollBy({
            left: -ref?.current?.offsetWidth,
            behavior: "smooth",
          })
        }
      }
    }, 5000) // Scroll every two seconds

    return () => {
      clearInterval(scrollInterval)
    }
  }, [])

  const handleScrollRight = () => {
    if (ref.current)
      ref.current.scrollTo({
        left: ref.current.scrollLeft + ref?.current.offsetWidth + 30,
        behavior: "smooth",
      })
  }

  const handleScrollLeft = () => {
    if (ref.current)
      ref.current.scrollTo({
        left: ref.current.scrollLeft - ref?.current.offsetWidth + 150,
        behavior: "smooth",
      })
  }

  const { t } = useTranslation()

  return (
    <div className=" w-full flex justify-center      ">
      <Box
        id="TestimonialRoot"
        className="xl:w-[1225px] lg:w-full  md:w-full  "
        sx={{
          flexDirection: "column",

          overflow: "hidden",
        }}
      >
        <div className="flex flex-col gap-4 lg:w-3/5 md:w-full items-start">
          <div id="Testimonial1" className="text-lg   text-[#45de8f]">
            //{" "}
            <div id="Testimonial" className="text-[#1c1d22] contents">
              09 . {t("testimonial")}
            </div>
          </div>
          <div className="text-4xl  mb-8 font-medium text-[#0d1c22] w-full">
            {t(
              "discover_our_clients_opinions_about_the_services_we_provided_to_them"
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="lg:hidden md:hidden xs:flex sm:flex flex-row gap-4">
            <IconButton onClick={handleScrollLeft}>
              <img
                src={
                  DirectionResolver() == "ltr"
                    ? "https://file.rendit.io/n/KPXggonPzRO2FkhQGfEl.svg"
                    : "https://file.rendit.io/n/W0OzU87yvdUIP19qf7L3.svg"
                }
                id="Element4"
                className="    shrink-0"
              />
            </IconButton>
            <IconButton onClick={handleScrollRight}>
              <img
                src={
                  DirectionResolver() == "ltr"
                    ? "https://file.rendit.io/n/W0OzU87yvdUIP19qf7L3.svg"
                    : "https://file.rendit.io/n/KPXggonPzRO2FkhQGfEl.svg"
                }
                id="Element3"
                className="  shrink-0"
              />
            </IconButton>
          </div>
          <div className="self-stretch flex flex-row  lg:justify-between  md:justify-between sm:justify-center content-center w-full  gap-1  items-start ">
            <div className="mt-40 lg:flex md:flex xs:hidden  ">
              <IconButton onClick={handleScrollLeft}>
                <img
                  src={
                    DirectionResolver() == "ltr"
                      ? "https://file.rendit.io/n/KPXggonPzRO2FkhQGfEl.svg"
                      : "https://file.rendit.io/n/W0OzU87yvdUIP19qf7L3.svg"
                  }
                  id="Element4"
                  className=" w-20 shrink-0"
                />
              </IconButton>
            </div>

            <Box
              sx={{
                overflow: "scroll",
                direction: "rtl",
                maxWidth: {
                  lg: "866px",
                  md: "645px",
                  sm: "450px",
                  xs: "355px",
                },
                display: "inline-flex",
                gap: "25px",
              }}
              className=" hide-scrollbar "
              ref={ref}
            >
              {/* <div className="flex hide-scrollbar justify-center p-1 w-min "> */}
              <TestimonialCard
                ref={cardRef}
                image="/images/testimonial/1.jfif"
                name={t("gibran")}
                comment={t("to_hella_company")}
                rate={5}
              />{" "}
              <TestimonialCard
                ref={cardRef}
                rate={5}
                image="/images/testimonial/2.jfif"
                name={t("chef_majeda")}
                comment={t("my_experience_with_hela")}
              />{" "}
              <TestimonialCard
                ref={cardRef}
                rate={5}
                image="/images/testimonial/3.png"
                name={t("kate_orland_bere_writer_esl_Teacher")}
                comment={t("kate_desc")}
              />{" "}
              {/* </div> */}
            </Box>
            <div className="mt-40 lg:flex md:flex xs:hidden  ">
              <IconButton onClick={handleScrollRight}>
                <img
                  src={
                    DirectionResolver() == "ltr"
                      ? "https://file.rendit.io/n/W0OzU87yvdUIP19qf7L3.svg"
                      : "https://file.rendit.io/n/KPXggonPzRO2FkhQGfEl.svg"
                  }
                  id="Element3"
                  className="   w-20 shrink-0"
                />
              </IconButton>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default Testimonial
