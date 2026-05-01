import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Program.css";


gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    id: "mindful-mastery",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="prog-icon-svg">
        <path d="M26 6C26 6 14 17 14 27C14 33.63 19.37 39 26 39C32.63 39 38 33.63 38 27C38 17 26 6 26 6Z" fill="#c9a84c" opacity="0.9"/>
        <path d="M26 39V47" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M18 43C18 43 22 41 26 43" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="26" cy="27" r="5" fill="#0f0f0f" opacity="0.5"/>
      </svg>
    ),
    name: "MINDFUL MASTERY",
    duration: "6-Week Program",
    desc: "Build mental clarity, emotional balance, and a growth-oriented mindset.",
    features: ["Mindset Transformation", "Emotional Intelligence", "Personal Growth Strategies"],
    accent: "#c9a84c",
  },
  {
    id: "leadership-lab",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="prog-icon-svg">
        <circle cx="26" cy="14" r="7" fill="#c9a84c"/>
        <circle cx="10" cy="22" r="5.5" fill="#c9a84c" opacity="0.65"/>
        <circle cx="42" cy="22" r="5.5" fill="#c9a84c" opacity="0.65"/>
        <path d="M4 44C4 37 9.37 32 16 32H36C42.63 32 48 37 48 44" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    name: "LEADERSHIP LAB",
    duration: "8-Week Program",
    desc: "Develop authentic leadership skills to inspire, influence, and create meaningful impact.",
    features: ["Leadership Development", "Communication Excellence", "Decision-Making Mastery"],
    accent: "#c9a84c",
  },
  {
    id: "life-transformation",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="prog-icon-svg">
        <path d="M26 44L8 26C3.5 21.5 3.5 14 10 10C16.5 6 22 10 26 15C30 10 36.5 6 42 10C48.5 14 48.5 21.5 44 26L26 44Z" fill="#c9a84c"/>
      </svg>
    ),
    name: "LIFE TRANSFORMATION",
    duration: "12-Week Program",
    desc: "Break through limiting beliefs and create a life aligned with your purpose.",
    features: ["Purpose Discovery", "Habit Transformation", "Confidence Building"],
    accent: "#c9a84c",
  },
  {
    id: "global-impact",
    icon: (
      <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="prog-icon-svg">
        <circle cx="26" cy="26" r="20" stroke="#c9a84c" strokeWidth="2.5"/>
        <ellipse cx="26" cy="26" rx="9" ry="20" stroke="#c9a84c" strokeWidth="2"/>
        <path d="M6 26H46" stroke="#c9a84c" strokeWidth="2"/>
        <path d="M8.5 17H43.5" stroke="#c9a84c" strokeWidth="1.5" opacity="0.6"/>
        <path d="M8.5 35H43.5" stroke="#c9a84c" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
    name: "GLOBAL IMPACT",
    duration: "10-Week Program",
    desc: "Equip yourself to make a positive impact in your community and the world.",
    features: ["Social Impact Strategies", "Community Leadership", "Legacy Building"],
    accent: "#c9a84c",
  },
];

export default function Program() {
  const secRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".prog-title",
        { opacity: 0, y: 70, scale: 0.92 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1.2,
          scrollTrigger: { trigger: ".prog-title", start: "top 82%" },
        }
      );
      gsap.fromTo(
        ".prog-subtitle-row",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: ".prog-subtitle-row", start: "top 82%" },
        }
      );
      gsap.fromTo(
        ".program-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15,
          scrollTrigger: { trigger: ".programs-grid", start: "top 78%" },
        }
      );
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="program-section" id="program" ref={secRef}>


      <div className="program-header">
        <h2 className="prog-title">PROGRAM</h2>
        <div className="prog-subtitle-row">
          <span className="prog-deco">✦</span>
          <p className="prog-subtitle">
            TRANSFORMATIVE PROGRAMS DESIGNED TO AWAKEN MINDS,{" "}
            <br className="prog-br" />
            EMPOWER LIVES, AND INSPIRE LASTING CHANGE.
          </p>
          <span className="prog-deco">✦</span>
        </div>
      </div>

      <div className="programs-grid">
        {programs.map((prog) => (
          <div className="program-card" key={prog.id} id={prog.id}>
            <div className="card-poster-top">
              <div className="card-icon-box">{prog.icon}</div>
              <span className="card-duration-badge">{prog.duration}</span>
            </div>
            <h3 className="card-name">{prog.name}</h3>
            <div className="card-rule" />
            <p className="card-desc">{prog.desc}</p>
            <ul className="card-features">
              {prog.features.map((f) => (
                <li key={f}>
                  <span className="card-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className="card-enroll-btn"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Enroll Now <span className="btn-arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
