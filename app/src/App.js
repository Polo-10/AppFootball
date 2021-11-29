import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Nav/NavBar";

import Leagues from "./pages/Leagues";
import Teams from "./pages/Teams";
import Footballers from "./pages/Footballers";
import Search from "./pages/Search";
import LiveScore from "./pages/LiveScore";
import MainPage from "./pages/MainPage";

import "./style/mainPage/style.scss";

import Ronaldo from "./img/Ronaldo.png";
import Messi from "./img/LionelMessi.png";
// import Messi from "../img/LionelMessi.png";
// import { PageTransition } from "@steveeeie/react-page-transition";

// axios.defaults.baseURL = "http://localhost:3010"
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

// const Links = () => {
//   <>
//     <Link to="/LiveScore"></Link>
//   </>;
// };

// const Live = (props) => <h1></h1>;

function App() {
  return (
    // <BrowserRouter>
    //   <Links />
    //   <Routes
    //     render={({ location }) => {
    //       return (
    //         <PageTransition
    //           preset="moveToLeftFromRight"
    //           transitionKey={location.pathname}
    //         >
    //           <Routes location={location}>
    //             {/* <Route exact path="/" component={Home} /> */}
    //             <Route path="/LiveScore" component={<Live />} />
    //           </Routes>
    //         </PageTransition>
    //       );
    //     }}
    //   />
    // </BrowserRouter>

    <div className="Wrapper">
      {/* <div className="team">
        <img src={Ronaldo} alt="" className="color" />
        <img src={Messi} alt="" className="gray" />
        <div className="member">
          <h1>Anna Baugart</h1>
          <h2>Programistka JS</h2>
        </div>
      </div>
      <script src="./pages/Script.js"></script> */}

      <Router>
        <Navbar />

        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/LiveScore" element={<LiveScore />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/footballers" element={<Footballers />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
