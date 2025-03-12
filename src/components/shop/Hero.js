"use client";

import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-100 px-6 lg:px-40 overflow-hidden">
      {/* Text and Button */}
      <div className="w-full md:w-1/2 text-center md:text-left p-6 md:p-12 lg:p-20 space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Lorem ipsum dolor sit.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
          molestiae.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <Button
            variant="default"
            size="lg"
            className="px-8 py-4 rounded-lg bg-primary text-white hover:bg-primary-dark transition duration-300 shadow-lg"
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 rounded-lg border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition duration-300 shadow-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
      {/* Image */}
      <div className="w-full md:w-1/2 h-full relative">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-gray-100 via-gray-100 to-transparent clip-path-triangle" />
        <Image
          src="https://images.pexels.com/photos/186846/pexels-photo-186846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
}
