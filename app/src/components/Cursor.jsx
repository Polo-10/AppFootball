import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <div className="Cursor">
      <AnimatedCursor
        innerSize={15}
        outerSize={12}
        color="99, 137, 247"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={2}
      />
    </div>
  );
};

export default Cursor;
