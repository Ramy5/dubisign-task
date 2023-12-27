import React from "react";
import { Parallax } from "react-scroll-parallax";

const NeedMore = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <p className="mt-12 text-4xl text-center">
        Need more{" "}
        <span className="text-[#AF6F57] font-semibold">knowledge</span>?{" "}
      </p>
      <Parallax opacity={[0, 1]} easing="easeOutSine">
        <button className="w-60 h-14 rounded-lg border border-[#D9D9D9] text-lg my-6">
          <Parallax
            translateY={["100px", "0px"]}
            scale={[0.6, 1]}
            opacity={[0, 1]}
            easing="easeInOutQuint"
          >
            <p>
              Talk to an{" "}
              <span className="text-[#AF6F57] font-bold">expert</span>
            </p>
          </Parallax>
        </button>
      </Parallax>
      <Parallax
        translateY={["-100px", "0px"]}
        scale={[0.6, 1]}
        opacity={[0, 1]}
        easing="easeInOutBack"
        className="absolute left-16 xl:left-44"
      >
        <img src="/Ellipse 32.svg" alt="ellipse" />
      </Parallax>
    </div>
  );
};

export default NeedMore;
