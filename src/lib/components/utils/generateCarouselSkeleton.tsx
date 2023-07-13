import React, { ReactNode, RefObject } from "react";

const generateCarouselSkeleton = (
  imgSrc1: ReactNode | null,
  imgSrc2: ReactNode | null,
  imgSrc3: ReactNode | null,
  imageRef1: RefObject<HTMLDivElement>,
  imageRef2: RefObject<HTMLDivElement>,
  imageRef3: RefObject<HTMLDivElement>
) => {
  return (
    <>
      <section className="main_section-left">
        <div className="main_image-preview main_image-preview--left">
          <div className="main_section-container" ref={imageRef1}>
            {imgSrc1 ?? ""}
          </div>
        </div>
      </section>
      <section className="main_section-middle">
        <div className="main_section-container" ref={imageRef2}>
          {imgSrc2 ?? ""}
        </div>
      </section>
      <section className="main_section-right">
        <div className="main_image-preview main_image-preview--right">
          <div className="main_section-container" ref={imageRef3}>
            {imgSrc3 ?? ""}
          </div>
        </div>
      </section>
    </>
  );
};

export default generateCarouselSkeleton;
