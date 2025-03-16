"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Fetch the product details using the ID
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setSelectedImage(data?.image);
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const additionalImages = product.image
    ? [product.image, product.image, product.image, product.image]
    : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-[90vw] mx-auto">
      {/* Product Images */}
      <div>
        <div className="relative overflow-hidden rounded-lg mb-4">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt={product.title}
              width={600}
              height={600}
              className="aspect-square object-cover h-90"
            />
          )}
        </div>

        <div className="flex gap-4 justify-center w-full">
          {additionalImages.map((img, index) => (
            <div
              key={index}
              className={`cursor-pointer border overflow-hidden flex-1 max-w-[calc(25%-12px)] ${
                selectedImage === img
                  ? "border-1 border-primary scale-110"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={product.title}
                width={100}
                height={100}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-3xl font-bold text-primary mt-4">${product.price}</p>

        <div className="mt-5">
          <Button className="w-full" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>

        <Separator className="my-6" />

        <div className="h-full flex-row justify-between">
          <h2 className="text-xl font-bold mb-4">Reviews</h2>
          <div className="flex gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h3 className="font-bold">Roshan Maharjan</h3>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">
                This is an awesome product. Love it!
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <Input placeholder="Write a review" />
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
