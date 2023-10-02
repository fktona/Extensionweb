import { useState } from "react";
//import Header from "./Components/Header";
//import Homepage from "../Components/Header";
import Homepage from "./Homepage";
//import Footer from "./Components/Footer";
import Nav from "../Components/nav";
import Process from "../Components/Process";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";
//import { AppContext } from "./assets/AppContext";
import { NavLink, Outlet, useLocation, useRoutes } from "react-router-dom";
export default function RootLayout() {

  return (
    <div className="relative bg-gray-200">
 
     
        <Nav />
        <Outlet />
        <Footer />

    </div>
  );
}
