import React, { useEffect, useState } from "react";
import { RightArrowIcon } from "./icons";
import { Button } from "./input";
import gif1 from "./gifs/happy-hacker.gif";

export default function Landing() {
  return (
    <div className="flex flex-1 w-full h-[70vh] md:h-[100vh] justify-start md:justify-center items-center bg-landing-image padding">
      <div className="hidden sm:flex">
        <img
          src={gif1}
          data-aos="flip-left"
          data-aos-duration="2000"
          data-aos-easing="ease-out-cubic"
          className="w-56 sm:w-44 sm:h-44 md:w-72 h-56 md:h-72 object-contain"
          alt="landing img"
        />
      </div>
      <div className="flex z-10 flex-col  gap-4">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className={`text-white font-bold text-3xl sm:text-4xl lg:text-6xl`}
        >
          Hello, I&apos;m
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="1200"
          className={`text-white font-bold whitespace-nowrap text-6xl sm:text-6xl lg:text-8xl xl:tracking-wide uppercase  text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-gray-200`}
        >
          SUHAIL K K
        </p>
        <section className="typing-container">
          <p
            data-aos="fade-down"
            data-aos-duration="1400"
            className={`text-normal-landing-white`}
          >
            I build things for the web and mobile.
          </p>
        </section>
        <a href="/#me" data-aos="fade-down" data-aos-duration="1600">
          <Button text="MORE ABOUT ME" icon={<RightArrowIcon />} />
        </a>
      </div>
    </div>
  );
}