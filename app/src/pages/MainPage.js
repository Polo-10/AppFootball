import React from "react";

import Aside from "../components/Aside";
import Card from "../components/Card";
import AnimationPages from "../components/AnimatePages";

import { Helmet } from "react-helmet";
// const Aside = React.lazy(() => import("../components/Aside"));

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

// import React from "react";

// import Aside from "../components/Aside";
// import Card from "../components/Card";
// import AnimationPages from "../components/AnimatePages";
// import styled from "styled-components";
// import { Helmet } from "react-helmet";
// // const Aside = React.lazy(() => import("../components/Aside"));

// import { useNavigate } from "react-router-dom";
// import styles from "../style/mainPage/card.module.scss";
// import Bounce from "react-reveal/Bounce";
// import HeadShake from "react-reveal/Bounce";

// const MainPage = () => {
//   const navigate = useNavigate();
//   const handleRoute = () => {
//     navigate("/LiveScore");
//   };
//   return (
//     // <AnimationPages>
//     <WrapperMainPage>
//       <Helmet>
//         <style>{`body {background-color: #1d1e2c}`}</style>
//       </Helmet>

//       <div></div>
//       <div>
//         <Card />
//       </div>
//       {/* <div> */}
//       {/* <Aside /> */}
//       {/* </div> */}
//     </WrapperMainPage>
//     // </AnimationPages>
//   );
// };

// const WrapperMainPage = styled.div`
//   width: 100vw;
//   height: 100vh;
//   overflow-x: hidden;
//   display: flex;
//   /* justify-content: center; */
//   overflow: auto;
//   align-items: center;
//   > div:nth-of-type(1) {
//     background: red;
//     height: 100%;
//     overflow: auto;
//   }
//   > div:nth-of-type(2) {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     /* overflow: auto; */
//     > div {
//       /* transform: translateX(50%); */
//     }
//   }
//   > div {
//     min-width: 260px;
//     flex-basis: 20%;
//     display: grid;
//     align-items: center;
//     > div {
//       transform: translateX(50%);
//     }
//   }
// `;

// const TextAndButton = styled.div`
//   grid-column: span 3;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
// `;

// export default MainPage;
