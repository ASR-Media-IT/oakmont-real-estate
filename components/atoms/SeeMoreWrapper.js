"use client";
import React, { useState, useRef, useEffect } from "react";

export default function SeeMoreWrapper({ children, maxHeight }) {
  // See more state
  const [seeMore, setSeeMore] = useState(false);
  // Children height
  const [height, setHeight] = useState(0);
  // Container ref
  const container = useRef(null);

  useEffect(() => {
    // Set height of children on mount
    setHeight(container.current.children[0].clientHeight);
    // Set height of children on resize
    window.addEventListener("resize", () => {
      setHeight(container.current.children[0].clientHeight);
    });
  }, []);

  return (
    <div className="relative w-full">
      {/* Container */}
      <div
        ref={container}
        style={
          seeMore
            ? { height: `${height}px` }
            : height >= maxHeight
            ? { height: `${maxHeight}px` }
            : {}
        }
        className={`overflow-y-hidden ease-in-out duration-500 transition-all`}
      >
        {children}
      </div>
      {/* See More Button */}
      {height >= maxHeight && (
        <button
          onClick={() => {
            setSeeMore(!seeMore);
          }}
          className="absolute bottom-0 translate-y-1/2 right-1/2 rounded-full translate-x-1/2 bg-primary-600 block text-white shadow-sm w-fit hover:bg-primary-500 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-300 focus-visible:outline-primary-600"
        >
          <div className={`h-10 w-10 duration-500 ${seeMore ? "rotate-180" : "rotate-0"}`}>
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chevron-down">
              <g data-name="Layer 2">
                <path
                  d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"
                  data-name="chevron-down"
                ></path>
              </g>
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
