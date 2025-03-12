"use client";

import { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import Slider from "react-slick";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getRandomProducts = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const featuredProducts = useMemo(
    () => getRandomProducts(products, 5),
    [products]
  );

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <section className="container mx-auto px-4 lg:px-40 py-8 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <Slider {...settings}>
        {featuredProducts.map((product) => (
          <div key={product.id} className="px-2">
            <Card className="p-4 flex justify-between rounded-none flex-col relative h-full">
              <div className="relative w-full h-40">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
                <button className="absolute top-2 right-2 p-1 rounded-full">
                  <Heart className="w-6 h-6 text-black" />
                </button>
              </div>
              <h2 className="font-semibold mt-4 line-clamp-1">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">${product.price}</p>
              <div className="flex justify-between items-center flex-col gap-4 lg:gap-3">
                <Button className="w-full">View Details</Button>
                <Button variant="outline" size="sm" className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
}
