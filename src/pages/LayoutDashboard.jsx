import { Outlet } from "react-router";
import { NavLink } from "react-router";

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const LayoutDashboard = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <header className="bg-[#171717] text-white h-24 rounded-bl-4xl w-full px-8 flex">
            <nav className="flex justify-between items-center-safe w-full">
              <div className="flex gap items-center">
                <div className="flex gap-1 items-center">
                  <SidebarTrigger className="-ml-1 text-(--terciario-200)" />
                  <Separator
                    orientation="vertical"
                    className="mr-3 data-[orientation=vertical]:h-8"
                  />
                </div>
                <NavLink to="/dashboard-krs">NUPIE</NavLink>
              </div>

              <div className="flex gap-7">
                <button className=" bg-(--terciario-300) py-2.5 px-2.5 rounded-full">Final</button>
              </div>
            </nav>
          </header>
          <Outlet />
        </div>
      </SidebarProvider>
    </>
  );
};

export default LayoutDashboard;
