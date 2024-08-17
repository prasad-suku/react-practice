import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navitem from "./Navitem.jsx";
let lists = [1, 2, 3, 432, 423, 4123, 4, 213, 423, 4231];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navitem lists={lists} />
  </React.StrictMode>
);
