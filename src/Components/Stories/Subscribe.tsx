import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import http from '../../api/axios';
import { useTranslation } from 'react-i18next';
import { Close } from '@mui/icons-material';
import { TextField, Button, CircularProgress, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

const Subscribe = () => {
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
    <div className="lg:col-span-2 md:col-span-2 w-full rounded-md py-10 px-5 bg-[#474950]">
    <div className="flex flex-col gap-[6px]">
      <div className="flex flex-col gap-[5px] ">
        <div className="text-[18px] font-600 ">{t("subscribe")}</div>
        <div className="text-[13px] font-[400]">
          {t("join_our_mailing_list_and_to_get_our_news")}
        </div>
        {/* Subscribe */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-3"
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
                  className="w-full"
                  InputProps={{
                    style: {
                      borderRadius: "0px",
                      background: "white",
                      width:"100%"
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
              width:"100%",

            }}
            type="submit"
            variant="contained"

            onClick={handleClickOpen}
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
  )
}

export default Subscribe