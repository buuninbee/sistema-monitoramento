import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import DashboardKrs from "./pages/DashboardKrs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/dashboard-krs" element={<DashboardKrs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
