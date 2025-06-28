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
import projectImg from './assets/1.jpg'; 
import Badge from './Components/Badge';
import ActionLink from './Components/ActionLink';
import SkillBar from './Components/SkillBar';
import { SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTailwindcss } from 'react-icons/si';

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
      degree: 'B.Sc. in Computer Science',
      institution: 'ABC University',
      year: '2019 - 2023',
      details: 'Graduated with First Class Honors, focusing on web development and data structures.',
    },
  ];

  const experience = [
    {
      role: 'Frontend Developer Intern',
      company: 'Tech Solutions Ltd.',
      period: 'Jan 2023 - May 2023',
      details: 'Developed UI components using React and collaborated in agile sprints.',
    },
  ];


  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'A full-featured e-commerce site using MERN stack with payment integration.',
      image: projectImg,
      live: '#',
      github: '#',
      stack: ['React', 'Node.js', 'MongoDB'],
      challenges: 'Building a complex cart system and integrating secure payment gateway.',
      future: 'Add product reviews, admin analytics, and marketing tools.',
    },
    {
      name: 'Roommate Finder',
      description: 'Find compatible roommates using preference matching.',
      image: projectImg,
      live: '#',
      github: '#',
      stack: ['React', 'Express'],
      challenges: 'Building filter logic and matching algorithm.',
      future: 'User ratings, real-time chat.',
    },
    {
      name: 'Portfolio Website',
      description: 'Responsive developer portfolio with animations.',
      image: projectImg,
      live: '#',
      github: '#',
      stack: ['Vite', 'React', 'GSAP'],
      challenges: 'Designing smooth scroll and mobile responsiveness.',
      future: 'Blog section, CMS integration.',
    },
  ];

  
  const downloadPDF = () => saveAs('/my-resume.pdf', 'sulayman-kobir-resume.pdf');

  return (
    <div className="scroll-smooth font-sans bg-gradient-to-br from-[#EAD8A4] via-white to-[#EAD8A4] text-[#1f2937] min-h-screen">
      {/* Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/50 backdrop-blur-xl shadow-xl rounded-full max-w-[1200px] w-[90%] px-8 py-4 flex justify-between items-center border border-[#F68537]/30">
        <img src={logo} alt="Logo" className="w-1/8 rounded-2xl" />
        <nav className="hidden md:flex gap-6 font-bold">
          {['Home', 'Projects',  'About', 'Contact'].map((label) => (
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
        ref={heroRef}
        className="pt-36 max-w-[1200px] min-h-screen  w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between "
      >
        <div ref={textRef} className="space-y-5 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello, I'm <span className="text-[#F68537]">Sulayman Kobir</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#d97706] h-8">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Creative developer crafting interactive experiences with React, NextJs, and Node.
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a
              href="https://github.com/sulayman-webmaster"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F68537] transition-transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/sk-100q"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F68537] transition-transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/sulayman.kobir.24245"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F68537] transition-transform hover:scale-125"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        <div
          ref={imgRef}
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-4 border-[#F68537] overflow-hidden mx-auto shadow-2xl hover:scale-110 transition-transform"
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
        className="relative min-h-screen w-full bg-white text-gray-800 flex items-center justify-center px-6 py-20 overflow-hidden"
      >
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
        <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Player autoplay loop src={devAnimation} className="w-full max-w-md" />
          </div>
          <div>
            <h2 className="text-5xl font-extrabold text-[#F68537] mb-2">About Me</h2>
            <p className="text-gray-500 text-lg mb-10">Who I am, what I do, and what I love.</p>
            <div className="space-y-10 text-base md:text-lg leading-relaxed">
              <div className="flex gap-4 items-start">
                <FaLaptopCode className="text-2xl text-[#F68537] mt-1" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">My Journey</h4>
                  <p>
                    I started my programming journey out of curiosity and quickly fell in love with
                    development. From static HTML pages to full-stack MERN apps, I’ve grown into a
                    confident and capable developer.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaLightbulb className="text-2xl text-[#F68537] mt-1" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">What I Enjoy</h4>
                  <p>
                    I love transforming ideas into interactive experiences. Clean design, reusable
                    components, and performant code are what I strive for in every project.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaBicycle className="text-2xl text-[#F68537] mt-1" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Outside the Code</h4>
                  <p>
                    When I’m not coding, I enjoy biking, sketching, and football. These passions fuel
                    my creativity and help me maintain balance and focus.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaUserTie className="text-2xl text-[#F68537] mt-1" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">My Approach</h4>
                  <p>
                    I believe in clean code, constant learning, and collaborative growth. I strive to
                    bring authenticity and energy into everything I build.
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
       <section id="projects" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-[100px]">
      <h2 className="text-5xl font-extrabold text-[#F68537] mb-12 text-center">Projects</h2>

      {/* Project 1 */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="p-6 flex-1">
          <h3 className="text-2xl font-bold text-[#F68537] mb-2">E-Commerce Platform</h3>
          <p className="text-gray-700 mb-4">
            A complete MERN stack e-commerce application with product filtering, shopping cart, payment integration, and admin dashboard.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge tech="React" />
            <Badge tech="NodeJS" />
            <Badge tech="Express" />
            <Badge tech="MongoDB" />
            <Badge tech="Redux" />
            <Badge tech="Tailwind" />
          </div>
          <div className="flex gap-4">
            <ActionLink href="https://ecommerce.example.com" label="Live Site" icon={<FaExternalLinkAlt />} />
            <ActionLink href="https://github.com/yourusername/ecommerce" label="GitHub" icon={<FaGithub />} outline />
          </div>
        </div>
        <img
          src="/images/ecommerce.jpg"
          alt="E-Commerce Project"
          className="w-full md:w-[40%] h-60 object-cover"
        />
      </div>

      {/* Project 2 */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="p-6 flex-1">
          <h3 className="text-2xl font-bold text-[#F68537] mb-2">Roommate Finder Web App</h3>
          <p className="text-gray-700 mb-4">
            A social app to find compatible roommates using location filters, preferences, chat, and like system.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge tech="React" />
            <Badge tech="NodeJS" />
            <Badge tech="Express" />
            <Badge tech="MongoDB" />
            <Badge tech="Tailwind" />
          </div>
          <div className="flex gap-4">
            <ActionLink href="https://roommate.example.com" label="Live Site" icon={<FaExternalLinkAlt />} />
            <ActionLink href="https://github.com/yourusername/roommate-finder" label="GitHub" icon={<FaGithub />} outline />
          </div>
        </div>
        <img
          src="/images/roommate.jpg"
          alt="Roommate Finder"
          className="w-full md:w-[40%] h-60 object-cover"
        />
      </div>

      {/* Project 3 */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 flex-1">
          <h3 className="text-2xl font-bold text-[#F68537] mb-2">Portfolio Website</h3>
          <p className="text-gray-700 mb-4">
            A modern personal portfolio with light/dark themes, smooth animations, and responsive sections for showcasing work.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge tech="NextJS" />
            <Badge tech="Tailwind" />
            <Badge tech="React" />
          </div>
          <div className="flex gap-4">
            <ActionLink href="https://portfolio.example.com" label="Live Site" icon={<FaExternalLinkAlt />} />
            <ActionLink href="https://github.com/yourusername/portfolio" label="GitHub" icon={<FaGithub />} outline />
          </div>
        </div>
        <img
          src="/images/portfolio.jpg"
          alt="Portfolio Website"
          className="w-full md:w-[40%] h-60 object-cover"
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
