import React, { ReactNode } from "react";
import ArrowIcon from "./components/ArrowIcon";

const Controls = ({
  imageNumber,
  setImageNumber,
  imagesCarouselLength,
  reactNode,
}: {
  imageNumber: number;
  setImageNumber: (val: number) => void;
  imagesCarouselLength: number;
  reactNode: ReactNode;
}) => {
  const setImage = (direction: number) => {
    if (direction === -1) {
      if (imageNumber === 0) {
        const newImageNumber = imagesCarouselLength - 1;
        setImageNumber(newImageNumber);
      } else {
        const newImageNumber = imageNumber - 1;
        setImageNumber(newImageNumber);
      }
    } else if (direction === 1) {
      if (imageNumber === imagesCarouselLength - 1) {
        setImageNumber(0);
      } else {
        const newImageNumber = imageNumber + 1;
        setImageNumber(newImageNumber);
      }
    }
  };

  return (
    <div className="controls">
      <div
        className="controls_arrow-left controls_arrow"
        onClick={() => setImage(-1)}
      >
        <ArrowIcon />
      </div>
      <div className="controls_middle">{reactNode && reactNode}</div>
      <div
        className="controls_arrow-right controls_arrow"
        onClick={() => setImage(1)}
      >
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Controls;
