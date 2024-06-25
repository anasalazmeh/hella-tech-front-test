import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface Props {
  image: string;
  name: string;
  type: string;
}
const BoxSlider = ({ image, name, type }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <img src={image} alt="" className="w-full h-80 bg-cover" />
      <div className=" flex justify-center items-center flex-col bg-[#0D1C22]">
        <p className=" text-[#28ea86] text-[22px] m-2 mb-0 font-500">{name}</p>
        <p className=" text-white">{type}</p>
        <span className="hr w-1/2 max-w-[80px] border-[2.5px] border-solid border-[#28ea86] my-2"></span>
        <button
          onClick={() => navigate("consult-now?id=1")}
          className="w-1/2 max-w-[216.4px] h-[29.79px] border-[1px] border-solid border-[#28ea86] rounded-[10px] m-5 mt-1 bg-white"
        >
          {t("consult_now")}
        </button>
      </div>
    </div>
  );
};

export default BoxSlider;
