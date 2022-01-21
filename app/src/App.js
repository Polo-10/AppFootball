import React from "react";
// import { BrowserRouter as Router } from "react-router-dom"
import { useState, useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Nav/NavBar";

import Teams from "./pages/Teams";
import Footballers from "./pages/Footballers";
import LiveScore from "./pages/LiveScore";
import MainPage from "./pages/MainPage";
import Aside from "./components/Aside";

import "./style/mainPage/style.scss";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Aside />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="/LiveScore" element={<LiveScore />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/footballers" element={<Footballers />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
