import { useEffect, useState } from "react";
import generateCarouselSkeleton from "components/utils/generateCarouselSkeleton";

const Carousel = ({
  imageNumber,
  imagesCarousel,
}: {
  imageNumber: number;
  imagesCarousel: string[];
}) => {
  const [carousel, setCarousel] = useState(
    generateCarouselSkeleton(null, null, null)
  );

  useEffect(() => {
    switch (imagesCarousel.length) {
      case 0:
        setCarousel(<div>No images</div>);
        break;
      case 1:
        setCarousel(
          generateCarouselSkeleton(null, imagesCarousel[imageNumber], null)
        );
        break;
      case 2:
        if (imageNumber === imagesCarousel.length - 1) {
          setCarousel(
            generateCarouselSkeleton(
              imagesCarousel[imageNumber],
              imagesCarousel[0],
              null
            )
          );
        } else {
          setCarousel(
            generateCarouselSkeleton(
              imagesCarousel[imageNumber],
              imagesCarousel[imageNumber + 1],
              null
            )
          );
        }
        break;
      default:
        if (imageNumber === imagesCarousel.length - 1) {
          setCarousel(
            generateCarouselSkeleton(
              imagesCarousel[imageNumber],
              imagesCarousel[0],
              imagesCarousel[1]
            )
          );
        } else if (imageNumber === imagesCarousel.length - 2) {
          setCarousel(
            generateCarouselSkeleton(
              imagesCarousel[imageNumber],
              imagesCarousel[imageNumber + 1],
              imagesCarousel[0]
            )
          );
        } else {
          setCarousel(
            generateCarouselSkeleton(
              imagesCarousel[imageNumber],
              imagesCarousel[imageNumber + 1],
              imagesCarousel[imageNumber + 2]
            )
          );
        }
        break;
    }
  }, [imageNumber, imagesCarousel]);

  return <div className="main">{carousel}</div>;
};

export default Carousel;
