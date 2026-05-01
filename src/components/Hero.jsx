import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";
import person from "../assets/person.PNG";
import concertBg from "../assets/concert-bg.jpg";


export default function Hero() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const glowRef = useRef(null);
  const bgTextRef = useRef(null);


  /* ── Entrance animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-bg-image",
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 }
      )
        .fromTo(
          glowRef.current,
          { opacity: 0, scale: 0.6 },
          { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
          "-=1.2"
        )
        .fromTo(
          bgTextRef.current,
          { opacity: 0, y: 40, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0 },
          "-=1.0"
        )
        .fromTo(
          imgRef.current,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1.0 },
          "-=0.8"
        )
        .fromTo(
          ".hero-nav a",
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.6"
        )
        .fromTo(
          ".hero-top-right",
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          ".speaker-section",
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".speaker-badge",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" },
          "-=0.3"
        )
        .fromTo(
          ".sub-heading",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".glass-border",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);



  return (
    <section className="hero" ref={heroRef}>
      {/* ── Background Layers ── */}
      <img
        src={concertBg}
        alt=""
        className="hero-bg-image"
        draggable={false}
      />
      <div className="hero-bg-overlay" />



      {/* ── Orange Glow Circle ── */}
      <div className="gradient-circle" ref={glowRef} />

      {/* ── Big Background Text ── */}
      <h1 className="bg-text" ref={bgTextRef}>
        MINDFULPATH
      </h1>

      {/* ── Navigation ── */}
      <nav className="hero-nav">
        <a href="#home">HOME</a>
        <a href="#program">PROGRAM</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <div className="hero-top-right">
        <span>MINDFULPATH 20H</span>
      </div>

      {/* ── Person Image ── */}
      <img
        ref={imgRef}
        src={person}
        alt="Speaker"
        className="hero-img"
        draggable={false}
      />

      {/* ── Speaker Section ── */}
      <div className="speaker-section">
        <div className="speaker-badge">
          <span className="speaker-name">Shahla.c</span>
        </div>
        <p className="speaker-title">
          International mindpower trainer,
          <br />
          Life transformation mentor
        </p>
      </div>

      {/* ── Sub Heading ── */}
      <div className="sub-heading">
        <h2>Guiding Minds, Empowering lives</h2>
      </div>

      {/* ── Glass Border ── */}
      <div className="glass-border" />

      {/* ── Bottom accent star ── */}
      <span className="bottom-star">✦</span>
    </section>
  );
}
