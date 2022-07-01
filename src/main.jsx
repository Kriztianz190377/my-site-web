import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Portfolio from "./components/portfolio/Portfolio";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
