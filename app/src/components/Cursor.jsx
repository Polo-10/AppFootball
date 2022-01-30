import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <div className="Cursor">
      <AnimatedCursor
        innerSize={1}
        outerSize={1}
        // color="99, 137, 247"
        outerAlpha={1}
        innerScale={1}
        outerScale={1}
      />
    </div>
  );
};

export default Cursor;
