import About from "@/components/about";
import Amenities from "@/components/amenities";
import BookNow from "@/components/book-now";
import Contact from "@/components/contact";
import Environment from "@/components/environment";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Amenities />
      <Environment />
      <Gallery />
      <Testimonials />
      <BookNow />
      <Contact />
    </>
  );
}
