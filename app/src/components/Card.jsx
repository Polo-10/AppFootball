import Messi from "../../src/img//LionelMessi.png";
import { useNavigate } from "react-router-dom";
import styles from "../style/mainPage/card.module.scss";

const Card = () => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/LiveScore");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={Messi} alt="" />
      </div>

      <div className={styles.containerDetails}>
        <p className={styles.text}>Enter The World of Football</p>
        <p className={styles.lorem}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          blanditiis ducimus odit magni dolores.
        </p>

        <button onClick={handleRoute} className={styles.liveScore}>
          LIVE SCORE
        </button>
      </div>
    </div>
  );
};

export default Card;
