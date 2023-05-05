import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { DarkModeContextProvider } from "./context/darkModeContext";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
