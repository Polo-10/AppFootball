import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Nav/NavBar";

import Teams from "./pages/Teams";
import Footballers from "./pages/Footballers";

import LiveScore from "./pages/LiveScore";
import MainPage from "./pages/MainPage";

import "./style/mainPage/style.scss";

import Ronaldo from "./img/Ronaldo.png";
import Messi from "./img/LionelMessi.png";

import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Zoom from "react-reveal/Zoom";

// import { glide } from "react-tiger-transition";

// import { Navigation, Screen, glide } from "react-tiger-transition";
// import "react-tiger-transition/styles/main.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/LiveScore" element={<LiveScore />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/footballers" element={<Footballers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
