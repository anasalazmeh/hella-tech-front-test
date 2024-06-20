import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  subTitle: string;
  iconUrl: string;
  isService?: boolean;
}
const ContactCard = ({ title, subTitle, iconUrl, isService }: Props) => {
  const { t } = useTranslation();
  return (
    <div
      dir={`${title === "phone" ? "ltr" : ""}`}
      className={`px-[39px] hover:shadow-lg transition-shadow ease-in-out w-full min-w-[200px] max-w-[352px] grow py-[30px]  ${
        isService
          ? "bg-[#F4F4F4] min-h-[388px] max-h-[388px]"
          : "bg-white max-h-[347px] min-h-[347px]"
      } flex flex-col items-center gap-[26px] rounded-[30px] shadow-md`}
    >
      <div className="h-[150px] w-[150px] flex flex-col justify-center items-center">
        <div className="rounded-full w-full h-full bg-gradient-to-r p-[3px] from-[#34C87C] to-[#00B08C]">
          <div
            className={`rounded-full h-full w-full flex justify-center items-center  ${
              isService ? "bg-[#F4F4F4]" : "bg-white"
            }`}
          >
            <img
              className={`bg-transparent h-[auto] w-[auto] object-cover `}
              src={iconUrl}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col h-full items-center gap-[14px]">
        {/* Title */}
        <h3 className="text-[20px] xlg:text-[30px] font-normal">{t(title)}</h3>

        {/* Divider */}
        <div className="w-[80px] h-[2.5px] rounded-md bg-[#D6D7D9]"></div>

        {/* Sub Title */}
        <h5 className="text-[#555555] text-center w-[100%] ">{t(subTitle)}</h5>
      </div>
    </div>
  );
};

export default ContactCard;
