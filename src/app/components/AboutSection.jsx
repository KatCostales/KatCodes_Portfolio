"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS</li>
        <li>Javascript, Typescript</li>
        <li>React, Vue.js</li >
        <li>React Frameworks (Next.js, React Native, Expo)</li>
        <li>SQL, PostgreSQL</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Interest",
    id: "interest",
    content: (
      <ul className="list-disc pl-2">
        <li> Brand Design </li>
        <li> Front-end Web/App Development </li>
        <li> UX Research - Ethnographic & Psychological Epistemologies </li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Whitworth University, Spokane, WA</li>
        <ul>
          <li>Bachelor of Arts in Human-Computer Interaction</li>
          <li>Minor in Psychology</li>
        </ul>
        <li>Marianas High Sschool, Saipan, Northern Mariana Islands </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>ACTFL Language Proficiency -  Tagalog</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="logo" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a UX/UI Designer with a passion for creating
            interactive and responsive web/mobile applications. I have experience
            working with HTML, CSS, Javascript, SQL, React, PostgreSQL,
            Typescript, Brand Design, Git, and other design tools. I possess the ability
            to maximize a team's skillset create paths for team driven success. I am a team
            player and I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("interest")}
              active={tab === "interest"}
            >
              {" "}
              Interests{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
