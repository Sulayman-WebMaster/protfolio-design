import React from 'react'
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiShadcnui,
  SiDaisyui,
  
} from "react-icons/si";
const Badge = ({ tech }) => {
  const icons = {
    React: <SiReact className="text-blue-500" />,
    NextJS: <SiNextdotjs className="text-black" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    Tailwind: <SiTailwindcss className="text-cyan-500" />,
    NodeJS: <SiNodedotjs className="text-green-700" />,
    Express: <SiExpress className="text-gray-700" />,
    Shadcn: <SiShadcnui className="text-purple-600" />,
    DaisyUi: <SiDaisyui className="text-purple-500" />,
  };
  return (
    <span className="flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded-full font-medium shadow-sm">
      {icons[tech]} {tech}
    </span>
  );
};


export default Badge