"use client";

import { useState, useEffect } from "react";
import ShopFilter from "../../components/shop/ShopFilter";
import { sortOptions } from "@/config";
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
import { Skeleton } from "../../components/ui/skeleton";
import Image from "next/image";
import { Navbar } from "@/components/shop/Navbar";
import Footer from "@/components/common/Footer";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sort, setSort] = useState("price-lowtohigh");
  const [isLoading, setIsLoading] = useState(true);

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

    tempProducts = tempProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

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
  }, [products, filters, sort, priceRange]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar className="mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6 mt-20">
        <ShopFilter
          filters={filters}
          handleFilter={handleFilter}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <div className="bg-background w-full rounded-lg shadow-sm">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-lg font-extrabold">All Products</h2>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">
                {isLoading
                  ? "Loading..."
                  : `${filteredProducts.length} Products`}
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
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <Card key={index} className="p-4 rounded-none">
                    <Skeleton className="w-full h-40 rounded-md" />
                    <Skeleton className="h-4 w-3/4 mt-4" />
                    <Skeleton className="h-4 w-1/2 mt-2" />
                    <Skeleton className="h-8 w-full mt-4" />
                  </Card>
                ))
              : filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="p-4 flex justify-between flex-col relative"
                  >
                    <div className="relative w-full h-40">
                      <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <h2 className="font-semibold">{product.title}</h2>
                    <p className="text-gray-600 text-sm">${product.price}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                    </Button>
                  </Card>
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
