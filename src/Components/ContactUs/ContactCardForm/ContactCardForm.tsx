import { Close } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import http from "../../../api/axios";
import ContactCardFormItem from "../ContactCardFormItem/ContactCardFormItem";

const ContactCardForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  // form logic

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Message_type: "Consulting",
      full_name: "",
      email: "",
      company_name: "",
      subject: "",
      messages: "",
    },
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  const [openError, setOpenError] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setSubmitLoading(true);
      console.log("data", data);

      await http.post("/store_contact", {
        ...data,
        lang: localStorage.getItem("i18nextLng") === "ar" ? "ar" : "en",
        order: 1,
        status: 1,
        address: "test",
      });
      handleClickOpen()
    } catch (err) {
      setOpenError(true);
    } finally {
      setSubmitLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[40px]"
    >
      <div className="text-[30px] font-500 text-[#34c87c]">
        {t("get_in_touch")}
      </div>
      <div className="grid gap-[30px] grid-cols-1 lg:grid-cols-2">
        <ContactCardFormItem required name="full_name">
          <Controller
            name="full_name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  InputProps={{
                    style: {
                      borderRadius: "10px",
                    },
                  }}
                  error={errors.full_name ? true : false}
                  type="text"
                  placeholder={t("full_name")}
                  className="w-full"
                />
              );
            }}
          />
        </ContactCardFormItem>

        <ContactCardFormItem required name="your_email">
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  InputProps={{
                    style: {
                      borderRadius: "10px",
                    },
                  }}
                  placeholder={t("your_email")}
                  type="text"
                  error={errors.email ? true : false}
                  className="w-full"
                />
              );
            }}
          />
        </ContactCardFormItem>

        <ContactCardFormItem name="company">
          <Controller
            name="company_name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  InputProps={{
                    style: {
                      borderRadius: "10px",
                    },
                  }}
                  placeholder={t("company")}
                  type="text"
                  error={errors.company_name ? true : false}
                  className="w-full"
                />
              );
            }}
          />
        </ContactCardFormItem>

        <ContactCardFormItem required name="subject">
          <Controller
            name="subject"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  InputProps={{
                    style: {
                      borderRadius: "10px",
                    },
                  }}
                  placeholder={t("subject")}
                  type="text"
                  error={errors.subject ? true : false}
                  className="w-full"
                />
              );
            }}
          />
        </ContactCardFormItem>

        <div className="col-span-1 lg:col-span-2">
          <ContactCardFormItem name="message_type" required>
            <Controller
              name="Message_type"
              control={control}
              render={({ field }) => {
                return (
                  <RadioGroup
                    {...field}
                    row
                    className="gap-[40px]"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="graphic_design"
                      className="w-full p-0 m-0 lg:w-1/4"
                      control={<Radio />}
                      label={t("graphic_design")}
                    />

                    <FormControlLabel
                      value="web_development"
                      className="w-full p-0 m-0 lg:w-1/4"
                      control={<Radio />}
                      label={t("web_development")}
                    />

                    <FormControlLabel
                      className="w-full p-0 m-0 lg:w-1/4"
                      value="consulting"
                      control={<Radio />}
                      label={t("consulting")}
                    />

                    <FormControlLabel
                      className="w-full p-0 m-0 lg:w-1/4"
                      value="brand_building"
                      control={<Radio />}
                      label={t("brand_building")}
                    />

                    <FormControlLabel
                      className="w-full p-0 m-0 lg:w-1/4"
                      value="wordPress_development"
                      control={<Radio />}
                      label={t("wordpress_development")}
                    />

                    <FormControlLabel
                      className="w-full p-0 m-0 lg:w-1/4"
                      value="hiring"
                      control={<Radio />}
                      label={t("hiring")}
                    />

                    <FormControlLabel
                      className="w-full p-0 m-0 lg:w-1/4"
                      value="ui_ux"
                      control={<Radio />}
                      label={t("ui_ux_design")}
                    />

                    <FormControlLabel
                      className="w-full p-0 m-0 lg:w-1/4"
                      value="mobile_development"
                      control={<Radio />}
                      label={t("mobile_development")}
                    />
                    <FormControlLabel
                      className="w-full p-0 m-0 lg:w-1/4"
                      value="other"
                      control={<Radio />}
                      label={t("other")}
                    />
                  </RadioGroup>
                );
              }}
            />
          </ContactCardFormItem>
        </div>
        {/* {errors.message_type ? (
          <div className="text-red-600 bg-red-500">
            {t("this_field_is_required")}
          </div>
        ) : (
          "s"
        )} */}

        <div className="col-span-1 w-full lg:col-span-2">
          <ContactCardFormItem required name="message">
            <Controller
              name="messages"
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    placeholder={t("message")}
                    multiline
                    InputProps={{ style: { borderRadius: "20px" } }}
                    style={{ width: "100%" }}
                    error={errors.messages ? true : false}
                    rows={10}
                    maxRows={12}
                  />
                );
              }}
            />
          </ContactCardFormItem>
          <div className="flex justify-center mt-[46px] mb-[100px]">
            <Button
              disableElevation
              style={{
                borderRadius: "50px",
                fontSize: "20px",
                fontWeight: "500",
                color: "white",
                textTransform: "none",
                padding: "25px 38px",
                width: "228px",
              }}
              className="rounded-[50px]"
              variant="contained"
              type="submit"
            >
              {submitLoading ? (
                <CircularProgress color="secondary" />
              ) : (
                <>{t("send_message")}</>
              )}
            </Button>

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
                    {t("the_message_has_been_sent")}
                  </div>
                  <div className="font-bold">
                    {t("thank_you_for_reaching_us")}
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
              dir={localStorage.getItem("i18nextLng") === "ar" ? "rtl" : "ltr"}
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
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactCardForm;
