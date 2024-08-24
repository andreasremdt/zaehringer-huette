import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Amenities from "@/app/components/amenities";
import Environment from "@/app/components/environment";
import Gallery from "@/app/components/gallery";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Amenities />
      <Environment />
      <Gallery />
    </>
  );
}
