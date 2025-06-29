
import { Link } from "react-router";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "shikhun",
    name: "Shikhun",
    image: "https://i.postimg.cc/FH9VHM49/3001.png",
    stack: ["React", "NodeJS", "Express", "MongoDB", "Tailwind", "Shadcn"],
    live: "https://dynamic-bubblegum-7473c9.netlify.app/",
    github: "https://github.com/Sulayman-WebMaster/course-management-app",
    description: "A Course Management System to create, manage, and enroll in courses.",
  },
  {
    id: "bd-room",
    name: "BD Room",
    image: "https://i.postimg.cc/Hk7vg4WH/300.png",
    stack: ["React", "NodeJS", "Express", "MongoDB", "Tailwind"],
    live: "https://endearing-llama-97aa36.netlify.app/",
    github: "https://github.com/Sulayman-WebMaster/room-mate-finder-webapp",
    description: "A roommate finder with real-time chat and listing features.",
  },
  {
    id: "goal",
    name: "Goal!",
    image: "https://i.postimg.cc/3wGXSYjF/35.png",
    stack: ["React", "Tailwind", "DaisyUi"],
    live: "https://cheerful-meringue-44b588.netlify.app/",
    github: "https://github.com/Sulayman-WebMaster/sport-web-with-react",
    description: "A clean sports news website with updates and articles.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6   scroll-mt-[100px]">
      <h2 className="text-5xl font-extrabold text-[#F68537] mb-16 text-center">Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg overflow-hidden mb-16 border border-gray-200">
          <div className="p-8 flex-1">
            <h3 className="text-3xl font-bold text-[#F68537] mb-4">{project.name}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
            <div className="flex gap-4">
              <a href={project.live} target="_blank" className="text-[#F68537] font-medium flex items-center gap-2 hover:underline">
                Live Site <FaExternalLinkAlt />
              </a>
              <a href={project.github} target="_blank" className="text-gray-600 font-medium flex items-center gap-2 hover:underline">
                GitHub <FaGithub />
              </a>
            </div>
            <Link to={`/projects/${project.id}`} className="mt-6 inline-block bg-[#F68537] text-white px-5 py-2 rounded-xl shadow hover:bg-orange-600 transition">
              View More 
            </Link>
          </div>
          <img src={project.image} alt={project.name} className="w-full md:w-[45%] h-[320px] object-cover" />
        </div>
      ))}
    </section>
  );
};

export default Projects;
