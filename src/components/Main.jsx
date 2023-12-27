import React from "react";
import { Parallax } from "react-scroll-parallax";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-12">
      <Parallax
        translateY={["0px", "50px"]}
        translateX={["0px", "-30px"]}
        scale={[0.75, 1]}
        easing="easeInQuad"
      >
        <p className="mb-2 text-md xl:text-4xl animate_from_bottom">
          Dubai property market(year to date) 2023 vs. 2021.
        </p>
      </Parallax>
      <Parallax
        translateY={["0px", "20px"]}
        translateX={["0px", "20px"]}
        scale={[1, 0.6]}
        opacity={[1, 0]}
        easing="easeInQuad"
      >
        <img
          className="mx-auto animate_from_bottom animation_delay-7"
          src="./CITY  1.png"
          alt="city"
        />
      </Parallax>
    </div>
  );
};

export default Main;
