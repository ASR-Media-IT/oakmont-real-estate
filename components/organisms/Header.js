"use client";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function SiteHeader({ header }) {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log(header.data.menu_item);
  return (
    <header className="w-full duration-300 sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between w-full gap-10 px-4 py-6 mx-auto lg:px-8 max-w-7xl">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center justify-center w-32 h-10"
        >
          <PrismicNextImage
            className="object-contain w-24"
            field={header.data.logo}
          />
        </Link>
        {/* Links */}
        <ol className="justify-center hidden gap-5 item-center lg:flex lg:flex-row">
          {header.data.menu_item.map((item, index) => {
            if (item.title) {
              return (
                <li className="flex items-center justify-center" key={index}>
                  <DropDownMenu menu={item} />
                </li>
              );
            } else {
              return (
                <li className="flex items-center justify-center" key={index}>
                  <PrismicNextLink
                    className="!text-2xl font-oswald !text-black !font-light group btn-link"
                    field={item.url[0]}
                  ></PrismicNextLink>
                </li>
              );
            }
          })}
        </ol>
        {/* CTA / Button */}
        {header.data.cta_item.map((item, index) => {
          return (
            <div
              className="flex-row items-center justify-center !hidden btn-primary-outline lg:!flex"
              key={index}
            >
              <PrismicNextLink field={item.url}>{item.title}</PrismicNextLink>
            </div>
          );
        })}
        {/* Mobile Menu Button: Only visible on Mobile */}
        <button
          className={`lg:hidden`}
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon
            className={`h-6 w-6 duration-500 ${!mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
            aria-hidden={!mobileMenuOpen}
          />
        </button>
        {/* Mobile Menu: Only visible on Mobile when open */}
        <div
          className={`fixed flex-col shadow-md inset-y-0 right-0 z-10 w-1/2 overflow-y-auto bg-primary-600 px-4 py-6 pt-0 ring-1 ring-gray-900/10 duration-500 ${mobileMenuOpen ? "flex translate-x-0 lg:hidden" : "translate-x-full"}`}
        >
          <div className="flex flex-row justify-between w-full py-10">
            <button
              className={`lg:hidden`}
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className={`h-6 w-6 duration-500 text-white ${mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                aria-hidden={mobileMenuOpen}
              />
            </button>
          </div>
          <ol className="flex flex-col w-full gap-8 items-start">
            {header.data.menu_item.map((item, index) => {
              if (item.title) {
                return (
                  <li
                    className="flex items-center justify-center"
                    key={item.index}
                  >
                    <DropDownMenu menu={item} />
                  </li>
                );
              } else {
                return (
                  <li
                    className="flex items-center justify-center"
                    key={item.index}
                  >
                    <PrismicNextLink
                      className="!text-2xl font-oswald !text-white !font-light group btn-link"
                      field={item.url[0]}
                    ></PrismicNextLink>
                  </li>
                );
              }
            })}
            {header.data.cta_item.map((item, index) => {
              return (
                <li
                  className="!text-2xl font-oswald !text-white !font-light group btn-link"
                  key={index}
                >
                  <PrismicNextLink field={item.url}>
                    {item.title}
                  </PrismicNextLink>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </header>
  );
}

function DropDownMenu({ menu }) {
  return (
    <div className="">
      <Menu as="div" className="relative block text-left">
        <div>
          <Menu.Button className="flex flex-row !text-2xl font-oswald !text-white lg:!text-black !font-light btn-link-menu">
            {menu.title}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 mt-1"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="mt-2 z-50 origin-top-right bg-white divide-y divide-gray-100 shadow-lg lg:absolute lg:right-0 lg:w-56 ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1">
              {menu.url.map((item, index) => {
                return (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <PrismicNextLink
                        field={item}
                        className={`${
                          active ? "bg-gray-100" : "text-grayTrue-700"
                        } group flex w-full items-center text-left rounded-md px-2 py-2 text-sm`}
                      ></PrismicNextLink>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
