// components/shop/CartContents.js
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartContents({
  cartItem,
  removeFromCart,
  updateQuantity,
}) {
  const subtotal = cartItem.price * cartItem.quantity;

  return (
    <div className="flex flex-col space-y-2">
      {/* Image and Title */}
      <div className="flex items-center">
        <div className="relative w-20 h-20 flex-shrink-0 mr-3">
          <Image
            src={cartItem.image}
            alt={cartItem.title}
            layout="fill"
            objectFit="cover"
            className="border"
          />
        </div>
        <h3 className="text-sm font-medium uppercase">{cartItem.title}</h3>
      </div>

      {/* Second Row*/}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 rounded-full border-gray-300"
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
            disabled={cartItem.quantity <= 1}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="text-sm font-medium w-6 text-center">
            {cartItem.quantity}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 rounded-full border-gray-300"
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium w-16 text-right">
            ${subtotal.toFixed(2)}
          </p>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-red-500"
            onClick={() => removeFromCart(cartItem.id)}
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
