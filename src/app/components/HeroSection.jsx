"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Wave from 'react-wavify'; //React-Wave https://www.npmjs.com/package/react-wavify


const HeroSection = ({ id }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="lg:py-full lg:px-full lg: pb-30" id={id}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* // Wave animation for background effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-200">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            {/* // Type animation for dynamic text effect */}
            <TypeAnimation
              sequence={[
                "Kat Costales",
                2000,
                "UX/UI Designer",
                2000,
                "UX Researcher",
                2000,
                "UI Developer",
                2000,
                "Web/App Developer",
                2000,
                "Front-End Engineer",
                2000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            <i> Hafa Adai, Kamusta!</i> <br />
            <b>Hello, how are you!</b> <br />
            I am a <span className="hover:animate-bounce">passionate</span> front-end developer driven by <br />
            ethnographic research to develop user-centric solutions.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-32 sm:w-32 rounded-full mr-4 bg-gradient-to-bl from-primary-500 to-secondary-500 hover:bg-slate-200 text-white hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 hover:text-slate-950 hover:font-bold text-center"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {hovered ? "Please" : "Hire Me"}
            </Link>
            <a
              href="/sampleResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-500 hover:to-secondary-500 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download PDF
              </span>
            </a>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full hover:animate-spin-once bg-[#212020] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative duration-150 shadow-lg shadow-zinc-500/50">
            <Image
              src="/images/landing-profile.png"
              alt="profile image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full "
              width={350}
              height={350}
            />
          </div>
        </motion.div>

      </div>



    </section>
  );
};

export default HeroSection;
