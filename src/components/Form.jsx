"use client";

import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "arabic",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full p-3 mb-44">
      <div className="lg:w-[904px] h-[435px] mx-auto img flex flex-col lg:flex-row ">
        <div className="p-8 text-3xl font-medium leading-10">
          <p>Tald to an expert</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid items-start w-full grid-cols-2 grid-rows-5 gap-4 p-7"
          style={{ backgroundColor: "rgba(0, 0,0, .9)" }}
        >
          <div className="">
            <input
              type="text"
              className="w-full focus-within:bg-transparent  focus:outline-none p-4 rounded-lg border border-[#171717] bg-transparent text-[#676666]"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="w-full focus-within:bg-transparent focus:outline-none p-4 rounded-lg border border-[#171717] bg-transparent text-[#676666]"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="w-full focus-within:bg-transparent focus:outline-none p-4 rounded-lg border border-[#171717] bg-transparent text-[#676666]"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <select
              className="w-full focus-within:bg-transparent focus:outline-none p-4 rounded-lg border border-[#171717] bg-transparent text-[#676666]"
              id="language"
              name="language"
              placeholder="Preferred Language"
              value={formData.language}
              onChange={handleChange}
              required
            >
              <option className="text-[#676666]" value="arabic">
                Arabic
              </option>
              <option className="text-[#676666]" value="english">
                English
              </option>
            </select>
          </div>
          <div className="h-full col-start-1 col-end-3 row-start-3 row-end-5">
            <textarea
              className="w-full focus-within:bg-transparent focus:outline-none p-4 rounded-lg border h-full border-[#171717] bg-transparent text-[#676666]"
              id="message"
              name="message"
              placeholder="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="self-end col-span-2 row-end-6 justify-self-end text-[#AF6F57]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
