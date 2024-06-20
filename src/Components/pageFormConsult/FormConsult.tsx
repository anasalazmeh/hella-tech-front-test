import { useTranslation } from "react-i18next";
import "./formConsult.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import http from "../../api/axios";
import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";

const FormConsult = () => {
  const { consultant_id } = useParams();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // form logic
  const schema = z.object({
    communicate_method: z
      .string()
      .min(1, { message: "Please select a value" })
      .max(260, { message: "The name is too long" }),
    name: z
      .string()
      .min(3, { message: "Please full name must be at least 3 a value" })
      .max(260, { message: "The name is too long" }),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("this is not a valid email."),
    company: z
      .string()
      .min(3, { message: "Please company name must be at least 3 a value" })
      .max(260, { message: "The company name is too long" }),
    phone: z
      .string()
      .min(4, { message: "Please your phone must be at least 4 a value" })
      .max(50, { message: "The phone is too long" }),
    address: z
      .string()
      .min(4, { message: "Please address must be at least 4 a value" })
      .max(260, { message: "The address is too long" }),
    why: z
      .string()
      .min(4, { message: "Please why must be at least 4 a value" })
      .max(260, { message: "The why is too long" }),
  });
  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      communicate_method: "whatsapp",
      name: "",
      email: "",
      company: "",
      phone: "",
      address: "",
      why: "",
    },
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  const [openError, setOpenError] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setSubmitLoading(true);
      console.log("data", data);

      await http.post("/consultations", {
        ...data,
        lang: localStorage.getItem("i18nextLng") === "ar" ? "ar" : "en",
        order: 1,
        status: 1,
        consultant_id,
      });
      reset()
      handleClickOpen();
    } catch (err) {
      setOpenError(true);
    } finally {
      setSubmitLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="consult my-10">
        <div className="contact-by">
          <div className="address">
            <p>{t("communicate_method")}</p>
          </div>
          <div className="grid">
            <div className="radio">
              <input
                {...register("communicate_method")}
                type="radio"
                name="contact"
                value="email"
                id="email"
              />
              <label htmlFor="email">
                <div className="box">EMAIL</div>
              </label>
            </div>
            <div className="radio">
              <input
                {...register("communicate_method")}
                type="radio"
                name="contact"
                value="video call"
                id="video-call"
              />
              <label htmlFor="video-call">
                <div className="box">VIDEO CALL</div>
              </label>
            </div>
            <div className="radio">
              <input
                {...register("communicate_method")}
                type="radio"
                name="contact"
                value="call"
                id="call"
              />
              <label htmlFor="call">
                <div className="box">CALL</div>
              </label>
            </div>
            <div className="radio">
              <input
                {...register("communicate_method")}
                type="radio"
                name="contact"
                value="whatsapp"
                id="whatsapp"
              />
              <label htmlFor="whatsapp">
                <div className="box">WHATSAPP</div>
              </label>
            </div>
          </div>
        </div>
        <div className="your-info">
          <div className="address">
            <p>{t("your_info")}</p>
          </div>
          <div className="section">
            <div className="box-row">
              <div className="input">
                <label htmlFor="name">
                  <div className="box">{t("full_name")} *</div>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t("john_david")}
                  className={`${errors.name ? "border-4 border-solid border-red-700":"border-4 border-solid focus:border-[#34C87C]"}`}
                />
                {errors.name && <p className="text-red-700">{errors.name?.message}</p>}
              </div>
              <div className="input">
                <label htmlFor="email">
                  <div className="box">{t("your_email")} *</div>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@yourmail.com"
                  className={`${errors.email ? "border-4 border-solid border-red-700":"border-4 border-solid focus:border-[#34C87C]"}`}
                />
                {errors.email && <p className="text-red-700">{errors.email?.message}</p>}
              </div>
            </div>
            <div className="box-row">
              <div className="input">
                <label htmlFor="phone">
                  <div className="box">{t("your_phone")} *</div>
                </label>
                <input
                  {...register("phone")}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+0000000000"
                  className={`${errors.phone ? "border-4 border-solid border-red-700":"border-4 border-solid focus:border-[#34C87C]"}`}
                />
                                {errors.phone && <p className="text-red-700">{errors.phone?.message}</p>}
              </div>
              <div className="input">
                <label htmlFor="company ">
                  <div className="box">{t("company")}</div>
                </label>
                <input
                  {...register("company")}
                  type="text"
                  name="company"
                  id="company"
                  placeholder={t("company_name")}
                  className={`${errors.company ? "border-4 border-solid border-red-700":"border-4 border-solid focus:border-[#34C87C]"}`}
                />
                {errors.company && <p className="text-red-700">{errors.company?.message}</p>}
              </div>
            </div>
            <div className="box-row">
              <div className="input">
                <label htmlFor="address">
                  <div className="box">{t("address")} *</div>
                </label>
                <input
                  {...register("address")}
                  type="text"
                  name="address"
                  id="address"
                  placeholder={t("your_address")}
                  className={`${errors.address ? "border-4 border-solid border-red-700":"border-4 border-solid focus:border-[#34C87C]"}`}
                />
                {errors.address && <p className="text-red-700">{errors.address?.message}</p>}
              </div>
            </div>
            <div className="box-row">
              <div className="input">
                <label htmlFor="why">
                  <div className="box">why *</div>
                </label>
                <input
                  {...register("why")}
                  type="text"
                  name="why"
                  id="why"
                  placeholder="Why your consult"
                  className={`${errors.why ? "border-4 border-solid border-red-700":"border-4 border-solid focus:border-[#34C87C]"}`}
                />
                {errors.why && <p className="text-red-700">{errors.why?.message}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="button-submit">
          <button type="submit" className="bs">
            {submitLoading ? (
              <CircularProgress color="secondary" />
            ) : (
              <>{t("get_consultation")}</>
            )}
          </button>
        </div>
      </div>
      {/* Dialog */}
      {/* Dialog */}
      <Dialog
        open={open}
        dir={localStorage.getItem("i18nextLng") === "ar" ? "rtl" : "ltr"}
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="flex justify-between" id="alert-dialog-title">
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
            <div className="text-[24px]">{t("the_message_has_been_sent")}</div>
            <div className="font-bold">{t("thank_you_for_reaching_us")}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
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
        dir={localStorage.getItem("i18nextLng") === "ar" ? "rtl" : "ltr"}
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="flex justify-between" id="alert-dialog-title">
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
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
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
  );
};
export default FormConsult;
