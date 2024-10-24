import { PropsWithChildren, ReactNode } from "react";
import { Drawer } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DirectionResolver } from "../../../../utils/hooks";
interface Props {
  children: ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
}
const Menu = ({ open, setOpen, children }: Props) => {
  const { i18n } = useTranslation();
  return (
    <>
      <div className="bg-[#0D1C22] text-white px-4 py-14 h-full rounded-md w-[350px] space-y-9 hidden xl:block">
        {children}
      </div>
      <Drawer
        anchor={i18n.language === "en" ? "right" : "left"}
        open={open}
        className="w-full xl:hidden"
      >
        <div dir={DirectionResolver()} className="bg-[#0D1C22] relative text-white px-4 py-14 rounded-md w-[350px] space-y-9">
          <div className={`absolute top-3 text-3xl ${i18n.language === "en" ? "right-5" : "left-5"}`} onClick={()=>setOpen(false)}>X</div>
          {children}
        </div>
      </Drawer>
    </>
  );
};

export default Menu;
