import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import speakerImg from "../assets/speaker 1.PNG";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const secRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-header-top",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: ".about-header-top", start: "top 82%" },
        }
      );
      gsap.fromTo(
        ".about-speaker-img",
        { opacity: 0, y: 80 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: ".about-speaker-img", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".about-speaker-badge",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".about-speaker-badge", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".about-bio-card",
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.8,
          scrollTrigger: { trigger: ".about-bio-card", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".about-stat-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12,
          scrollTrigger: { trigger: ".about-stats-row", start: "top 85%" },
        }
      );
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="about" ref={secRef}>
      
      {/* ── Top Header ── */}
      <div className="about-header-top">
        <p className="about-eyebrow">ABOUT</p>
        <h2 className="about-big-text">MINDFULPATH</h2>
      </div>

      {/* ── Middle Area: Bio, Speaker, Badge ── */}
      <div className="about-middle-area">
        
        {/* Left: Bio Card */}
        <div className="about-left-col">
          <div className="about-bio-card">
            <h3 className="bio-card-heading">
              Guiding Minds,
              <br />
              <span className="bio-card-highlight">Empowering lives</span>
            </h3>
            <p className="bio-card-text">
              A mentor with deep life experience and a heart-driven mission,
              Shahla has guided 150+ individuals to rewrite their stories within
              just 2 years. Using globally accepted mindpower tools, guided wisdom,
              and the power of faith, she empowers people to rise from pain to
              purpose, from struggle to strength, and from dreams to lasting success.
            </p>
            <p className="bio-card-text" style={{ marginTop: "12px" }}>
              Her approach seamlessly combines practical, disciplined mindset tools with deep spiritual insights. Whether you are battling self-doubt, seeking clarity in your career, or striving for a higher quality of life across your health, wealth, and relationships, Shahla provides a highly personalized roadmap to help you unlock your true potential and achieve your ultimate greatness.
            </p>
          </div>
        </div>

        {/* Center: Speaker Image & Badge */}
        <div className="about-speaker-wrap">
          <div className="about-speaker-glow" />
          <img
            src={speakerImg}
            alt="Shahla C"
            className="about-speaker-img"
            draggable={false}
          />
          
          <div className="about-speaker-info">
            <div className="about-speaker-badge">
              <span>Shahla.c</span>
            </div>
            <p className="about-speaker-title">
              GLOBAL MIND COACH &amp;
              <br />
              LIFE TRANSFORMATION MENTOR
            </p>
          </div>
        </div>

      </div>

      {/* ── Stats Row ── */}
      <div className="about-stats-row">
        <div className="about-stat-card">
          <div className="stat-icon-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8fff8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div>
            <h4 className="stat-title">Deep Experience</h4>
            <p className="stat-desc">Guided 150+ individuals within just 2 years</p>
          </div>
        </div>

        <div className="about-stat-card">
          <div className="stat-icon-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8fff8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <h4 className="stat-title">Heart-Driven Mission</h4>
            <p className="stat-desc">Empowering lives from pain to purpose</p>
          </div>
        </div>

        <div className="about-stat-card about-stat-card--cta">
          <div>
            <h4 className="stat-title">Your Transformation is Possible</h4>
            <p className="stat-cta-text">And it starts now.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
