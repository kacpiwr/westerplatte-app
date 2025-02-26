import React from "react";
import ReactDOM from "react-dom/client"; // <-- Import poprawny
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✔️ Tworzymy root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
