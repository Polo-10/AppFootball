import Ronaldo from "../img/Ronaldo.webp";
import Bounce from "react-reveal/Bounce";

const CardLiveScore = () => {
  return (
    <div className="stylesContainer2">
      <Bounce top duration={1000} delay={200}>
        <div className="ronaldo">
          <img src={Ronaldo} alt="" loading="lazy" />
        </div>
      </Bounce>
    </div>
  );
};

export default CardLiveScore;
