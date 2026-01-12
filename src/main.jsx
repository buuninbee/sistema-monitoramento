import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import App from "./App.jsx";
import DashboardKrs from "./pages/DashboardKrs.jsx";

import LayoutDashboard from "./pages/LayoutDashboard";
import Unidade from "./pages/Unidades";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route element={<LayoutDashboard />}>
          <Route path="/dashboard-krs" element={<DashboardKrs />} />
          <Route path="/unidades" element={<Unidade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
