import ArrowIcon from "./components/ArrowIcon";

const Controls = () => {
  return (
    <div className="controls">
      <div className="controls_arrow-left controls_arrow">
        <ArrowIcon />
      </div>
      <div className="controls_middle">
        <p> middle </p>
      </div>
      <div className="controls_arrow-right controls_arrow">
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Controls;
