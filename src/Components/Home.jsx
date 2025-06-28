// Home.jsx
import React, { useEffect, useRef } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { gsap } from 'gsap';
import projectImg from '../assets/1.jpg';
import profileImg from '../assets/profile-image.jpg';

const Home = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, { opacity: 0, y: -60, duration: 1 });
    gsap.from(profileRef.current, { opacity: 0, x: -60, duration: 1 });
    gsap.from(aboutRef.current, { opacity: 0, y: 60, duration: 1 });
    gsap.from(skillsRef.current, { opacity: 0, y: 60, duration: 1, delay: 0.2 });
    gsap.from(projectsRef.current, { opacity: 0, y: 60, duration: 1, delay: 0.4 });
    gsap.from(contactRef.current, { opacity: 0, y: 60, duration: 1, delay: 0.6 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#EAD8A4] via-white to-[#EAD8A4] text-[#1f2937]">
     

      {/* About Section */}
      <section id="about" ref={aboutRef} className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-[#F68537] mb-10">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Hi! I'm Sulayman Kobir, a passionate frontend developer who started programming during my high school days.
          I enjoy turning designs into responsive, functional interfaces using React and modern tools. I thrive on crafting interactive UIs.
          <br /><br />
          Outside coding, I love nature, digital art, and exploring new ideas to blend creativity with technology.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="bg-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-[#F68537] mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            <p>React, HTML, CSS, Tailwind, JavaScript, GSAP</p>
          </div>
          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            <p>Node.js, Express, Firebase, MongoDB</p>
          </div>
          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Tools</h3>
            <p>Git, GitHub, VS Code, Postman, Figma</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-[#F68537] mb-12">Projects</h2>
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform">
              <img src={projectImg} alt={`Project ${num}`} className="w-full md:w-1/3 h-64 object-cover" />
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#F68537] mb-3">Project {num}</h3>
                <p className="text-gray-600 mb-4">Brief description of Project {num}. Showcasing React and modern UI/UX.</p>
                <a
                  href="#"
                  className="inline-block text-white bg-[#F68537] px-4 py-2 rounded hover:bg-[#d96f28] w-fit"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 px-6 bg-[#F68537]/10">
        <h2 className="text-4xl font-bold text-center text-[#F68537] mb-10">Contact Me</h2>
        <div className="max-w-xl mx-auto text-center space-y-4 text-lg text-gray-700">
          <p className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-[#F68537]" /> sulayman.kobir@gmail.com
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-[#F68537]" /> +880 1234 567890
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaWhatsapp className="text-[#25D366]" /> +880 1234 567890
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
