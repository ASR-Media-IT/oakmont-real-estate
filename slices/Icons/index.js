/**
 * @typedef {import("@prismicio/client").Content.TextWithBackgroundSlice} TextWithBackgroundSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextWithBackgroundSlice>} TextWithBackgroundProps
 * @type {import("react").FC<TextWithBackgroundProps>}
 */

import { Container } from "@/components/atoms";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import { getButtonVariant } from "@/utils";

const Icons = ({ slice }) => {
  console.log("Icons slice data:", slice);
  return (
    <Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`flex flex-col items-center justify-center py-20 text-center`}
    >
      {slice.primary.title && (
        <h2
          className={`relative mb-20 lg:mb-25 text-2xl text-white uppercase lg:text-3xl`}
        >
          {slice.primary.title}
        </h2>
      )}
      {slice.primary.items && slice.primary.items.length > 0 && (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {slice.primary.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.image && (
                <PrismicNextImage
                  field={item.image}
                  fallbackAlt=""
                  className="w-16 h-16 mb-4"
                />
              )}
              {item.title && (
                <h3 className={`relative mb-5 max-w-[200px]`}>{item.title}</h3>
              )}
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Icons;
