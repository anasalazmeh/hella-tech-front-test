import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Snackbar,
  TextField,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import http from "../../../api/axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Close } from "@mui/icons-material";

const Footer = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const location = useLocation();

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [submitLoading, setSubmitLoading] = useState(false);

  const [openError, setOpenError] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setSubmitLoading(true);
      await http.post("/store_subscriber", {
        ...data,
        user_type: "subscibe",
      });
      setOpen(true);
    } catch (err) {
      setOpenError(true);
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <>
      {/* // <div className="bg-[#0D1C22] text-white px-[30px] lg:px-[5%] xl:px-[200px] pt-[91px] lg:pt-[56px] pb-[35px] lg:pb-[20px]"> */}
      <div className="bg-[#0D1C22] text-white flex justify-center pt-[91px] lg:pt-[56px] pb-[35px] lg:pb-[20px] ">
        <div className=" xl:w-[1225px] lg:w-full  md:px-3  sm:px-3 xs:px-3  ">
          <div className=" lg:flex lg:justify-between">
            <img className="object-contain" src="/HelaLogo.png" alt="" />

            <div className="hidden lg:flex  items-center gap-[60px]">
              <div className="flex items-center gap-[10px]">
                <img src="/images/footer/call.png" />
                <div className="flex flex-col gap-[3px]">
                  <div className="text-[20px] font-600 leading-[30px]">
                    {t("call_us")}
                  </div>
                  <div dir="ltr">+90 551 044 42 13</div>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <img src="/images/footer/message.png" />
                <div className="flex flex-col gap-[3px]">
                  <div className="text-[20px] font-600 leading-[30px]">
                    {t("message_us")}
                  </div>
                  <div>info@hela-tech.com</div>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <img src="/images/footer/location.png" />
                <div className="flex flex-col gap-[3px]">
                  <div className="text-[20px] font-600 leading-[30px]">
                    {t("location")}
                  </div>
                  <div>{t("istanbul_turkye")}</div>
                </div>
              </div>
            </div>
          </div>
          <Divider
            style={{ marginTop: "54px" }}
            className="mt-[54px]"
            color="#555555"
          />
          <div className="flex flex-col md:flex-row lg:hidden mt-[47px] md:justify-center md:items-center gap-[60px]">
            <div className="flex items-center gap-[10px]">
              <img src="/images/footer/call.png" />
              <div className="flex flex-col gap-[3px]">
                <div className="text-[20px] font-600 leading-[30px]">
                  {t("call_us")}
                </div>
                <div dir="ltr">+90 551 044 42 13</div>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <img src="/images/footer/message.png" />
              <div className="flex flex-col gap-[3px]">
                <div className="text-[20px] font-600 leading-[30px]">
                  {t("message_us")}
                </div>
                <div>info@hela-tech.com</div>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <img src="/images/footer/location.png" />
              <div className="flex flex-col gap-[3px]">
                <div className="text-[20px] font-600 leading-[30px]">
                  {t("location")}
                </div>
                <div>{t("istanbul_turkye")}</div>
              </div>
            </div>
          </div>
          {/* grid sections */}
          <div className="grid grid-cols-1  mt-[50px] md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
            {/* First Column */}
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[5px] items-center">
                <div className="w-[13px] h-[13px] bg-[#00B08C]"></div>
                <div className="text-[20px] font-600 leading-[30px] relative bottom-[2px] text-[#34C87C]">
                  {t("site_links")}
                </div>
              </div>
              <a
                className="hover:underline text-[18px] font-[400]"
                style={{ color: "white" }}
                href={"#home"}
                onClick={() => {
                  if (location.pathname === "/contact-us") navigate("/");
                }}
              >
                {t("home")}
              </a>
              <a
                className="hover:underline text-[18px] font-[400]"
                style={{ color: "white" }}
                href={"#about_us"}
                onClick={() => {
                  if (location.pathname === "/contact-us") navigate("/");
                }}
              >
                {t("about_us")}
              </a>
              <a
                className="hover:underline text-[18px] font-[400]"
                style={{ color: "white" }}
                href={"#consulting"}
                onClick={() => {
                  if (location.pathname === "/contact-us") navigate("/");
                }}
              >
                {t("consulting")}
              </a>
              <a
                className="hover:underline text-[18px] font-[400]"
                style={{ color: "white" }}
                href={"#services"}
                onClick={() => {
                  if (location.pathname === "/contact-us") navigate("/");
                }}
              >
                {t("services")}
              </a>
              <Link
                className="hover:underline text-[18px] font-[400]"
                style={{ color: "white" }}
                to={"/contact-us"}
              >
                {t("contact")}
              </Link>
            </div>

            {/* Second column */}

            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[5px] items-center">
                <div className="w-[13px] h-[13px] bg-[#00B08C]"></div>
                <div className="text-[20px] font-600 leading-[30px] relative bottom-[2px] text-[#34C87C]">
                  {t("our_services")}
                </div>
              </div>
              <div
                className="text-[18px] font-[400]"
                style={{ color: "white" }}
              >
                {t("graphic_design")}
              </div>
              <div
                className="text-[18px] font-[400]"
                style={{ color: "white" }}
              >
                {t("ui_ux_design")}
              </div>
              <div
                className="text-[18px] font-[400]"
                style={{ color: "white" }}
              >
                {t("wordpress_development")}
              </div>
              <div
                className="text-[18px] font-[400]"
                style={{ color: "white" }}
              >
                {t("app_development")}
              </div>
              <div
                className="text-[18px] font-[400]"
                style={{ color: "white" }}
              >
                {t("web_development")}
              </div>
            </div>

            {/* Third Column */}
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[5px] items-center">
                <div className="w-[13px] h-[13px] bg-[#00B08C]"></div>
                <div className="text-[20px] font-600 leading-[30px] relative bottom-[2px] text-[#34C87C]">
                  {t("uitility_page")}
                </div>
              </div>

              <Link
                className="hover:underline text-[18px] font-[400]"
                style={{ color: "white" }}
                to={"/privacy-policy"}
              >
                {t("privacy_policy")}
              </Link>

              <Link
                className="hover:underline text-[18px] font-[400]"
                style={{ color: "white" }}
                to={"/terms-and-conditions"}
              >
                {t("terms_and_conditions")}
              </Link>

              <Link
                className="hover:underline text-[18px] font-[400]"
                style={{ color: "white" }}
                to={"/refund-policy"}
              >
                {t("refund_policy")}
              </Link>
            </div>

            {/* Fourth Column */}
            <div className="lg:col-span-2 md:col-span-2 w-full rounded-md py-[42px] px-[36px] bg-[#474950]">
              <div className="flex flex-col gap-[6px]">
                <div className="flex flex-col gap-[20px] ">
                  <div className="text-[20px] font-600 ">{t("subscribe")}</div>
                  <div className="text-[18px] font-[400]">
                    {t("join_our_mailing_list_and_to_get_our_news")}
                  </div>
                  {/* Subscribe */}
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center"
                  >
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: true,
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Invalid email address",
                        },
                      }}
                      render={({ field }) => {
                        return (
                          <TextField
                            {...field}
                            className="grow"
                            InputProps={{
                              style: {
                                borderRadius: "0px",
                                background: "white",
                              },
                            }}
                            error={errors.email ? true : false}
                            placeholder={t("subscribe")}
                            type="text"
                          />
                        );
                      }}
                    />

                    <Button
                      className="grow shadow-none"
                      style={{
                        boxShadow: "none",
                        height: "56px",
                        borderRadius: "0px",
                        color: "white",
                        textTransform: "none",
                      }}
                      type="submit"
                      variant="contained"

                      // onClick={handleClickOpen}
                    >
                      {submitLoading ? (
                        <CircularProgress color="secondary" />
                      ) : (
                        <>{t("subscribe")}</>
                      )}
                    </Button>

                    {/* Dialog */}
                    <Dialog
                      open={open}
                      dir={
                        localStorage.getItem("i18nextLng") === "ar"
                          ? "rtl"
                          : "ltr"
                      }
                      fullWidth
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle
                        className="flex justify-between"
                        id="alert-dialog-title"
                      >
                        <Close
                          color="primary"
                          className="cursor-pointer"
                          onClick={() => setOpen(false)}
                        />
                        <img
                          className="object-contain "
                          width={80}
                          src="/HelaLogo.png"
                          alt=""
                        />
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText
                          id="alert-dialog-description"
                          className="flex flex-col justify-center items-center"
                        >
                          <div className="text-[24px]">
                            {t("subscribed_successfully")}
                          </div>
                          <div className="font-bold">
                            {t("thanks_for_subscribing")}
                          </div>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          variant="contained"
                          style={{ color: "white" }}
                          onClick={handleClose}
                        >
                          {t("close")}
                        </Button>
                      </DialogActions>
                    </Dialog>

                    {/* Error */}
                    <Dialog
                      open={openError}
                      dir={
                        localStorage.getItem("i18nextLng") === "ar"
                          ? "rtl"
                          : "ltr"
                      }
                      fullWidth
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle
                        className="flex justify-between"
                        id="alert-dialog-title"
                      >
                        <Close
                          color="error"
                          className="cursor-pointer"
                          onClick={() => setOpenError(false)}
                        />
                        <img
                          className="object-contain "
                          width={80}
                          src="/HelaLogo.png"
                          alt=""
                        />
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText
                          id="alert-dialog-description"
                          className="flex flex-col justify-center items-center"
                        >
                          <div className="text-[24px]">{t("error")}</div>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          variant="contained"
                          color="error"
                          style={{ color: "white" }}
                          onClick={() => setOpenError(false)}
                        >
                          {t("close")}
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Divider
            style={{ marginTop: "54px" }}
            className="mt-[54px]"
            color="#555555"
          />

          {/* Copyright Section */}

          <div className="flex flex-col lg:flex-row  lg:justify-between gap-[20px] mt-[22px]">
            <div dir="rtl" className="text-[18px] font-[400]">
              {t("copyright")}
              <span className="text-[#34C87C]"> HELA</span> 2023-2024 |{" "}
              {t("designed_by")}
              <span className="text-[#00B08C]"> HELA Tech</span>
            </div>
            <div className="text-[18px] flex items-center gap-[12px] font-[400]">
              {t("follow")} :
              <div className="flex gap-[16px] relative top-[3px] items-center">
                <a target="_blank" href="https://www.facebook.com/Helatech5">
                  <img src="/images/footer/facebook.png" alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/helatech5/">
                  <img src="/images/footer/instagram.png" alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/helatech/"
                >
                  <img src="/images/footer/linkedin.png" alt="" />
                </a>
                <a target="_blank" href="https://twitter.com/helatech5">
                  <img src="/images/footer/twiter.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Alert Dialogue */}
      {/* <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>{t("success")}</AlertTitle>
        </Alert>
      </Snackbar> */}
      {/* Error */}
      {/* <Snackbar
        open={openError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={() => setOpenError(false)}
      >
        <Alert onClose={() => setOpenError(false)} severity="error">
          <AlertTitle>{t("error")}</AlertTitle>
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default Footer;
