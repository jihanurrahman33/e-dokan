import Hero from "@/components/Hero/Hero";
import PopularItems from "@/components/PopularItems/PopularItems";
import Promo from "@/components/Promo/Promo";
import Slider from "@/components/Slider/Slider";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";
export const metadata = {
  title: "Home - E-Dokan",
  description: "Ecommerce Online Shop",
};

export default function Home() {
  return (
    <div>
      <Slider />
      <Hero />
      <PopularItems />
      <Promo />
      <Testimonials />
    </div>
  );
}
