import FAQSection from "@/components/shop/FAQsection";
import Hero from "@/components/shop/Hero";

import { Toaster } from "@/components/ui/sonner";
import AboutUs from "@/pages/shop/AboutUs";
import ProductsPage from "@/pages/shop/ProductPage";

import Blog from "@/pages/shop/blogs";
import FeaturedProducts from "@/pages/shop/featuredProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <ProductsPage />
      <FAQSection />
      <Blog />
      <Toaster />
    </div>
  );
}
