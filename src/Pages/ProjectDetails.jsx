import { Link, useParams } from "react-router";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaExclamationTriangle, FaLightbulb } from "react-icons/fa";
import logo from "../assets/logo.png";
import Badge from "../Components/Badge";
import { saveAs } from "file-saver";
import Lottie from "lottie-react";


const downloadPDF = () => saveAs("/my-resume.pdf", "sulayman-kobir-resume.pdf");

const projectDetails = {
  shikhun: {
    name: "Shikhun",
    stack: ["React", "NodeJS", "Express", "MongoDB", "Tailwind", "Shadcn"],
    image: "https://i.postimg.cc/FH9VHM49/3001.png",
    live: "https://dynamic-bubblegum-7473c9.netlify.app/",
    github: "https://github.com/Sulayman-WebMaster/course-management-app",
    description:
      "A Course Management System that allows users to create, manage, and enroll in courses. It ensures a seamless learning experience with role-based access control.",
    challenges:
      "Handling complex nested routes and managing state for different user roles (admin, instructor, student).",
    future: "Plan to add video lessons, Stripe integration, and a quiz system.",
  },
  "bd-room": {
    name: "BD Room",
    stack: ["React", "NodeJS", "Express", "MongoDB", "Tailwind"],
    image: "https://i.postimg.cc/Hk7vg4WH/300.png",
    live: "https://endearing-llama-97aa36.netlify.app/",
    github: "https://github.com/Sulayman-WebMaster/room-mate-finder-webapp",
    description:
      "BD Room is a real-time roommate finder app that allows users to post listings, chat, and find compatible roommates based on preferences.",
    challenges:
      "Integrating real-time chat and filtering listings based on user data without performance issues.",
    future: "Add location-based search, mobile push notifications, and review system.",
  },
  goal: {
    name: "Goal!",
    stack: ["React", "Tailwind", "DaisyUi"],
    image: "https://i.postimg.cc/3wGXSYjF/35.png",
    live: "https://cheerful-meringue-44b588.netlify.app/",
    github: "https://github.com/Sulayman-WebMaster/sport-web-with-react",
    description:
      "Goal! is a modern sports news website offering the latest scores, match info, and trending sports stories.",
    challenges:
      "Managing dynamic content from APIs and ensuring real-time updates without delays.",
    future: "Add user accounts, bookmarks, and a comment section.",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project)
    return <div className="text-center py-32 text-2xl text-gray-600">Project Not Found</div>;

  return (
    <>
      {/* Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/50 backdrop-blur-xl shadow-xl rounded-full max-w-[1200px] w-[90%] px-8 py-4 flex justify-between items-center border border-[#F68537]/30">
        <img src={logo} alt="Logo" className="w-12 rounded-xl" />
        <nav className="hidden md:flex gap-6 font-bold">
          {["Home", "Projects", "About", "Contact"].map((label) => (
            <a
              key={label}
              href={`/#${label.toLowerCase()}`}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#F68537] transition-all"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          onClick={downloadPDF}
          className="bg-[#F68537] text-white px-6 py-2 rounded-xl hover:bg-[#d96f28] transition-transform hover:scale-110 shadow"
        >
          Resume
        </button>
      </header>

      {/* Project Detail */}
      <main className="pt-[130px] pb-24 px-6 max-w-6xl mx-auto">
        <Link
          to="/#projects"
          className="text-[#F68537] flex items-center gap-2 text-base font-medium mb-10 hover:underline"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        

        <img
          src={project.image}
          alt={project.name}
          className="w-full h-[380px] md:h-[480px] object-cover rounded-3xl mb-10 border border-[#F68537]/20 shadow-lg"
        />

        <h2 className="text-4xl font-extrabold text-[#F68537] mb-4">
          {project.name}
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {project.description}
        </p>

        <section className="space-y-8">
          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🧪 Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, i) => (
                <Badge key={i} tech={tech} />
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-orange-50 border-l-4 border-[#F68537] p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-[#F68537] text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#F68537] mb-1">Challenges Faced</h3>
                <p className="text-gray-700">{project.challenges}</p>
              </div>
            </div>
          </div>

          {/* Future Plans */}
          <div className="bg-[#F68537]/10 border-l-4 border-[#F68537] p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-[#F68537] text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#F68537] mb-1">Future Plans</h3>
                <p className="text-gray-700">{project.future}</p>
              </div>
            </div>
          </div>

          

        
        </section>

        {/* Buttons */}
        <div className="flex gap-6 mt-12">
          <a
            href={project.live}
            target="_blank"
            className="bg-[#F68537] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-orange-600 flex items-center gap-2 transition"
          >
            Live Site <FaExternalLinkAlt />
          </a>
          <a
            href={project.github}
            target="_blank"
            className="border border-[#F68537] text-[#F68537] px-6 py-2 rounded-lg font-semibold hover:bg-[#F68537] hover:text-white transition flex items-center gap-2"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </main>
    </>
  );
};

export default ProjectDetails;
