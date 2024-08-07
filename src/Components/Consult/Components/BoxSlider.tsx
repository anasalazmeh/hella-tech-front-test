import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { DataConsultants } from "../../../typeData";

interface Props {
  item: DataConsultants;
}
const BoxSlider = ({ item }: Props) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full">
      <div className="h-80">
        <img
          src={item.image}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className=" flex justify-center items-center flex-col bg-[#0D1C22]">
        <p className=" text-[#28ea86] text-[22px] m-2 mb-0 font-500">
          {item.translations.name[i18n.language]}
        </p>
        <p className=" text-white text-center">
          {item.translations.specialization[i18n.language]}
        </p>
        <span className="hr w-1/2 max-w-[80px] border-[2.5px] border-solid border-[#28ea86] my-2"></span>
        <button
          onClick={() => navigate(`consult-now/${item.translations.slug.en}`)}
          className="w-1/2 max-w-[216.4px] h-[29.79px] border-[1px] border-solid border-[#28ea86] rounded-[10px] m-5 mt-1 bg-white"
        >
          {t("consult_now")}
        </button>
      </div>
    </div>
  );
};

export default BoxSlider;
