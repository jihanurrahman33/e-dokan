import Brands from "@/components/Brands/Brands";
import Hero from "@/components/Hero/Hero";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import PopularItems from "@/components/PopularItems/PopularItems";
import Promo from "@/components/Promo/Promo";
import Slider from "@/components/Slider/Slider";
import Testimonials from "@/components/Testimonials/Testimonials";
export const metadata = {
  title: "Home - E-Dokan",
  description: "Ecommerce Online Shop",
};

export default function Home() {
  return (
    <div>
      <Slider />
      <Hero />
      <NewArrivals />
      <PopularItems />
      <Promo />
      <Brands />
      <Testimonials />
    </div>
  );
}
