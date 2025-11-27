import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Slider />
      <Hero />
    </div>
  );
}
