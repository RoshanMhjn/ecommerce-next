"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import CartContents from "./CartContents";

export default function Cart({
  cartItems,
  removeFromCart,
  updateQuantity,
  setOpenCartSheet,
}) {
  const [open, setOpen] = useState(false);

  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      : 0;

  return (
    <Sheet
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (setOpenCartSheet) setOpenCartSheet(isOpen);
      }}
    >
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartItems.length > 0 && (
            <Badge className="absolute -top-2 -right-2" variant="destructive">
              {cartItems.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="sm:max-w-md flex flex-col">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-2xl font-bold">Cart</SheetTitle>
        </SheetHeader>

        <div className="space-y-8 flex-1 overflow-y-auto overflow-x-hidden px-6 custom-scrollbar">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartContents
                key={item.id}
                cartItem={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-16 w-16 text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
            </div>
          )}
        </div>

        {/*Checkout */}
        {cartItems.length > 0 && (
          <div className="space-y-4 px-6 pb-4">
            <div className="flex justify-between">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-lg">
                ${totalCartAmount.toFixed(2)}
              </span>
            </div>
            <Button
              onClick={() => {
                setOpen(false);
                if (setOpenCartSheet) setOpenCartSheet(false);
              }}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white uppercase"
            >
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
