"use client";

import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";

const Cards = () => {
  const targetRef = useRef();

  const [targetElement, setElement] = useState();

  useEffect(() => {
    setElement(targetRef.current);
  }, []);

  return (
    <div className={`flex flex-col gap-6 lg:gap-0 w-full responsive py-2`}>
      <div
        className={`lg:w-[450px] lg:h-274 flex-shrink-0 transition-all duration-1000 rounded-2xl border border-[#5b5858] backdrop-blur-40 p-11 self-center lg:self-start flex flex-col gap-4 relative`}
      >
        <Parallax
          translateY={["-100px", "0px"]}
          translateX={["80px", "50px"]}
          scale={[0.6, 1]}
          opacity={[0, 1]}
          easing="easeInOutBack"
        >
          <img
            className={`absolute -top-16 -right-8 `}
            src="/Ellipse 32.svg"
            alt="ellipse"
          />
        </Parallax>

        <Parallax
          translateY={["0px", "150px"]}
          translateX={["0px", "600px"]}
          speed={5000}
          scale={[1, 1.3]}
          opacity={[0, 1]}
          easing="ease"
          targetElement={targetElement}
        >
          <img
            className={`absolute -top-16 -right-8`}
            src="/Ellipse 32.svg"
            alt="ellipse"
          />
        </Parallax>

        <Parallax
          translateY={["-100px", "-20px"]}
          opacity={[0.2, 1]}
          easing="easeInQuad"
        >
          <p className={`absolute top-36 left-4 text-2xl text-[#03AD00]`}>
            103,618
          </p>
        </Parallax>

        <p className="text-5xl">103,618</p>
        <p className="text-sm text-[#676666]">
          Every community has it’s own magic
        </p>
        <p className="flex items-center gap-2">
          &uarr;{" "}
          <span className={`text-[#03AD00] text-2xl `}>
            <Parallax
              translateY={["0px", "100px"]}
              translateX={["0px", "600px"]}
              speed={10000}
              scale={[1, 2]}
              style={{ color: "#fff" }}
              easing="ease"
              targetElement={targetElement}
              rootMargin={{ top: -100, right: 0, bottom: -200, left: 0 }}
            >
              <span>103,618</span>
            </Parallax>
          </span>{" "}
          YoY Change
        </p>
      </div>
      <div className="lg:w-[450px] lg:h-274 flex flex-col self-center lg:self-end gap-4 flex-shrink-0 rounded-2xl border border-[#5b5858] backdrop-blur-40 p-11">
        <p ref={targetRef} className="text-5xl opacity-0">
          103,618
        </p>
        <p className="text-sm text-[#676666]">
          Every community has it’s own magic
        </p>
        <p className="flex items-center gap-2">
          &uarr; <span className="text-[#03AD00] text-2xl">103,618</span> YoY
          Change
        </p>
      </div>
    </div>
  );
};

export default Cards;
