import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { io } from "socket.io-client";
const socket = io();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> </React.StrictMode> */}
    <App socket={socket} />
  </BrowserRouter>
);
