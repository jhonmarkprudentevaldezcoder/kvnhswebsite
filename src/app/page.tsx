"use client";

import Carousel from "./components/Carousel/Carousel";
import About from "./templates/About";
import Hero from "./templates/Hero";
import News from "./templates/News";
import Welcome from "./templates/Welcome";

export default function Home() {
  return (
    <div className="bg-white ">
      <Carousel />
      <Welcome />
      <About />
    </div>
  );
}
