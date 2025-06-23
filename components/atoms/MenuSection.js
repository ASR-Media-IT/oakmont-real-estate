"use client";
import React, { useState, useEffect } from "react";

export default function MenuSection({ children }) {
  // Track the active section
  const [active, setActive] = useState("");
  // Create menu items from children
  const menuItems = children.map((child) => {
    return {
      title: child.props["data-title"],
      href: `#${child.props.id}`,
    };
  });

  // Set the active section based on the viewport
  useEffect(() => {
    // Get the section elements
    const triggerSections = menuItems.map((item) =>
      document.getElementById(item.href.replace("#", ""))
    );
    // Set the active section based on the scroll position
    window.addEventListener("scroll", function () {
      let focusedSection = null;
      triggerSections.forEach((section) => {
        const sectionPosition = section.getBoundingClientRect();
        // Check if the section is in the viewport
        if (
          sectionPosition.top <= window.innerHeight / 3 &&
          sectionPosition.bottom >= window.innerHeight / 3
        ) {
          focusedSection = section;
        }
      });
      // Set the focused section as active
      if (focusedSection) {
        const id = focusedSection.getAttribute("id");
        setActive(`#${id}`);
      }
    });
  }, [menuItems]);

  return (
    <div className="w-full">
      <div className="sticky top-0 w-full bg-primary-600">
        <div className="max-w-7xl w-full mx-auto hidden md:grid grid-cols-6 text-white text-center">
          {menuItems.map((item) => {
            return <MenuItem key={item.title} title={item.title} href={item.href} active={active} />;
          })}
        </div>
      </div>
      {children}
    </div>
  );
}

function MenuItem({ title, href, active }) {
  return (
    <a
      href={href}
      className={`flex flex-col cursor-pointer items-center justify-center group border-b-4 border-transparent hover:border-primary-300 duration-300 ${
        active === href && "!border-primary-300"
      }`}
    >
      <div
        className={`text-white text-xs opacity-75 uppercase group-hover:opacity-100 duration-300 py-4 ${
          active === href && "!opacity-100"
        }`}
      >
        {title}
      </div>
    </a>
  );
}
