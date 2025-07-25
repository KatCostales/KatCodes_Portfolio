"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";



const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Building a React Next.js Portfolio using TailwindCSS, framer-motion, and more!",//
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",

  },
  {
    id: 2,
    title: "STEM Summer Research - Innovation Incubator",
    description: "Worked on 3 Client Projects ranging from MVP's to prototypes. Engaging community tech work 💻",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Old Site ReDesign",
    description: "TIME TRAVEL! Internet Archive lets us travel through technology interfaces through snapshots of companies/softwares",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "file:///Users/katrinacostales/Desktop/Web%20Design/Old%20Site%20ReDesign/index.html",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Parallax Website Research Design",
    description: "Implementing parallax alongside research into the trends, history, use, and famous cases :)",
    image: "/images/projects/4.png",
    tag: ["All", ],
    gitUrl: "public/research_webstyle/index.html",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "MultiPageSite",
    description: "Draft Design and... for the class :D",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "FPC Engagement Summer Fellow",
    description: "Faith Presbyterian Community Community Engagement fellow consisted of nurturing deep relationships with the Lord, our community, and ourselves. Rooted in love and acceptance. Engaged in maintaining Church website",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://faithpresbyterianchurch.smugmug.com/Fellowship/2022-Summer-Intern-Highlights",
  },
];

const ProjectsSection = () => {
  // State to manage the selected tag
  // Using useState to manage the currently selected tag
  // Default is "All" to show all projects initially
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
