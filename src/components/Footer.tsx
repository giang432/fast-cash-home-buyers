import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-max mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo-white.png"
                alt="Fast Cash Home Buyers"
                width={330}
                height={110}
                className="h-[110px] w-auto"
              />
            </div>
            <p className="text-blue-200 mb-6 max-w-md">
              We help homeowners sell their properties quickly for cash, regardless of condition.
              Our mission is to provide fair offers and a stress-free selling experience.
            </p>
            <div className="space-y-3">
              <a href="tel:(360)889-1234" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                (360) 889-1234
              </a>
              <a href="mailto:info@fastcashhomebuyers.com" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                info@fastcashhomebuyers.com
              </a>
              <div className="flex items-center gap-3 text-blue-200">
                <MapPin className="w-5 h-5" />
                Serving Homeowners Nationwide
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="#how-it-works" className="block text-blue-200 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#benefits" className="block text-blue-200 hover:text-white transition-colors">
                Why Choose Us
              </Link>
              <Link href="#situations" className="block text-blue-200 hover:text-white transition-colors">
                Situations We Help
              </Link>
              <Link href="#faq" className="block text-blue-200 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="#contact" className="block text-blue-200 hover:text-white transition-colors">
                Get Cash Offer
              </Link>
            </nav>
          </div>

          {/* We Buy */}
          <div>
            <h4 className="text-white font-semibold mb-4">We Buy</h4>
            <ul className="space-y-3 text-blue-200">
              <li>Foreclosures</li>
              <li>Inherited Properties</li>
              <li>Vacant Homes</li>
              <li>Rental Properties</li>
              <li>Distressed Homes</li>
              <li>Any Condition</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-300 text-sm">
              &copy; {currentYear} Fast Cash Home Buyers. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-blue-300 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-blue-300 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
