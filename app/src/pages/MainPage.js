import { useState } from "react";

import Header from "../components/Header";
import Aside from "../components/Aside";
import Card from "../components/Card";

import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <div>
      <Helmet>
        <style>{`body {background-color: #1d1e2c}`}</style>
        <style>{`body {overflow: hidden}`}</style>
      </Helmet>
      <Header />
      <Aside />
      <Card />
    </div>
  );
};

export default MainPage;
