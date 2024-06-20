import { useTranslation } from "react-i18next";
import MemberTag from "./MemberTag/MemberTag";
import { Fragment } from "react";

interface IPorps {
  name: string;
  role: string;
  tags: string[];
  image: string;
}
const TeamCart = ({ name, role, tags, image }: IPorps) => {
  const { t } = useTranslation();

  return (
    <div className="shrink-0">
      <div className="flex flex-col w-full items-center">
        <img
          src={image}
          className="bg-[linear-gradient(111deg,_#34c87c_-13%,#a2fcce_29%,#cbffe4_79%,#42e08f_120%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat self-start mb-2 rounded-lg"
        />
        <div className="text-center text-xl  font-medium text-[#34c87c]">
          {name}
        </div>
        <div className="text-center text-xl w-full  text-[#0d1c22] self-start mb-4  ">
          {t(role)}
        </div>
        <img
          src="https://file.rendit.io/n/Vm0C0H6OvWRN9Pgv1S6P.svg"
          id="Line"
          className="mb-5 w-20"
        />
        <div className="flex flex-row justify-center gap-3 lg:w-3/5 md:w-full items-start">
          {tags.map((tag, index) => {
            return (
              <Fragment key={index}>
                <MemberTag name={tag} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamCart;
