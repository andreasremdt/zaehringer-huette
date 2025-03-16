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
        return <Hero {...block} key={block.id} />;
      case "contact-form":
        return <Contact {...block} key={block.id} />;
      case "about":
        return <About {...block} key={block.id} />;
      case "amenities":
        return <Amenities {...block} key={block.id} />;
      case "book-now":
        return <BookNow {...block} key={block.id} />;
      case "environment":
        return <Environment {...block} key={block.id} />;
      case "gallery":
        return <Gallery {...block} key={block.id} />;
      case "testimonial":
        return <Testimonials {...block} key={block.id} />;
      case "rich-text":
        return <Prose {...block} key={block.id} />;
      case "image-hero":
        return <ImageHero {...block} key={block.id} />;
      case "calendar":
        return <BookingForm {...block} key={block.id} />;
      default:
        return null;
    }
  });
}
