import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  children: ReactNode;
  name: string;
  required?: boolean;
}
const ContactCardFormItem = ({ children, name, required }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-[17px]">
      <div className="text-[22px] font-500  leading-[32px]">
        {t(name)} {required && "*"}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ContactCardFormItem;
