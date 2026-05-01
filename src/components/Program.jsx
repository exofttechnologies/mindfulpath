import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Program.css";
import poster1 from "../assets/program poster 1.jpeg";
import poster2 from "../assets/program poster 2.jpeg";
import poster3 from "../assets/program poster 3.jpeg";
import poster4 from "../assets/program poster 4.jpeg";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    id: "mindful-mastery",
    image: poster1,
    title: "MINDFUL MASTERY",
    desc: "Build mental clarity, emotional balance, and a growth-oriented mindset.",
  },
  {
    id: "leadership-lab",
    image: poster2,
    title: "LEADERSHIP LAB",
    desc: "Develop authentic leadership skills to inspire, influence, and create meaningful impact.",
  },
  {
    id: "life-transformation",
    image: poster3,
    title: "LIFE TRANSFORMATION",
    desc: "Break through limiting beliefs and create a life aligned with your purpose.",
  },
  {
    id: "global-impact",
    image: poster4, 
    title: "GLOBAL IMPACT",
    desc: "Equip yourself to make a positive impact in your community and the world.",
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
        ".card",
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
          <div className="card" key={prog.id} id={prog.id}>
            <div className="card__img-wrapper">
              <img src={prog.image} alt={prog.title} className="card__poster" />
            </div>
            <div className="card__content">
              <p className="card__title">{prog.title}</p>
              <p className="card__description">{prog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
