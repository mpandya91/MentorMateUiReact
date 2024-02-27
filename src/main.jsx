import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssVarsProvider>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </CssVarsProvider>
  </React.StrictMode>
);
