import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import BrandSection from "./BrandSection";
import SideBar from "./SideBar";

function NavbarContainerRoute() {
  return (
    <>
      <NavBar />
      <SideBar />

      <Outlet />
    </>
  );
}

export default NavbarContainerRoute;
