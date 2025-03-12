"use client";

import Footer from "@/components/common/Footer";
import { Navbar } from "@/components/shop/Navbar";
import ShopAddress from "@/components/shop/ShopAddress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const checkout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 flex flex-col lg:px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 pt-5">
          <ShopAddress />
          <div className="flex flex-col gap-4">
            cart is empty
            <div className="mt-8 space-y-4">
              <div className="flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold">$290</span>
              </div>
            </div>
            <div>
              <Button className="mt-4 w-full">Checkout</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default checkout;
