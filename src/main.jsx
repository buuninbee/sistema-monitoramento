import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import App from "./App.jsx";
import DashboardKrs from "./pages/DashboardKrs.jsx";

import LayoutDashboard from "./pages/LayoutDashboard";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />

        <Routes>
          <Route index element={<App />} />
        <Route element={<LayoutDashboard />}>
          <Route path="/dashboard-krs" element={<DashboardKrs />} />
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
);
