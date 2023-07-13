import React, { ReactNode, useEffect, useRef, useState } from "react";
import generateCarouselSkeleton from "../utils/generateCarouselSkeleton";

const Carousel = ({
  imageNumber,
  imagesCarousel,
  direction,
}: {
  imageNumber: number;
  imagesCarousel: ReactNode[];
  direction: -1 | 0 | 1;
}) => {
  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const imageRef3 = useRef<HTMLDivElement>(null);
  const [carousel, setCarousel] = useState(
    generateCarouselSkeleton(null, null, null, imageRef1, imageRef2, imageRef3)
  );

  useEffect(() => {
    switch (imagesCarousel.length) {
      case 0:
        setCarousel(
          <div className="main_section-noimages">
            <p>No images</p>
          </div>
        );
        break;
      case 1:
        setCarousel(
          generateCarouselSkeleton(
            null,
            imagesCarousel[imageNumber],
            null,
            imageRef1,
            imageRef2,
            imageRef3
          )
        );
        break;
      case 2:
        if (imageNumber === imagesCarousel.length - 1) {
          setCarousel(
            generateCarouselSkeleton(
              imagesCarousel[imageNumber],
              imagesCarousel[0],
              null,
              imageRef1,
              imageRef2,
              imageRef3
            )
          );
        } else {
          setCarousel(
            generateCarouselSkeleton(
              imagesCarousel[imageNumber],
              imagesCarousel[imageNumber + 1],
              null,
              imageRef1,
              imageRef2,
              imageRef3
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
              imagesCarousel[1],
              imageRef1,
              imageRef2,
              imageRef3
            )
          );
        } else if (imageNumber === imagesCarousel.length - 2) {
          setCarousel(
            generateCarouselSkeleton(
              imagesCarousel[imageNumber],
              imagesCarousel[imageNumber + 1],
              imagesCarousel[0],
              imageRef1,
              imageRef2,
              imageRef3
            )
          );
        } else {
          setCarousel(
            generateCarouselSkeleton(
              imagesCarousel[imageNumber],
              imagesCarousel[imageNumber + 1],
              imagesCarousel[imageNumber + 2],
              imageRef1,
              imageRef2,
              imageRef3
            )
          );
        }
        break;
    }

    let timeout: ReturnType<typeof setTimeout>;

    if (direction === -1) {
      if (
        imageRef1 &&
        imageRef1.current &&
        imageRef2 &&
        imageRef2.current &&
        imageRef3 &&
        imageRef3.current
      ) {
        imageRef1.current.classList.add("fadeOutRight");
        imageRef2.current.classList.add("fadeOutRight");
        imageRef3.current.classList.add("fadeOutRight");
        imageRef1.current.classList.remove("fadeInRight", "fadeInLeft");
        imageRef2.current.classList.remove("fadeInRight", "fadeInLeft");
        imageRef3.current.classList.remove("fadeInRight", "fadeInLeft");
      }

      timeout = setTimeout(() => {
        if (
          imageRef1 &&
          imageRef1.current &&
          imageRef2 &&
          imageRef2.current &&
          imageRef3 &&
          imageRef3.current
        ) {
          imageRef1.current.classList.remove("fadeOutRight");
          imageRef2.current.classList.remove("fadeOutRight");
          imageRef3.current.classList.remove("fadeOutRight");
          imageRef1.current.classList.add("fadeInRight");
          imageRef2.current.classList.add("fadeInRight");
          imageRef3.current.classList.add("fadeInRight");
        }
      }, 500);
    } else if (direction === 1) {
      if (
        imageRef1 &&
        imageRef1.current &&
        imageRef2 &&
        imageRef2.current &&
        imageRef3 &&
        imageRef3.current
      ) {
        imageRef1.current.classList.add("fadeOutLeft");
        imageRef2.current.classList.add("fadeOutLeft");
        imageRef3.current.classList.add("fadeOutLeft");
        imageRef1.current.classList.remove("fadeInRight", "fadeInLeft");
        imageRef2.current.classList.remove("fadeInRight", "fadeInLeft");
        imageRef3.current.classList.remove("fadeInRight", "fadeInLeft");
      }

      timeout = setTimeout(() => {
        if (
          imageRef1 &&
          imageRef1.current &&
          imageRef2 &&
          imageRef2.current &&
          imageRef3 &&
          imageRef3.current
        ) {
          imageRef1.current.classList.remove("fadeOutLeft");
          imageRef2.current.classList.remove("fadeOutLeft");
          imageRef3.current.classList.remove("fadeOutLeft");
          imageRef1.current.classList.add("fadeInLeft");
          imageRef2.current.classList.add("fadeInLeft");
          imageRef3.current.classList.add("fadeInLeft");
        }
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [imageNumber, imagesCarousel, direction]);

  return <div className="main">{carousel}</div>;
};

export default Carousel;
