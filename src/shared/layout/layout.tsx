import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

export default function Layout() {
  return (
    <div className="h-screen grid grid-cols-6 overflow-hidden">
      <div className="bg-black hidden  sm:block md:col-span1 ">
        <Sidebar isExpanded={false}></Sidebar>
      </div>
      <div className="col-span-6 sm:col-span-5 flex flex-col bg-gray-100 overflow-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <div>Footer</div>
      </div>
    </div>
  );
}
