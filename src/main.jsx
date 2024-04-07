import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Button,
  MantineProvider,
  Title,
  createTheme,
  rem,
} from "@mantine/core";
import "@mantine/core/styles.css";
import AppShell from "./components/Appshell.jsx";
import APPSHELL from "./components/Appshell.jsx";
import { BrowserRouter } from "react-router-dom";
import ShowCalender from "./components/date/ShowCalender.jsx";
import "./App.css"
// import { theme } from "./config.js";

export const theme = {
  colors: {
    "ocean-blue": [
      "#7AD1DD",
      "#5FCCDB",
      "#44CADC",
      "#2AC9DE",
      "#1AC2D9",
      "#11B7CD",
      "#09ADC3",
      "#0E99AC",
      "#128797",
      "#147885",
    ],
    "bright-pink": [
      "red",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
  },
  primaryColor: "red",
  headings: {
    fontWeight: 400,
    sizes: {
      h1: {
        fontSize: "4rem",
        color: "bright-pink.0",
      },
    },
  },
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <APPSHELL />
        {/* <ShowCalender /> */}
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);