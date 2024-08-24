import Hero from "@/components/hero";
import About from "@/components/about";
import Amenities from "@/components/amenities";
import Environment from "@/components/environment";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import BookNow from "@/components/book-now";
import Contact from "@/components/contact";

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
