import React, { useState } from "react";
import { HiBell, HiChat, HiMenu, HiOutlineSearch } from "react-icons/hi";
import Sidebar from "../sidebar/sidebar";

export default function Navbar() {
  const [isOpened, toggleSideMenu] = useState(false);
  console.log(isOpened);

  return (
    <div className="flex justify-between bg-white items-center border border-gray-200 p-8">
      <div className="w-1/3 flex items-center">
        <button
          onClick={() => toggleSideMenu(!isOpened)}
          className="block xl:hidden text-3xl mr-3"
        >
          <HiMenu></HiMenu>
        </button>
        <SearchField></SearchField>
      </div>
      <div className="flex">
        <span className="pl-3 text-4xl">
          <HiChat />
        </span>
        <span className="pl-3 text-4xl">
          <HiBell />
        </span>
        <span className="pl-3 text-4xl">
          <HiChat />
        </span>
      </div>
    </div>
  );
}

function SearchField() {
  return (
    <div className="flex items-center  bg-white shadow-sm border border-gray-300">
      <span className="pl-3 text-3xl text-gray-500">
        <HiOutlineSearch />
      </span>
      <input
        type="text"
        className="w-full text-3xl p-2 pl-3 text-gray-700 border-gray-400 bg-white rounded-md focus:outline-none"
        placeholder="Search..."
      />
    </div>
  );
}
