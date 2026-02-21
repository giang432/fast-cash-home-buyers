"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container-max mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-[134px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Fast Cash Home Buyers"
              width={390}
              height={130}
              className="h-[130px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-gray-700 hover:text-accent-blue transition-colors font-medium">
              How It Works
            </Link>
            <Link href="#benefits" className="text-gray-700 hover:text-accent-blue transition-colors font-medium">
              Benefits
            </Link>
            <Link href="#situations" className="text-gray-700 hover:text-accent-blue transition-colors font-medium">
              We Buy
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-accent-blue transition-colors font-medium">
              FAQ
            </Link>
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:(360)889-1234"
              className="flex items-center gap-2 text-primary-blue font-semibold hover:text-accent-blue transition-colors"
            >
              <Phone className="w-5 h-5" />
              (360) 889-1234
            </a>
            <Link
              href="#contact"
              className="bg-accent-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Cash Offer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link
                href="#how-it-works"
                className="text-gray-700 hover:text-accent-blue transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#benefits"
                className="text-gray-700 hover:text-accent-blue transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link
                href="#situations"
                className="text-gray-700 hover:text-accent-blue transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                We Buy
              </Link>
              <Link
                href="#faq"
                className="text-gray-700 hover:text-accent-blue transition-colors font-medium px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <a
                href="tel:(360)889-1234"
                className="flex items-center gap-2 text-primary-blue font-semibold px-2 py-2"
              >
                <Phone className="w-5 h-5" />
                (360) 889-1234
              </a>
              <Link
                href="#contact"
                className="bg-accent-blue text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Cash Offer
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
