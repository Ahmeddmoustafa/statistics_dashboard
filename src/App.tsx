import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./shared/layout/layout";
import Dashboard from "./screens/dashboard/dashboard";
import Profile from "./screens/profile/profile";

function App() {
  return (
    <div className="overscroll-none">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<Dashboard></Dashboard>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
