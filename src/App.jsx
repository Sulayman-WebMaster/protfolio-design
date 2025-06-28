import React, { useEffect, useRef, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaLaptopCode,
  FaLightbulb,
  FaBicycle,
  FaUserTie,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebook,
  FaExternalLinkAlt
} from 'react-icons/fa';

import { saveAs } from 'file-saver';
import { gsap } from 'gsap';
import { Player } from '@lottiefiles/react-lottie-player';

import profileImg from './assets/profile-image.jpg';
import logo from './assets/logo.png';
import devAnimation from './assets/developer-animation.json';
import Badge from './Components/Badge';
import ActionLink from './Components/ActionLink';
import SkillBar from './Components/SkillBar';
import { SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTailwindcss } from 'react-icons/si';
import CustomCursor from './Components/CustomCursor';
import TypingText from './Components/TypingText';

const App = () => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Frontend Developer | React Enthusiast';


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, { duration: 1, opacity: 0, y: 60, ease: 'power3.out' });
      gsap.from(textRef.current, { duration: 1.4, x: -120, opacity: 0, delay: 0.3, ease: 'power2.out' });
      gsap.from(imgRef.current, { duration: 1.4, x: 120, opacity: 0, scale: 0.6, delay: 0.5, ease: 'power2.out' });
    });

    let index = 0;
    let direction = 1;
    const loopTyping = () => {
      setDisplayedText(fullText.slice(0, index));
      index += direction;
      if (index > fullText.length) {
        direction = -1;
        setTimeout(loopTyping, 1000);
        return;
      } else if (index < 0) {
        direction = 1;
        setTimeout(loopTyping, 500);
        return;
      }
      setTimeout(loopTyping, 60);
    };
    loopTyping();

    return () => ctx.revert();
  }, []);


  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('path');
    gsap.fromTo(
      paths,
      { strokeDasharray: 1000, strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 2, stagger: 0.3, ease: 'power2.out' }
    );

    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.3, ease: 'power2.out' }
      );
    }
  }, []);





  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" />, level: 90 },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 85 },
    { name: "React", icon: <SiReact className="text-blue-500" />, level: 90 },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, level: 92 },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, level: 80 },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" />, level: 78 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, level: 83 },
    { name: "Redux", icon: <SiRedux className="text-purple-600" />, level: 75 },
  ];


  const education = [
    {
      degree: 'Diploma in Civil Engineering',
      institution: 'Mymensingh Polytechnic Institute',
      year: '2021 - present',
      details: 'Currently pursuing a diploma in Civil Engineering, focusing on structural design and materials science.',
    },
  ];




  const downloadPDF = () => saveAs('/my-resume.pdf', 'sulayman-kobir-resume.pdf');

  return (
    <div className="scroll-smooth font-sans bg-gradient-to-br from-[#EAD8A4] via-white to-[#EAD8A4] text-[#1f2937] min-h-screen">
      <CustomCursor />
      {/* Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/50 backdrop-blur-xl shadow-xl rounded-full max-w-[1200px] w-[90%] px-8 py-4 flex justify-between items-center border border-[#F68537]/30">
        <img src={logo} alt="Logo" className="w-1/8 rounded-2xl" />
        <nav className="hidden md:flex gap-6 font-bold">
          {['Home', 'Projects', 'About', 'Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#F68537] transition-all"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          onClick={downloadPDF}
          className="bg-[#F68537] text-white px-6 py-3 rounded-xl hover:bg-[#d96f28] transition-transform hover:scale-110 shadow-lg"
        >
          Resume
        </button>
      </header>

      {/* Hero Section */}
    
 <section
  id="home"
  className="pt-24 sm:pt-28 md:pt-36 max-w-[1200px] min-h-screen w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0"
>
  {/* Text content first on mobile and desktop */}
  <div className="space-y-6 max-w-xl text-center md:text-left order-1 md:order-1">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
      Hello, I'm <span className="text-[#F68537]">Sulayman Kobir</span>
    </h1>

    {/* Your typing text component here */}
    <TypingText />

    <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
      Creative developer crafting interactive experiences with React, NextJs, and Node.
    </p>

    <div className="flex justify-center md:justify-start gap-6 mt-4 text-2xl">
      <a
        href="https://github.com/sulayman-webmaster"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#F68537] transition-transform hover:scale-125"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/sk-100q"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#F68537] transition-transform hover:scale-125"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://facebook.com/sulayman.kobir.24245"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#F68537] transition-transform hover:scale-125"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
    </div>

    <button
      onClick={() => (window.location.href = "#contact")}
      className="bg-[#F68537] text-white px-8 py-3 rounded-xl hover:bg-[#d96f28] transition-transform hover:scale-110 shadow-lg mt-6 mx-auto md:mx-0 block md:inline-block"
    >
      Contact Me
    </button>
  </div>

 
  <div
  className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] lg:w-[420px] lg:h-[420px] rounded-full border-4 border-[#F68537] overflow-hidden shadow-2xl hover:scale-110 transition-transform order-2 md:order-2
    mx-auto md:ml-auto md:mr-0"
>
  <img
    src={profileImg}
    alt="Profile"
    className="w-full h-full object-cover object-top"
  />
</div>
</section>







      {/* About Section */}
      <section
        id="about"
        className="relative min-h-screen w-full bg-white text-gray-800 flex items-center justify-center px-6 py-20 overflow-hidden scroll-mt-[100px]"
      >
        {/* Decorative SVG Background */}
        <svg
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,160 C480,80 960,240 1440,160"
            stroke="#F68537"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,220 C360,140 1080,300 1440,220"
            stroke="#F68537"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Content Grid */}
        <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* Animation Side */}
          <div className="flex justify-center">
            <Player
              autoplay
              loop
              src={devAnimation}
              className="w-full max-w-md"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-5xl font-extrabold text-[#F68537] mb-4">About Me</h2>
            <p className="text-gray-500 text-lg mb-10">
              I'm Sulayman, a frontend developer who builds clean, responsive web apps and loves turning ideas into real, interactive experiences.
            </p>

            <div className="space-y-8 text-base md:text-lg leading-relaxed">

              {/* My Journey */}
              <div className="flex gap-4 items-start">
                <div className="min-w-[32px] text-[#F68537] text-2xl pt-1">
                  <FaLaptopCode />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">My Journey</h4>
                  <p>
                    I began programming out of curiosity, and it quickly became my passion.
                    From building static sites to full-stack MERN applications, I’ve evolved into a dedicated and capable developer.
                  </p>
                </div>
              </div>

              {/* What I Enjoy */}
              <div className="flex gap-4 items-start">
                <div className="min-w-[32px] text-[#F68537] text-2xl pt-1">
                  <FaLightbulb />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">What I Enjoy</h4>
                  <p>
                    I love bringing creative ideas to life through clean design and interactive experiences.
                    Writing maintainable code and building reusable components is what I strive for.
                  </p>
                </div>
              </div>

              {/* Outside the Code */}
              <div className="flex gap-4 items-start">
                <div className="min-w-[32px] text-[#F68537] text-2xl pt-1">
                  <FaBicycle />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Outside the Code</h4>
                  <p>
                    I enjoy biking, sketching, and watching football.
                    These hobbies help me stay balanced and boost creativity in my development work.
                  </p>
                </div>
              </div>

              {/* My Approach */}
              <div className="flex gap-4 items-start">
                <div className="min-w-[32px] text-[#F68537] text-2xl pt-1">
                  <FaUserTie />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-1">My Approach</h4>
                  <p>
                    I believe in writing clean, purposeful code and never stop learning.
                    Collaboration, honesty, and quality are values I bring into every project I work on.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-[100px]"
      >
        <h2 className="text-5xl font-extrabold text-[#F68537] mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <SkillBar key={idx} {...skill} />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-[100px]">
        <h2 className="text-5xl font-extrabold text-[#F68537] mb-12 text-center">Education</h2>
        {education.map(({ degree, institution, year, details }, idx) => (
          <div key={idx} className="bg-white rounded-lg p-6 shadow-md mb-6">
            <h3 className="font-semibold text-xl">{degree}</h3>
            <p className="text-gray-600">{institution}</p>
            <p className="text-gray-600 italic">{year}</p>
            <p className="mt-2">{details}</p>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-[100px]">
        <h2 className="text-5xl font-extrabold text-[#F68537] mb-16 text-center">Projects</h2>

        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg overflow-hidden mb-16 border border-gray-200">
          <div className="p-8 flex-1">
            <h3 className="text-3xl font-bold text-[#F68537] mb-4">Shikhun</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Shikhun is a Course Management System that allows users to create, manage, and enroll in courses.
              It features user authentication, course creation, and a responsive design for seamless learning experiences.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge tech="React" />
              <Badge tech="NodeJS" />
              <Badge tech="Express" />
              <Badge tech="MongoDB" />
              <Badge tech="Tailwind" />
              <Badge tech="Shadcn" />
            </div>
            <div className="flex gap-4">
              <ActionLink href="https://dynamic-bubblegum-7473c9.netlify.app/" label="Live Site" icon={<FaExternalLinkAlt />} />
              <ActionLink href="https://github.com/Sulayman-WebMaster/course-management-app" label="GitHub" icon={<FaGithub />} outline />
            </div>
          </div>
          <img
            src="https://i.postimg.cc/FH9VHM49/3001.png"
            alt="Shikhun"
            className="w-full md:w-[45%] h-[320px] object-cover"
          />
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg overflow-hidden mb-16 border border-gray-200">
          <div className="p-8 flex-1">
            <h3 className="text-3xl font-bold text-[#F68537] mb-4">BD Room</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A roommate finder application with user authentication, profile management, and real-time chat functionality.
              Users can post listings and find compatible roommates based on preferences.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge tech="React" />
              <Badge tech="NodeJS" />
              <Badge tech="Express" />
              <Badge tech="MongoDB" />
              <Badge tech="Tailwind" />
            </div>
            <div className="flex gap-4">
              <ActionLink href="https://endearing-llama-97aa36.netlify.app/" label="Live Site" icon={<FaExternalLinkAlt />} />
              <ActionLink href="https://github.com/Sulayman-WebMaster/room-mate-finder-webapp" label="GitHub" icon={<FaGithub />} outline />
            </div>
          </div>
          <img
            src="https://i.postimg.cc/Hk7vg4WH/300.png"
            alt="BD Room"
            className="w-full md:w-[45%] h-[320px] object-cover"
          />
        </div>

        {/* Project 3 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-8 flex-1">
            <h3 className="text-3xl font-bold text-[#F68537] mb-4">Goal!</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Goal! is a sports news website that provides the latest updates, scores, and articles on various sports.
              It features a clean design, user-friendly navigation, and responsive layout for an optimal viewing experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge tech="DaisyUi" />
              <Badge tech="Tailwind" />
              <Badge tech="React" />
            </div>
            <div className="flex gap-4">
              <ActionLink href="https://cheerful-meringue-44b588.netlify.app/" label="Live Site" icon={<FaExternalLinkAlt />} />
              <ActionLink href="https://github.com/Sulayman-WebMaster/sport-web-with-react" label="GitHub" icon={<FaGithub />} outline />
            </div>
          </div>
          <img
            src="https://i.postimg.cc/3wGXSYjF/35.png"
            alt="Goal!"
            className="w-full md:w-[45%] h-[320px] object-cover"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-[100px] bg-white rounded-lg shadow-md "
      >
        <h2 className="text-5xl font-extrabold text-[#F68537] mb-12 text-center">
          Contact Me
        </h2>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row gap-10 justify-center text-gray-700 mb-16">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#F68537] text-3xl" />
            <div>
              <h4 className="font-semibold text-xl">Email</h4>
              <a href="mailto:your.email@example.com" className="hover:text-[#F68537]">
                sulayman.kobir@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#F68537] text-3xl" />
            <div>
              <h4 className="font-semibold text-xl">Phone</h4>
              <a href="tel:+1234567890" className="hover:text-[#F68537]">
                +8801521703982
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-[#F68537] text-3xl" />
            <div>
              <h4 className="font-semibold text-xl">WhatsApp</h4>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F68537]"
              >
                +8801981322331
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F68537]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F68537]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F68537]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F68537] text-white font-semibold py-3 rounded-md hover:bg-[#e57025] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default App;
