import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import humpy from "@/public/humpy.png";
import woloo from "@/public/woloo.png";
import revind from "@/public/revind.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 
  {
    title: "Front-End Developer",
    location: "DIGITALFLAKE Pune, MH",
    description:
      "I worked as a front-end developer for 1.7 years in 1 job . I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 22 - Aug 24",
  },
 
] as const;

export const projectsData = [
  {
    title: "Woloo Admin",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. My work was to create admin panel from scratch for them.",
    tags: ["React", "Redux-Toolkit", "mySQL", "Tailwind", "High-Charts"],
    imageUrl: woloo,
  },
  {
    title: "Humpy Admin",
    description:
      "I worked as a frontend developer on this startup project for 0.6 year. My work was to create admin panel from scratch for them.",
    tags: ["React", "TypeScript", "Tailwind", "Redux Toolkit"],
    imageUrl: humpy,
  },
  {
    title: "Ximkart Landing Page",
    description:
    "I worked as a frontend developer on this startup project for 0.6 year. My work was to create landing panel from scratch for them.",
    tags: ["React", "Next.js", "SASS"],
    imageUrl: revind,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
