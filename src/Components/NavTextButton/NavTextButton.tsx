import React from "react";
import "./NavText.css";
import { Button, ButtonProps } from "@mui/material";
import { useTranslation } from "react-i18next";
interface IButton extends ButtonProps {
  text: string;
}
const NavTextButton = (props: IButton) => {
  const { t } = useTranslation();
  return (
    <Button {...props}>
      <div className="text-[18px] font-normal font-weight-600 leading-normal text-green-500 ">
        {t(props.text)}
      </div>
    </Button>
  );
};

export default NavTextButton;
