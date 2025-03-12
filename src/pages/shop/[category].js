"use client";

import { sortOptions } from "@/config";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ShopFilter from "../../components/shop/ShopFilter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { ArrowUpDownIcon, Heart, ShoppingCart } from "lucide-react";
import { Card } from "../../components/ui/card";
import Image from "next/image";
import ProductDetailPage from "@/pages/shop/ProductDetailPage";
import { toast } from "sonner";
import { Navbar } from "@/components/shop/Navbar";
import Footer from "@/components/common/Footer";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sort, setSort] = useState("price-lowtohigh");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (sectionId, optionId) => {
    const updatedFilters = { ...filters };
    if (!updatedFilters[sectionId]) {
      updatedFilters[sectionId] = [optionId];
    } else {
      const index = updatedFilters[sectionId].indexOf(optionId);
      if (index > -1) {
        updatedFilters[sectionId].splice(index, 1);
        if (updatedFilters[sectionId].length === 0)
          delete updatedFilters[sectionId];
      } else {
        updatedFilters[sectionId].push(optionId);
      }
    }

    setFilters(updatedFilters);
    sessionStorage.setItem("filters", JSON.stringify(updatedFilters));
  };

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

  const handleSort = (value) => {
    setSort(value);
  };

  useEffect(() => {
    let tempProducts = [...products];

    if (Object.keys(filters).length > 0) {
      tempProducts = tempProducts.filter((product) => {
        return Object.entries(filters).every(([key, value]) =>
          value.includes(product[key])
        );
      });
    }

    if (sort === "price-lowtohigh") {
      tempProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price-hightolow") {
      tempProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "title-atoz") {
      tempProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "title-ztoa") {
      tempProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts(tempProducts);
  }, [products, filters, sort]);

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
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);

  return (
    <>
      <Navbar className="mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6 mt-20">
        <ShopFilter filters={filters} handleFilter={handleFilter} />

        <div className="bg-background w-full rounded-lg shadow-sm">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-lg font-extrabold">All Products</h2>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">
                {filteredProducts.length} Products
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <ArrowUpDownIcon className="h-4 w-4" />
                    <span>Sort By</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuRadioGroup
                    value={sort}
                    onValueChange={handleSort}
                  >
                    {sortOptions.map((sortItem) => (
                      <DropdownMenuRadioItem
                        value={sortItem.id}
                        key={sortItem.id}
                      >
                        {sortItem.label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="p-4 flex justify-between rounded-none flex-col relative"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="contain"
                  />
                  <button
                    onClick={() => toggleFavorite(product)}
                    className="absolute top-2 right-2 p-1 rounded-full"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        favorites.includes(product.id)
                          ? "text-red-500"
                          : "text-black"
                      }`}
                    />
                  </button>
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
                </div>
              </Card>
            ))}
          </div>
        </div>

        <ProductDetailPage
          open={isModalOpen}
          setOpen={setIsModalOpen}
          product={selectedProduct}
          addToCart={addToCart}
        />
      </div>
      <Footer />
    </>
  );
};

export default Category;
