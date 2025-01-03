import About from "@/components/about";
import Amenities from "@/components/amenities";
import BookNow from "@/components/book-now";
import BookingForm from "@/components/booking-form";
import Contact from "@/components/contact";
import Environment from "@/components/environment";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import ImageHero from "@/components/image-hero";
import Prose from "@/components/prose";
import Testimonials from "@/components/testimonials";
import type { Page } from "@/payload-types";

type Props = {
  blocks: Page["layout"];
};

export default function BlockRenderer({ blocks }: Props) {
  if (!blocks) {
    return null;
  }

  return blocks.map((block) => {
    switch (block.blockType) {
      case "hero":
        return <Hero {...block} />;
      case "contact-form":
        return <Contact {...block} />;
      case "about":
        return <About {...block} />;
      case "amenities":
        return <Amenities {...block} />;
      case "book-now":
        return <BookNow {...block} />;
      case "environment":
        return <Environment {...block} />;
      case "gallery":
        return <Gallery {...block} />;
      case "testimonial":
        return <Testimonials {...block} />;
      case "rich-text":
        return <Prose {...block} />;
      case "image-hero":
        return <ImageHero {...block} />;
      case "calendar":
        return <BookingForm {...block} />;
      default:
        return null;
    }
  });
}
