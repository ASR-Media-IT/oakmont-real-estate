"use client";
import { Container } from "@/components/atoms";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

const Hero = ({ slice }) => {
  const bgImage = slice.primary.background_image?.url;

  return (
    <div
      style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
      className={`relative parallax-container bg-center bg-cover h-[calc(100vh-94px)]`}
    >
      <div
        className={`absolute z-10 top-0 w-full bg-black opacity-60 h-[calc(100vh-94px)]`}
      ></div>
      <Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="h-[calc(100vh-94px)] !z-20 relative items-center justify-center flex flex-col"
      >
        <h6 className="max-w-xl text-md md:text-xl mb-5 text-white">{slice.primary.subheader}</h6>
        <h1 className="!text-white !mb-10 md:!mb-16">{slice.primary.header}</h1>
        <div className="z-0 flex flex-row items-center justify-center gap-5 lg:justify-start">
          <PrismicNextLink className="btn-primary" field={slice.primary.primary_cta}>
          </PrismicNextLink>
          <PrismicNextLink className="btn-primary-white" field={slice.primary.secondary_cta}>
          </PrismicNextLink>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
