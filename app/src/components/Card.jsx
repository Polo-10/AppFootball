import Messi from "../../src/img/LionelMessi.webp";
import { useNavigate } from "react-router-dom";
import styles from "../style/mainPage/card.module.scss";

import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

const Card = () => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/LiveScore");
  };

  return (
    <div className={styles.container}>
      <Bounce top duration={1000}>
        <div className={styles.card}>
          <img src={Messi} alt="" loading="lazy" />
        </div>
      </Bounce>

      <div className={styles.containerDetails}>
        <Zoom delay={500} duration={900}>
          <p className={styles.text}>Enter The World of Football</p>

          <p className={styles.lorem}>
            Thirsty for sensations? Come in and discover our world! A world of
            emotions
          </p>
        </Zoom>
        <Zoom delay={850} duration={900}>
          <button onClick={handleRoute} className={styles.liveScore}>
            LIVE SCORE
          </button>
        </Zoom>
      </div>
    </div>
  );
};

export default Card;
