import { Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <>
      <footer className="pt-12 lg:px-40">
        <Separator className="mb-5" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Handicraft</h3>
              <p>
                Your one-stop destination for beautiful handcrafted products
                made with passion and care.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="hover:text-gray-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/shop"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-gray-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@handicraft.com"
                  className="hover:text-gray-400 transition-colors"
                >
                  info@handicraft.com
                </a>
              </p>
              <p>Phone: +1 (234) 567-890</p>
              <p>Address: 123 Handicraft St, Craftsville, USA</p>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  className="hover:text-gray-400 transition-colors"
                  target="_blank"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="https://instagram.com"
                  className="hover:text-gray-400 transition-colors"
                  target="_blank"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://twitter.com"
                  className="hover:text-gray-400 transition-colors"
                  target="_blank"
                >
                  <Twitter size={28} />
                </a>
                <a
                  href="https://github.com"
                  className="hover:text-gray-400 transition-colors"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 border-t border-gray-700 pt-6">
            <p>&copy; 2025 Handicraft. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
