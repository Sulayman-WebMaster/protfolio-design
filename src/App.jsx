import React, { useEffect, useRef, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaLaptopCode,
  FaLightbulb,
  FaBicycle,
  FaUserTie,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { saveAs } from 'file-saver';
import { gsap } from 'gsap';
import { Player } from '@lottiefiles/react-lottie-player';

import profileImg from './assets/profile-image.jpg'; // Replace with your image path
import logo from './assets/logo.png'; // Replace with your logo path
import devAnimation from './assets/developer-animation.json'; // Replace with your Lottie JSON path
import projectImg from './assets/1.jpg'; // Replace with your project image path

const App = () => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Frontend Developer | React Enthusiast';

  // Typing animation & entrance animations
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

  // Animate SVG paths and about text
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

  // Dummy skills data
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 70 },
  ];

  // Dummy education data
  const education = [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'ABC University',
      year: '2019 - 2023',
      details: 'Graduated with First Class Honors, focusing on web development and data structures.',
    },
  ];

  // Dummy experience data
  const experience = [
    {
      role: 'Frontend Developer Intern',
      company: 'Tech Solutions Ltd.',
      period: 'Jan 2023 - May 2023',
      details: 'Developed UI components using React and collaborated in agile sprints.',
    },
  ];

  // Dummy projects data
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

  // Resume download handler
  const downloadPDF = () => saveAs('/my-resume.pdf', 'sulayman-kobir-resume.pdf');

  return (
    <div className="scroll-smooth font-sans bg-gradient-to-br from-[#EAD8A4] via-white to-[#EAD8A4] text-[#1f2937] min-h-screen">
      {/* Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/50 backdrop-blur-xl shadow-xl rounded-full max-w-[1200px] w-[90%] px-8 py-4 flex justify-between items-center border border-[#F68537]/30">
        <img src={logo} alt="Logo" className="w-10 rounded-2xl" />
        <nav className="hidden md:flex gap-6 font-bold">
          {['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((label) => (
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
        className="pt-36 max-w-[1200px] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between min-h-[90vh]"
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
            Creative developer crafting interactive experiences with React, animations, and elegant
            design.
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
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F68537] transition-transform hover:scale-125"
            >
              <FaTwitter />
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
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-[100px]">
        <h2 className="text-5xl font-extrabold text-[#F68537] mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map(({ name, level }) => (
            <div key={name} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-xl mb-2">{name}</h3>
              <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-4 bg-[#F68537] rounded-full transition-all duration-700"
                  style={{ width: `${level}%` }}
                />
              </div>
              <p className="text-right mt-1 text-gray-600">{level}%</p>
            </div>
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

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-[100px]">
        <h2 className="text-5xl font-extrabold text-[#F68537] mb-12 text-center">Experience</h2>
        {experience.map(({ role, company, period, details }, idx) => (
          <div key={idx} className="bg-white rounded-lg p-6 shadow-md mb-6">
            <h3 className="font-semibold text-xl">{role}</h3>
            <p className="text-gray-600">{company}</p>
            <p className="text-gray-600 italic">{period}</p>
            <p className="mt-2">{details}</p>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-[100px]">
        <h2 className="text-5xl font-extrabold text-[#F68537] mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(
            ({ name, description, image, live, github, stack, challenges, future }, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={image} alt={name} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-semibold text-xl mb-2">{name}</h3>
                  <p className="flex-grow mb-4">{description}</p>
                  <button
                    onClick={() => alert(
                      `Stack: ${stack.join(', ')}\n\nChallenges: ${challenges}\n\nFuture: ${future}\n\nLive: ${live}\nGitHub: ${github}`
                    )}
                    className="mt-auto bg-[#F68537] text-white px-4 py-2 rounded hover:bg-[#d96f28] transition"
                  >
                    View More / Details
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-[100px] bg-white rounded-lg shadow-md mb-20"
      >
        <h2 className="text-5xl font-extrabold text-[#F68537] mb-12 text-center">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center text-gray-700">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#F68537] text-3xl" />
            <div>
              <h4 className="font-semibold text-xl">Email</h4>
              <a href="mailto:your.email@example.com" className="hover:text-[#F68537]">
                your.email@example.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#F68537] text-3xl" />
            <div>
              <h4 className="font-semibold text-xl">Phone</h4>
              <a href="tel:+1234567890" className="hover:text-[#F68537]">
                +1 234 567 890
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-[#F68537] text-3xl" />
            <div>
              <h4 className="font-semibold text-xl">WhatsApp</h4>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="hover:text-[#F68537]">
                +1 234 567 890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F68537] text-white text-center py-6">
        <p>© {new Date().getFullYear()} Sulayman Kobir. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
