"use client";

import { useState } from "react";

export default function Home() {
  const [animation1, setAnimation1] = useState(false);
  const [animation2, setAnimation2] = useState(false);

  setTimeout(() => {
    setAnimation1(true);
  }, 2000);

  setTimeout(() => {
    setAnimation2(true);
  }, 4000);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="">
        <p
          className={`${
            animation1
              ? "-translate-y-48 -translate-x-12 scale-110 transition-all duration-1000"
              : "animate_from_bottom"
          } text-right animate_from_bottom animation_delay-7 text-4xl mb-24`}
        >
          Dubai property market(year to date) 2023 vs. 2021.
        </p>
        <img
          className={`${
            animation1
              ? "scale-75 duration-1000 transition-all -translate-y-96 opacity-0"
              : "animate_from_bottom"
          } animation_delay-11 mx-auto`}
          src="./CITY  1.png"
          alt="city"
        />
      </div>

      <div
        className={`${
          animation1 ? "flex" : "hidden"
        } flex-col gap-10 w-full p-72`}
      >
        <div
          className={`${
            animation2 && "-translate-y-12"
          } w-[450px] h-274 flex-shrink-0 transition-all duration-1000 rounded-2xl border border-[#5b5858] backdrop-blur-40 p-11 mr-auto flex flex-col gap-4 relative`}
        >
          <img
            className={`absolute -top-16 -right-8 ${
              animation2 ? " animate_scale" : "opacity-0"
            }`}
            src="/Ellipse 32.svg"
            alt="ellipse"
          />
          <p
            className={`absolute ${
              animation2 ? " animate_from_top" : "opacity-0"
            } top-36 left-[58px] text-2xl text-[#03AD00]`}
          >
            103,618
          </p>
          <p className="text-5xl">103,618</p>
          <p className="text-sm text-[#676666]">
            Every community has it’s own magic
          </p>
          <p className="flex items-center gap-2">
            &uarr;{" "}
            <span
              className={`text-[#03AD00] text-2xl ${animation2 && "fly-to"}`}
            >
              103,618
            </span>{" "}
            YoY Change
          </p>
        </div>
        <div className="w-[450px] h-274 flex flex-col ml-auto gap-4 flex-shrink-0 rounded-2xl border border-[#5b5858] backdrop-blur-40 p-11">
          <p className="text-5xl">103,618</p>
          <p className="text-sm text-[#676666]">
            Every community has it’s own magic
          </p>
          <p className="flex items-center gap-2">
            &uarr; <span className="text-[#03AD00] text-2xl">103,618</span> YoY
            Change
          </p>
        </div>
      </div>
    </div>
  );
}
