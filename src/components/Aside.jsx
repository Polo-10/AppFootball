import React from "react";

import Slide from "react-reveal/Slide";

const Aside = () => {
  return (
    <Slide left duration={900} delay={100}>
      <aside className="main__page__aside"></aside>
    </Slide>
  );
};

export default Aside;
