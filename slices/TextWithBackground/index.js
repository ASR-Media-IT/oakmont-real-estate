/**
 * @typedef {import("@prismicio/client").Content.TextWithBackgroundSlice} TextWithBackgroundSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextWithBackgroundSlice>} TextWithBackgroundProps
 * @type {import("react").FC<TextWithBackgroundProps>}
 */

import { Container } from "@/components/atoms";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { getButtonVariant } from "@/utils";

const TextWithBackground = ({ slice }) => {
  return (
    <div style={{ backgroundColor: slice.primary.background_color }}>
      <Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={`flex flex-col items-center justify-center py-20 text-center`}
      >
        <h6 className="max-w-xl text-md md:text-xl mb-5 text-white">
          {slice.primary.subheader}
        </h6>
        <h2 className="relative mb-5 !text-white text-2xl text-white uppercase lg:text-3xl">
          {slice.primary.header}
        </h2>
        <div className={`${slice.primary.text_theme === "Light" && 'prismic-rich-text-light'} max-w-3xl`}>
        <PrismicRichText field={slice.primary.body} />
        </div>
        <div className="z-0 flex flex-row items-center justify-center gap-5 lg:justify-start">
          {slice.primary.primary_cta.text && (
            <PrismicNextLink
              className={`${getButtonVariant(slice.primary.primary_cta.variant)}`}
              field={slice.primary.primary_cta}
            ></PrismicNextLink>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TextWithBackground;
