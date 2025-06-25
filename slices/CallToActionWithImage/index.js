"use client";
import { Container } from "@/components/atoms";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

const CallToActionAndImage = ({ slice }) => {
  console.log(slice.primary)
  return (
    <div className={`${slice.primary.gray_background ? "bg-[#f4f4f4]" : ""}`}>
      <Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={`relative flex flex-col-reverse items-center justify-between gap-16 py-16 lg:py-20 ${slice.variation === "flipped" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
        {/* Content */}
        <div className={`flex flex-col w-full lg:max-w-1/2`}>
          <h2 className="mb-5">{slice.primary.title}</h2>
          <p className="max-w-xl mb-10 text-md">{slice.primary.body}</p>
          {slice.items.length > 0 && (
            <div className="flex flex-row items-center justify-start gap-5">
              {slice.items.map((item, index) => {
                if (index <= 1) {
                  return (
                    <PrismicNextLink
                      key={index}
                      field={item.cta_url}
                      className={index === 0 ? "btn-primary" : "btn-link"}
                    >
                      {item.cta_title}
                    </PrismicNextLink>
                  );
                }
              })}
            </div>
          )}
        </div>
        {/* Image */}
        <div className="w-full lg:h-[350px] lg:max-w-1/2">
          <PrismicNextImage
            className="object-cover w-full h-full"
            field={slice.primary.image}
          />
        </div>
      </Container>
    </div>
  );
};

export default CallToActionAndImage;
