import React, { useEffect, useRef } from "react";
import {
  DASHBOARD_SIDEBAR_LINKS,
  SidebarItem,
} from "../../lib/constants/sidebar_icons";
import { Link } from "react-router-dom";

interface SidebarProps {
  isExpanded: boolean;
}

export default function Sidebar({ isExpanded }: SidebarProps) {
  return (
    <nav className=" text-white flex flex-col h-screen text-lg p-3">
      <div className="flex-1 flex flex-col text-left">
        <h1 className="h-28 text-3xl text-center">Shop</h1>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink
            key={item.key}
            label={item.label}
            path={item.path}
            icon={item.icon}
          ></SidebarLink>
        ))}
      </div>
      <div>DOWN</div>
    </nav>
  );
}

function SidebarLink(item: SidebarItem) {
  return (
    <Link className="hover:no-underline" to={item.path}>
      <div
        className="text-white flex flex-col xl:flex-row items-center text-sm xl:text-2xl hover:bg-gray-800"
        key={item.key}
      >
        <span className=" text-2xl xl:text-4xl">{item.icon}</span>
        <div className="m-4"> {item.label}</div>
      </div>
    </Link>
  );
}
