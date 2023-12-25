import React from 'react'

const Cards = () => {
  return (
    <div
        className={`flex-col gap-10 w-full px-44 py-12`}
      >
        <div
          className={` w-[450px] h-274 flex-shrink-0 transition-all duration-1000 rounded-2xl border border-[#5b5858] backdrop-blur-40 p-11 mr-auto flex flex-col gap-4 relative`}
        >
          <img
            className={`absolute -top-16 -right-8 `}
            src="/Ellipse 32.svg"
            alt="ellipse"
          />
          <p
            className={`absolute top-36 left-[58px] text-2xl text-[#03AD00]`}
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
              className={`text-[#03AD00] text-2xl `}
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
  )
}

export default Cards