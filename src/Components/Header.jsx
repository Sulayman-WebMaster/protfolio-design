import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { saveAs } from 'file-saver';
import { gsap } from 'gsap';
import profileImg from '../assets/profile-image.jpg'; 

const Header = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const typingRef = useRef(null);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Frontend Developer | React Enthusiast | UI/UX Designer";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        duration: 1,
        opacity: 0,
        y: 60,
        ease: 'power3.out',
      });
      gsap.from(textRef.current, {
        duration: 1.4,
        x: -120,
        opacity: 0,
        delay: 0.3,
        ease: 'power2.out',
      });
      gsap.from(imgRef.current, {
        duration: 1.4,
        x: 120,
        opacity: 0,
        scale: 0.6,
        delay: 0.5,
        ease: 'power2.out',
      });
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

  const downloadPDF = () => {
    saveAs('/resume.pdf', 'My_Resume.pdf');
  };

  return (
    <div className="relative bg-gradient-to-br from-[#EAD8A4] via-white to-[#EAD8A4] min-h-screen w-full overflow-hidden">
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/50 backdrop-blur-xl shadow-xl rounded-[40px] max-w-[1200px] w-[90%] px-6 py-4 flex justify-between items-center border border-[#F68537]/30">
        <div className="text-[#F68537] font-extrabold text-2xl tracking-wide">S-KOBIR</div>
        <nav className="hidden md:flex gap-6 text-[#1f2937] text-base font-medium">
          {['/', '/about', '/projects', '/contact'].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                `relative transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#F68537] ${
                  isActive && path !== '/' ? 'font-bold underline' : ''
                }`
              }
            >
              {path === '/' ? 'Home' : path.replace('/', '')}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={downloadPDF}
          className="bg-[#F68537] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#d96f28] transition-transform hover:scale-105 shadow-lg"
        >
          Download CV
        </button>
      </header>

      <section
        ref={heroRef}
        className="pt-36 max-w-[1200px] w-[90%] mx-auto grid md:grid-cols-2 gap-10 items-center min-h-[90vh]"
      >
        <div ref={textRef} className="text-[#1f2937] space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            Hello, I'm <span className="text-[#F68537]">Sulayman Kobir</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#d97706] h-8">
            <span ref={typingRef}>{displayedText}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-gray-600 animate-slide-in-left mt-10">
            Creative developer crafting interactive experiences with React, animations, and elegant design.
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#1f2937] hover:text-[#F68537] transition-transform hover:scale-125">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#1f2937] hover:text-[#F68537] transition-transform hover:scale-125">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1f2937] hover:text-[#F68537] transition-transform hover:scale-125">
              <FaTwitter />
            </a>
          </div>
          <button className="mt-6 bg-[#F68537] text-white px-6 py-3 rounded-xl hover:bg-[#d96f28] transition-transform hover:scale-110 shadow-lg">
            Contact Me
          </button>
        </div>

        <div
          ref={imgRef}
          className="w-[420px] h-[520px] md:w-[500px] md:h-[600px] rounded-[30px] border-4 border-[#F68537] overflow-hidden mx-auto shadow-2xl hover:scale-110 transition-transform"
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover object-top animate-fade-in"
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
