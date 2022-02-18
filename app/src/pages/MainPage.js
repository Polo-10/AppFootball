import React from "react";

import Aside from "../components/Aside";
import Card from "../components/Card";
import AnimationPages from "../components/AnimatePages";

import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <AnimationPages>
      <div>
        <Helmet>
          <style>{`body {background-color: #1d1e2c}`}</style>
          <style>{`body {overflow: hidden}`}</style>
        </Helmet>
        <Aside />
        <Card />
      </div>
    </AnimationPages>
  );
};

export default MainPage;
