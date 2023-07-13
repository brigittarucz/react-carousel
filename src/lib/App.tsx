import Carousel from "./components/carousel/Carousel";
import "./assets/stylesheets/main.css";
import Controls from "./components/controls/Controls";
import React, { ReactNode, useState } from "react";

function ReactCarousel({
  images,
  header,
}: {
  images: ReactNode[];
  header?: ReactNode;
}) {
  const [imageNumber, setImageNumber] = useState(0);
  const [direction, setDirection] = useState<-1 | 0 | 1>(0);
  const imagesCarousel: ReactNode[] = images;
  const reactNode = header ? header : null;

  return (
    <div className="carousel-react-container-app">
      <Controls
        imageNumber={imageNumber}
        setImageNumber={setImageNumber}
        imagesCarouselLength={imagesCarousel.length}
        reactNode={reactNode ? reactNode : null}
        setDirection={setDirection}
      />
      <Carousel
        imageNumber={imageNumber}
        imagesCarousel={imagesCarousel}
        direction={direction}
      />
    </div>
  );
}

export default ReactCarousel;
