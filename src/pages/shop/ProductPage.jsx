"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProductDetailPage from "./ProductDetailPage";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleFavorite = (product) => {
    if (favorites.includes(product.id)) {
      setFavorites(favorites.filter((id) => id !== product.id));
    } else {
      setFavorites([...favorites, product.id]);
    }
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="container mx-auto p-6 lg:px-40">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentProducts.map((product) => (
          <Card
            key={product.id}
            className="p-4 flex justify-between rounded-none"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-gray-600 text-sm">${product.price}</p>

            {/* Buttons */}
            <div className="flex justify-between items-center flex-col gap-4 lg:gap-3">
              <Button
                className="w-full"
                onClick={() => handleOpenModal(product)}
              >
                View Details
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
              </Button>

              <button onClick={() => toggleFavorite(product)}>
                <Heart
                  className={`w-6 h-6 ${
                    favorites.includes(product.id)
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination*/}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      )}

      <ProductDetailPage
        open={isModalOpen}
        setOpen={setIsModalOpen}
        product={selectedProduct}
      />
    </div>
  );
}
