"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Wave from "react-wavify";

const DecSection = () => {
  const ref = useRef(null); // Used only on the section

  const [amplitude, setAmplitude] = useState(40);
  const [height, setHeight] = useState(20);

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const screenHeight = window.innerHeight;

    const y = touch.clientY;

    const newAmplitude = Math.max(20, (screenHeight - y) / 5);
    const newHeight = Math.max(10, y / 20);

    setAmplitude(newAmplitude);
    setHeight(newHeight);
  };

  // Scroll progress linked to the whole section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      onTouchMove={handleTouchMove}
      onMouseMove={(e) => {
        const newAmplitude = Math.max(20, (window.innerHeight - e.clientY) / 5);
        const newHeight = Math.max(10, e.clientY / 20);
        setAmplitude(newAmplitude);
        setHeight(newHeight);
      }}
      className="relative w-full h-full overflow-visible mt-20"
    >
      <motion.div
        className="relative w-full h-[400px]"
        style={{ opacity }}
      >
        <Image
          src="/images/beach.png"
          alt="Beach"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <Wave
        className="absolute bottom-0 left-0 w-full h-[400px] z-10 pointer-events-none"
        mask="url(#mask)"
        fill="#76b6c4"
        options={{
          height: height,
          amplitude: amplitude,
          speed: 0.2,
          points: 3,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="#A7C7E7" />
            <stop offset="1" stopColor="#4169E1" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
    </section>
  );
};

export default DecSection;
