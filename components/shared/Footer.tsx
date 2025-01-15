import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Puerto Peñasco
            </h3>
            <p className="text-gray-400">
              Luxury condos in the beautiful Bella Sirena & Princesa Resorts
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Properties</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/properties/vista-del-mar-1"
                  className="transition-colors hover:text-teal-400"
                >
                  Vista del Mar I
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/vista-del-mar-2"
                  className="transition-colors hover:text-teal-400"
                >
                  Vista del Mar II
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/princesa"
                  className="transition-colors hover:text-teal-400"
                >
                  Princesa
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@puertopenasco.com"
                  className="transition-colors hover:text-teal-400"
                >
                  Email: info@puertopenasco.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="transition-colors hover:text-teal-400"
                >
                  Phone: +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-teal-400"
                aria-label="Facebook"
              >
                <Facebook className="size-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-teal-400"
                aria-label="Instagram"
              >
                <Instagram className="size-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-teal-400"
                aria-label="Twitter"
              >
                <Twitter className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Puerto Peñasco Luxury Condos. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
