import React, { ReactNode } from "react";

const generateCarouselSkeleton = (
  imgSrc1: ReactNode | null,
  imgSrc2: ReactNode | null,
  imgSrc3: ReactNode | null
) => {
  return (
    <>
      <section className="main_section-left">
        <div className="main_image-preview main_image-preview--left">
          {imgSrc1 ?? ""}
        </div>
      </section>
      <section className="main_section-middle">{imgSrc2 ?? ""}</section>
      <section className="main_section-right">
        <div className="main_image-preview main_image-preview--right">
          {imgSrc3 ?? ""}
        </div>
      </section>
    </>
  );
};

export default generateCarouselSkeleton;
