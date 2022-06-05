import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Toast({ type, message }) {
  return toast(message, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    type: type,
    draggable: true,
    progress: undefined,
  });
}

export default Toast;
