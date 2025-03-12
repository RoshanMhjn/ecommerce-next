"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogs } from "@/config";
import Image from "next/image";
import Slider from "react-slick";

export default function Blog() {
  const settings = {
    dots: true,
    infinite: true,
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

  return (
    <div className="container mx-auto px-4 py-8 lg:px-40">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <div key={index} className="px-2">
            <Card className="flex flex-col justify-evenly py-0 h-full lg:h-[400px] rounded-none">
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="mb-2 text-lg">{blog.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {blog.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="flex justify-between w-full text-sm text-muted-foreground">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
