import React from "react";
import { Parallax } from "react-scroll-parallax";

const PriceChange = () => {
  return (
    <div className="w-4/5 mx-auto my-36">
      <h2 className="text-4xl font-semibold text-center">
        Property price change,{" "}
        <span className="text-[#AF6F57] font-semibold">YTD.</span>
      </h2>

      <Parallax
        translateY={["100px", "0px"]}
        scale={[0.6, 1]}
        opacity={[0, 1]}
        easing="easeOutSine"
      >
        <table className="w-full my-16">
          <thead className="">
            <tr className="border-b border-[#676666]">
              <th className="p-2 text-2xl text-center uppercase py-9">data</th>
              <th className="p-2 text-2xl text-center uppercase py-9">data</th>
              <th className="p-2 text-2xl text-center uppercase py-9">data</th>
              <th className="p-2 text-2xl text-center uppercase py-9">data</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#676666]">
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
            </tr>
            <tr className="border-b border-[#676666]">
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
            </tr>
            <tr className="border-b border-[#676666]">
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
            </tr>
            <tr className="border-b border-[#676666]">
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
              <td className="p-2 text-2xl text-center uppercase py-9">data</td>
            </tr>
          </tbody>
        </table>
      </Parallax>
    </div>
  );
};

export default PriceChange;
