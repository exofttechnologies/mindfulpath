import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonial.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Aisha R.",
    role: "Teacher",
    text: "Shahla's mentoring completely shifted my mindset. I was stuck in a rut, and her faith-driven approach gave me the strength to overcome my past trauma and find my true purpose.",
  },
  {
    id: 2,
    name: "David K.",
    role: "Team Lead",
    text: "The Mindful Mastery program was life-changing. I now have the emotional intelligence to lead my team effectively and approach challenges with clarity rather than stress.",
  },
  {
    id: 3,
    name: "Sarah M.",
    role: "Entrepreneur",
    text: "Her guided wisdom and practical tools empowered me to rise from my struggles. Within weeks, I saw a massive transformation in my relationships and my business.",
  },
];

export default function Testimonial() {
  const secRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testi-header-text",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: ".testi-header-text", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".testi-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2,
          scrollTrigger: { trigger: ".testi-grid", start: "top 80%" },
        }
      );
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonial-section" id="testimonials" ref={secRef}>
      <div className="testi-inner">
        <p className="testi-eyebrow">SUCCESS STORIES</p>
        <h2 className="testi-header-text">
          Stories of <span className="testi-highlight">Transformation</span>
        </h2>
        
        <div className="testi-grid">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.id}>
              <div className="quote-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#c9a84c">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.name.charAt(0)}</div>
                <div className="testi-meta">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
