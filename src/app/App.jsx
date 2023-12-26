"use client";

import React from "react";
import Cards from "@/components/Cards";
import Main from "@/components/Main";
import NeedMore from "@/components/NeedMore";
import PriceChange from "@/components/PriceChange";
import { ParallaxProvider } from "react-scroll-parallax";
import Form from "@/components/Form";

const App = () => {
  return (
    <ParallaxProvider>
      <div className="flex flex-col items-center justify-center">
        <Main />

        <Cards />

        <NeedMore />

        <PriceChange />

        <Form />
      </div>
    </ParallaxProvider>
  );
};

export default App;
