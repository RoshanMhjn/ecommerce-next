import Hero from "@/components/shop/Hero";
import { Navbar } from "@/components/shop/Navbar";
import AboutUs from "@/pages/shop/AboutUs";
import ProductsPage from "@/pages/shop/ProductPage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <ProductsPage />
    </div>
  );
}
