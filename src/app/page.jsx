"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Designing and Implementing websites of tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          I'm a UI/UX Software Engineer dedicated to building engaging, intuitive digital experiences. From crafting robust
          style systems to increasing application efficiency by up to 50%, I bridge the gap between design thinking and engineering excellence.
          Let's create solutions that are not only innovative, but also meaningful for the people who use them.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <a href="/resume.pdf" className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
