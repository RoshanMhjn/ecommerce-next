// pages/shop/ProductsPage.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/shop/Navbar";
import ProductDetailPage from "./ProductDetailPage";
import { toast } from "sonner";

export default function ProductPage() {
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

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
    toast("Item added to cart.");
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast("Item removed from cart.");
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
    toast("Item updated.");
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const toggleFavorite = (product) => {
    setFavorites((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div>
      <Navbar
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        setOpenCartSheet={(isOpen) =>
          console.log("Cart sheet toggled:", isOpen)
        } // Optional
      />
      <div className="container mx-auto p-6 lg:px-40 mt-20">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentProducts.map((product) => (
            <Card
              key={product.id}
              className="p-4 flex justify-between rounded-none flex-col"
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
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}
