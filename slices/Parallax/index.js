/**
 * @typedef {import("@prismicio/client").Content.PageHeaderSlice} PageHeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PageHeaderSlice>} PageHeaderProps
 * @param {PageHeaderProps}
 */
"use client";
import { Container } from "@/components/atoms";
import { useParallax } from "@/hooks";
import { PrismicNextLink } from "@prismicio/next";
import { getButtonVariant } from "@/utils";
const PageHeader = ({ slice }) => {
  // initialize the parallax effect
  useParallax(0.5);

  console.log(slice.primary.primary_cta);

  return (
    <div
      style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
      className={`relative parallax-container bg-no-repeat bg-fit h-full min-h-[350px]`}
    >
      <div
      style={{ backgroundColor: slice.primary.overlay_color, opacity: `${slice.primary.overlay_opacity}%` }}
      
        className={`bg-black absolute top-0 w-full opacity-80 h-full min-h-[350px]`}
      ></div>
      <Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={`absolute h-full w-full right-0 py-20 left-0 bottom-0 text-center flex flex-col justify-center items-center`}
      >
        <h2 className="relative mb-5 !text-white text-2xl text-white uppercase lg:text-3xl">
          {slice.primary.title}
        </h2>
        <p className="max-w-2xl mb-0 text-sm text-white lg:text-md">
          {slice.primary.body}
        </p>
        <div className="z-0 flex flex-row items-center justify-center gap-5 lg:justify-start">
          {slice.primary.primary_cta.text && (
            <PrismicNextLink
              className={`${getButtonVariant(slice.primary.primary_cta.variant)}`}
              field={slice.primary.primary_cta}
            ></PrismicNextLink>
          )}
          {slice.primary.secondary_cta.text && (
            <PrismicNextLink
              className="btn-primary-white"
              field={slice.primary.secondary_cta}
            ></PrismicNextLink>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
