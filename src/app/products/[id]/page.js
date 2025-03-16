"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deliveryOptions } from "@/config";
import FeaturedProducts from "@/pages/shop/featuredProducts";

const Information = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className="mt-4">
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum,
        eveniet tempora dolorum nesciunt deleniti unde iste amet illum dolor
        minus possimus adipisci sapiente impedit doloremque voluptatum voluptate
        numquam quibusdam quos reiciendis placeat aperiam! Sit amet suscipit quo
        fugiat quos nemo harum velit vitae quisquam voluptates est placeat,
        dolorem tempore!
      </p>

      <Separator className="my-3" />

      <div>
        <p className="font-semibold text-xl">Features</p>

        <ul className="list-disc pl-8 text-muted-foreground">
          {[
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde!",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde!",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde!",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde!",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde!",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde!",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde!",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde!",
          ]
            .slice(0, isExpanded ? 8 : 2)
            .map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
        </ul>

        <Button variant="outline" className="mt-4" onClick={toggleExpanded}>
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
};

const Delivery = () => (
  <div className="mt-4">
    <p>
      Free standard shipping on orders{" "}
      <strong>over ${deliveryOptions.freeShippingThreshold}</strong> before tax,
      plus free returns.
    </p>
    <div className="mt-4">
      <Table>
        <TableCaption>{deliveryOptions.returnPolicy.caption}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>TYPE</TableHead>
            <TableHead>HOW LONG</TableHead>
            <TableHead>HOW MUCH</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deliveryOptions.returnPolicy.options.map((option, index) => (
            <TableRow key={index}>
              <TableCell>{option.type}</TableCell>
              <TableCell>{option.duration}</TableCell>
              <TableCell>{option.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

const Reviews = () => (
  <div className="mt-4">
    <div className="flex gap-5 ">
      <Avatar className="w-10 h-10 border">
        <AvatarFallback>RM</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold">Roshan Maharjan</h3>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 fill-primary" />
          ))}
        </div>
        <p>This is an awesome product. Love it!</p>
      </div>
    </div>

    <div className="mt-6 flex gap-2">
      <Input placeholder="Write a review" />
      <Button>Submit</Button>
    </div>
  </div>
);

const ProductDetailPage = () => {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setSelectedImage(data.image);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto lg:px-40 mt-20">
        <Skeleton className="h-[200px] w-full rounded-lg mb-8" />
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-10 w-1/4 mb-4" />
        <Skeleton className="h-12 w-full mt-5" />
        <Skeleton className="h-8 w-1/3 mb-4" />
        <Skeleton className="h-16 w-full mb-4" />
        <Skeleton className="h-10 w-24" />
      </div>
    );
  }

  const additionalImages = product.image
    ? [product.image, product.image, product.image, product.image]
    : [];

  return (
    <>
      <div className="container mx-auto p-6 lg:px-40 mt-10 lg:mt-20 min-h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-[90vw] mx-auto">
          {/* Product Images */}
          <div>
            <div className="relative mb-4 flex items-center justify-center">
              <Image
                src={selectedImage}
                alt={product.title}
                width={350}
                height={400}
                className="aspect-square lg:h-90 p-10"
              />
            </div>
            <div className="flex gap-4 lg:gap-7 justify-center w-full">
              {additionalImages.map((img, index) => (
                <div
                  key={index}
                  className={`cursor-pointer overflow-hidden flex-1 max-w-[calc(25%-12px)] ${
                    selectedImage === img
                      ? "border-2 border-primary scale-110 transform transition duration-300"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-full h-20 lg:h-30 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
            <div className="flex items-center justify-between mt-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                ${product.price}
              </div>
              <div className="flex items-center gap-2 text-lg">
                <StarIcon />
                {product.rating.rate} ({product.rating.count})
              </div>
            </div>

            <Button className="w-full mt-5">Add to Cart</Button>

            <Separator className="my-6" />

            <h2 className="text-xl font-bold mb-4">About Product</h2>

            <Tabs defaultValue="information" className="w-full">
              <TabsList>
                <TabsTrigger value="information">Information</TabsTrigger>
                <TabsTrigger value="delivery">Delivery</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="information">
                <Information />
              </TabsContent>
              <TabsContent value="delivery">
                <Delivery />
              </TabsContent>
              <TabsContent value="reviews">
                <Reviews />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <FeaturedProducts />
    </>
  );
};

export default ProductDetailPage;
