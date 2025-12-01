import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Router";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./authProvider/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>
);
