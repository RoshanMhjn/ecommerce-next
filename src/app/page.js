import Category from "@/pages/shop/[category]";
import FAQSection from "@/components/shop/FAQsection";
import Hero from "@/components/shop/Hero";
import { Navbar } from "@/components/shop/Navbar";
import { Toaster } from "@/components/ui/sonner";
import AboutUs from "@/pages/shop/AboutUs";
import ProductsPage from "@/pages/shop/ProductPage";
import Footer from "@/components/common/Footer";
import Blog from "@/pages/shop/blogs";
import FeaturedProducts from "@/pages/shop/featuredProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <ProductsPage />
      <FAQSection />
      <Blog />
      <Footer />
      <Toaster />
    </div>
  );
}
