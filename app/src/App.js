import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Nav/NavBar";

import Teams from "./pages/Teams";
import Footballers from "./pages/Footballers";
import LiveScore from "./pages/LiveScore";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

import "./style/mainPage/style.scss";

import Cursor from "./components/Cursor";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Cursor />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="/LiveScore" element={<LiveScore />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Footballers" element={<Footballers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Navbar />
    </div>
  );
};

export default App;
