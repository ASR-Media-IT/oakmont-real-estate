"use client";
import { Container } from "@/components/atoms";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

const Hero = ({ slice }) => {
  const bgImage = slice.primary.background_image?.url;

  return (
    <div
      style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
      className={`relative parallax-container bg-center bg-cover h-[100vh]`}
    >
      <div
        className={`absolute z-10 top-0 w-full bg-black opacity-60 h-[100vh]`}
      ></div>
      <Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="h-[100vh] !z-20 relative items-center justify-center flex flex-col"
      >
        <h1 className="!text-white">{slice.primary.header}</h1>
        <p className="max-w-xl mb-10 text-md">{slice.primary.subheader}</p>
      </Container>
    </div>
  );
};

export default Hero;
