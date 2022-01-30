// import styled from "styled-components";
// import { useState, useEffect } from "react";

// const url =
//   "https://apiv3.apifootball.com/?action=get_events&APIkey=92c52f62d781874adc780c755fecb174ef2245354500417f642c0d00d5a75502&match_live=1";

// const ScoreA = ({ home_scorer, time }) => {
//   return (
//     <>
//       <p>{home_scorer}</p>
//       <p>{time}</p>
//     </>
//   );
// };

// const DetailsELement = () => {
//   const [liveDetailsElement, setliveDetailsElement] = useState([]);

//   useEffect(() => {
//     const getData = async () =>
//       fetch(url)
//         .then((res) => res.json())
//         .then((res) => setliveDetailsElement(res))
//         // .then((res) => {
//         //   setTimeout(() => {
//         //     setLiveScoreState(res.data);
//         //   }, 500);
//         // })
//         .catch((err) => console.log(err));

//     getData();
//   }, []);
//   return (
//     <>
//       {liveDetailsElement.map((item) => {
//         return (
//           <div key={item.id}>
//             {item.goalscorer.map((item2) => (
//               <ScoreA
//                 home_scorer={item2.home_scorer}
//                 time={`${item2.time} min`}
//               />
//             ))}
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default DetailsELement;
