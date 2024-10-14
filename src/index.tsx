import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routes/Routing";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/Theme";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/localization/i18n";

import ReactPixel from 'react-facebook-pixel';

const pixelId = '448275588090205'; // Replace with your Facebook Pixel ID

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};

ReactPixel.init(pixelId, undefined, options);
ReactPixel.pageView();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>

          <Routing />
        </ThemeProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
