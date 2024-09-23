import { useTranslation } from "react-i18next";
import "./formConsult.css";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
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
  Checkbox,
} from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DataConsultants } from "../../typeData";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ar from 'react-phone-number-input/locale/ar.json'
import en from 'react-phone-number-input/locale/en.json'
import ContactCardFormItem from "../ContactUs/ContactCardFormItem/ContactCardFormItem";
const ConsultForm = () => {
  const { t,i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // form logic
  const schema = z.object({
    communicate_method: z.string().min(1),
    name: z
      .string()
      .min(3, { message: t("errors_name_message1") })
      .max(260, { message: t("errors_name_message2") }),
    email: z
      .string()
      .min(1, { message: t("errors_email_message1") })
      .email(t("errors_email_message2")),
    company: z.string().max(260, { message: t("errors_company_message1") }),
    phone: z
      .string()
      .min(6, { message: t("errors_phone_message1") })
      .max(50, { message: t("errors_phone_message2") }),
    address: z.string().max(260, { message: t("errors_address_message1") }),
    note: z
      .string()
      .min(4, { message: t("errors_consultation_subject_message1") })
      .max(260, { message: t("errors_consultation_subject_message2") }),
      acceptTerms: z.boolean().refine(val => val === true,{
        message: t("you_must_agree"),
      }),
  });
  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    control,
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
      note: "",
      acceptTerms:false
    },
  });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [Data, setdata] = useState<DataConsultants>();

  const { slug } = useParams();
  useEffect(() => {
    const GetData = async () => {
      const res = await http.get(`/consultant/${slug}`);
      setdata(res.data.data);
    };
    GetData();
  }, [slug]);
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [valid, setvaild] = useState(true);
  const onSubmit = async (data: any) => {
    if (valid) {

      try {
        setSubmitLoading(true);
        await http.post("/consultations", {
          ...data,
          phone:formatPhoneNumberIntl(PhoneNumber),
          lang: localStorage.getItem("i18nextLng"),
          order: 1,
          status: 1,
          consultant_id: Data?.id,
        });
        reset();
        handleClickOpen();
        setSubmitLoading(false);
      } catch (err) {
        setOpenError(true);
      } finally {
        setSubmitLoading(false);
      }
    }
  };
  const handechange = (value: any) => {
    setPhoneNumber(value);
    if (value) {
      setvaild(isPossiblePhoneNumber(value!));
      setvaild(isValidPhoneNumber(value!));
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="consult">
        <div className="contact-by w-full md:my-5 text-black py-2 px-6 md:py-0 md:px-0">
          <div className="address text-[19px] md:text-[32px] font-500 text-black">
            <p>{t("contact_by")}</p>
          </div>
          <div className="grid px-3 md:px-[22px] pt-4">
            <div className="radio">
              <input
                {...register("communicate_method")}
                type="radio"
                value="email"
                id="email"
              />
              <label htmlFor="email">
                <div className="box">{t("email")}</div>
              </label>
            </div>
            <div className="radio">
            <input
                {...register("communicate_method")}
                type="radio"
                value="video_call"
                id="video_call"
              />
              <label htmlFor="video_call">
                <div className="box">{t("video_call")}</div>
              </label>
            </div>
            <div className="radio">
              <input
                {...register("communicate_method")}
                type="radio"
                value="call"
                id="call"
              />
              <label htmlFor="call">
                <div className="box">{t("call")}</div>
              </label>
            </div>
            <div className="radio">
              <input
                {...register("communicate_method")}
                type="radio"
                value="whatsapp"
                id="whatsapp"
              />
              <label htmlFor="whatsapp">
                <div className="box">{t("whatsapp")}</div>
              </label>
            </div>
          </div>
        </div>
        <div className="your-info w-full text-black py-2 px-6 md:py-0 md:px-0">
          <div className="address text-[19px] md:text-[32px] font-500 text-black">
            <p>{t("your_info")}</p>
          </div>
          <div className="section text-black px-3">
            <div className="box-row">
              <div className="input">
                <label htmlFor="name">
                  <div className="box text-black">{t("full_name")} *</div>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t("john_david")}
                  className={`${
                    errors.email
                      ? "border-2 border-solid border-red-500  input-text"
                      : "border-2 border-solid focus:border-[#34C87C] input-text"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="input">
                <label htmlFor="email">
                  <div className="box text-black">{t("your_email")} *</div>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@yourmail.com"
                  className={`${
                    errors.email
                      ? "border-2 border-solid border-red-500  input-text"
                      : "border-2 border-solid focus:border-[#34C87C] input-text"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="box-row">
              <div className="input">
                <label htmlFor="phone">
                  <div className="box text-black">{t("your_phone")} *</div>
                </label>
                <PhoneInput
                  {...register("phone")}
                  labels={i18n.language==="ar" ? ar :en}
                  onChange={handechange}
                  
                  inputProps={{
                    require: true,
                  }}
                  className={`${
                    valid === false
                      ? "border-2 border-solid border-red-500 rounded-[10px] px-2"
                      : "border-2 border-solid  rounded-[10px] focus w-full"
                  }`}
                  placeholder="+9000000000"
                />
                {!valid && <p className="text-red-500">{t("wrong_number")}</p>}
              </div>
              <div className="input">
                <label htmlFor="company ">
                  <div className="text-black">{t("company")}</div>
                </label>
                <input
                  {...register("company")}
                  type="text"
                  name="company"
                  id="company"
                  placeholder={t("company_name")}
                  className={`${
                    errors.email
                      ? "border-2 border-solid border-red-500  input-text"
                      : "border-2 border-solid focus:border-[#34C87C] input-text"
                  }`}
                />
                {errors.company && (
                  <p className="text-red-500">{errors.company.message}</p>
                )}
              </div>
            </div>
            <div className="box-row">
              <div className="input">
                <label htmlFor="address">
                  <div className="box text-black">{t("address")}</div>
                </label>
                <input
                  {...register("address")}
                  type="text"
                  name="address"
                  id="address"
                  placeholder={t("your_address")}
                  className={`${
                    errors.email
                      ? "border-2 border-solid border-red-500  input-text"
                      : "border-2 border-solid focus:border-[#34C87C] input-text"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
              </div>
            </div>
            <div className="box-row">
              <div className="input">
                <label htmlFor="note">
                  <div className="box text-black">
                    {t("consultation_subject")} *
                  </div>
                </label>
                <input
                  {...register("note")}
                  type="text"
                  name="note"
                  id="note"
                  placeholder={t("consultation_subject_placeholder")}
                  className={`${
                    errors.email
                      ? "border-2 border-solid border-red-500  input-text"
                      : "border-2 border-solid focus:border-[#34C87C] input-text"
                  }`}
                />
                {errors.note && (
                  <p className="text-red-500">{errors.note.message}</p>
                )}
              </div>
            </div>
            <div className="box-row">
              <div className="input">
          <ContactCardFormItem  name="">
            <Controller
              name="acceptTerms"
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <>
                  <Checkbox
                  id="acceptTerms"
                    {...field}
                  />
                  <label htmlFor="acceptTerms" onClick={()=>navigate("")}>
                  <Link
                className="hover:underline text-[18px] font-[400] text-main underline"
                to={"/privacy-policy"}
              >
                 {t("agree_the_privacy_policy")}
              </Link>
                   
                    </label>
                  {errors.acceptTerms && <p className="text-red-500 mx-10">{t("you_must_agree")}</p>}
                  </>
                );
              }}
            />
          </ContactCardFormItem>
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
            <div className="text-[24px]">{t("the_message_is_consult_1")}</div>
            <div className="font-bold">{t("the_message_is_consult_2")}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            style={{ color: "white" }}
            onClick={() => {
              handleClose();
              navigate("/");
            }}
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
export default ConsultForm;
