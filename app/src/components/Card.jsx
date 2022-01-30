import Messi from "../../src/img//LionelMessi.png";
import { useNavigate } from "react-router-dom";
import styles from "../style/mainPage/card.module.scss";

import Bounce from "react-reveal/Bounce";
import HeadShake from "react-reveal/Bounce";

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
        <Bounce right delay={550} duration={1000}>
          <p className={styles.text}>Enter The World of Football</p>
          <p className={styles.lorem}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            blanditiis ducimus odit magni dolores.
          </p>
        </Bounce>
        <HeadShake bottom delay={750} duration={1000}>
          <button onClick={handleRoute} className={styles.liveScore}>
            LIVE SCORE
            {/* <span className="spanHover2">
            <AiOutlineDoubleRight />
          </span> */}
          </button>
        </HeadShake>
      </div>
    </div>
  );
};

export default Card;
