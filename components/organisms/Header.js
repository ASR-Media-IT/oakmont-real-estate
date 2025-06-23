"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default function SiteHeader({ header }) {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full duration-300">
      <nav className="flex items-center justify-between w-full gap-10 px-4 py-6 mx-auto lg:px-8 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="relative flex items-center justify-center w-32 h-10">
          <PrismicNextImage className="object-contain" field={header.data.logo} />
        </Link>
        {/* Links */}
        <ol className="justify-center hidden gap-8 item-center lg:flex lg:flex-row">
          {header.data.menu_item.map((item) => {
            return (
              <li className="flex items-center justify-center" key={item.title}>
                <PrismicNextLink className="text-sm font-semibold group btn-link" field={item.url}>
                  {item.title}
                </PrismicNextLink>
              </li>
            );
          })}
          {/* CTA / Button */}
          {header.data.cta_item.map((item) => {
            return (
              <li className="flex-row items-center justify-center hidden btn-primary lg:flex" key={item.title}>
                <PrismicNextLink field={item.url}>
                  {item.title}
                </PrismicNextLink>
              </li>
            )
          })}
        </ol>
        {/* Mobile Menu Button: Only visible on Mobile */}
        <button
          className={`lg:hidden`}
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon className={`h-6 w-6 duration-500 ${!mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} aria-hidden={!mobileMenuOpen} />
        </button>
        {/* Mobile Menu: Only visible on Mobile when open */}
        <div className={`fixed flex-col shadow-md inset-y-0 right-0 z-10 w-1/2 overflow-y-auto bg-white px-4 py-6 pt-0 ring-1 ring-gray-900/10 duration-500 ${mobileMenuOpen ? "flex translate-x-0 lg:hidden" : "translate-x-full"}`}>
          <div className="flex flex-row justify-between w-full py-10">
            <button
              className={`lg:hidden`}
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className={`h-6 w-6 duration-500 ${mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} aria-hidden={mobileMenuOpen} />
            </button>
          </div>
          <ol className="flex flex-col w-full gap-8">
          {header.data.menu_item.map((item) => {
            return (
              <li className="flex items-center justify-start" key={item.title}>
                <PrismicNextLink className="text-sm font-semibold group btn-link" field={item.url}>
                  {item.title}
                </PrismicNextLink>
              </li>
            );
          })}
          {header.data.cta_item.map((item) => {
            return (
              <li className="flex-row items-center justify-center btn-primary lg:flex" key={item.title}>
                <PrismicNextLink field={item.url}>
                  {item.title}
                </PrismicNextLink>
              </li>
            )
          })}
          </ol>
        </div>
      </nav>
    </header>
  );
}