"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  SearchCheckIcon,
  Search,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Card } from "../ui/card";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-white p-4 px-6 lg:px-40 fixed w-full top-0 z-50 border-b-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          HANDICRAFT
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/store" className="hover:text-gray-600">
            Store
          </Link>
          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-gray-600">
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="mt-2" forceMount>
                <Card className="p-4 w-48">
                  <DropdownMenuItem>
                    <Link href="/categories/bags">Bags</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/categories/accessories">Accessories</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/categories/new">New Arrivals</Link>
                  </DropdownMenuItem>
                </Card>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Link href="/blogs" className="hover:text-gray-600">
            Blogs
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search..."
            className="w-30 lg:w-60"
          ></Input>

          <Search />
        </div>

        {/* Icons  */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
          </Link>

          {/* Profile Dropdown */}
          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <User className="w-6 h-6 cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="mt-2" forceMount>
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/auth/login">Login</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Card className="h-full p-6 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-6">
            {/* Mobile Search Bar */}
            <div className="flex items-center space-x-2">
              <Input type="text" placeholder="Search..." className="w-full" />
              <Button variant="outline">
                <Search />
              </Button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-lg hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/store"
                className="text-lg hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Store
              </Link>

              <Link
                href="/categories/new"
                className="text-lg hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <Link
                href="/blogs"
                className="text-lg hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </nav>
  );
};
