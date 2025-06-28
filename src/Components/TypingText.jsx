import { useEffect, useRef } from "react";
import gsap from "gsap";

const TypingText = () => {
  const textRef = useRef(null);
  const phrases = [
    "Frontend Developer | React Enthusiast",
   
  ];

  useEffect(() => {
    const el = textRef.current;
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    phrases.forEach((phrase) => {
      const chars = phrase.split("");

      // Typing animation
      chars.forEach((_, i) => {
        tl.to(el, {
          textContent: phrase.slice(0, i + 1),
          duration: 0.05,
          ease: "none",
        });
      });

      // Pause when full text is typed
      tl.to({}, { duration: 1 });

      // Deleting animation
      chars.reverse().forEach((_, i) => {
        tl.to(el, {
          textContent: phrase.slice(0, chars.length - i - 1),
          duration: 0.03,
          ease: "none",
        });
      });

      tl.to({}, { duration: 0.5 }); // slight pause before next phrase
    });
  }, []);

  return (
    <h2 className="text-xl md:text-2xl font-semibold text-[#d97706] h-8">
      <span ref={textRef}></span>
      <span className="animate-pulse">|</span>
    </h2>
  );
};

export default TypingText;
