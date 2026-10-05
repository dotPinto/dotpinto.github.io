import { useEffect, useRef, useState } from "react";
import { profile } from "./data/profile.js";

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="arrow-icon"
    >
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  ) : (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="arrow-icon"
    >
      <path d="M2.5 8h11m-4.5-4.5L13.5 8 9 12.5" />
    </svg>
  );
}

function UpArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="arrow-icon"
    >
      <path d="M8 13.5v-11m-4.5 4.5L8 2.5l4.5 4.5" />
    </svg>
  );
}

function App() {
  const footerRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowBackToTop(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>
          <img className="brand-mark" src="/rp-mark.svg" alt="" />
          {profile.name}
          <span className="wordmark-dot">.</span>
        </a>
        <nav className="main-nav" aria-label="Navigazione principale">
          <a href="#about">Chi sono</a>
          <a href="#journal">Articoli</a>
          <a className="nav-contact" href="#contact">
            Contatti <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero page-grid" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" />
              BENVENUTO NEL MIO PICCOLO SPAZIO
            </p>
            <h1 id="hero-title">
              Ciao, sono
              <br />
              <span>{profile.name}</span>
              <span className="hero-spark" aria-hidden="true">
                ✳
              </span>
            </h1>
            <ul className="hero-titles" aria-label="Profilo professionale">
              {profile.heroTitles.map((title) => (
                <li key={title}>{title}</li>
              ))}
            </ul>
            <a
              className="text-link hero-github-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowIcon diagonal />
            </a>
          </div>
          <div className="hero-bottom">
            <span>PERSONE, IDEE & ALTRE COSE BELLE</span>
            <a href="#about" aria-label="Scopri di più">
              SCORRI PER ESPLORARE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 — UN PO' SU DI ME</p>
            <span className="section-mark" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="about-content">
            <h2>
              Le cose belle
              <br />
              iniziano con
              <span> curiosità.</span>
            </h2>
            <div className="about-copy">
              <p>{profile.bio}</p>
              <div className="about-meta">
                <span className="meta-label">ATTUALMENTE QUI</span>
                <span className="location">
                  <span aria-hidden="true">↗</span> {profile.location}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="journal-section" id="journal">
          <div className="section-wrap">
            <div className="journal-heading">
              <div>
                <p className="eyebrow">02 — APPROFONDIMENTI</p>
                <h2>Articoli<span>.</span></h2>
              </div>
              <p className="journal-caption">
                Traguardi e cose nuove
                <br />
                che imparo lungo la strada.
              </p>
            </div>
            <div className="article-list">
              {profile.articles.map((article) => (
                <article className="article-card" key={article.title}>
                  <span className="article-category">{article.category}</span>
                  <div className="article-main">
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <ul className="article-highlights">
                      {article.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    {article.context && (
                      <p className="article-context">{article.context}</p>
                    )}
                  </div>
                  <span className="article-date">{article.date}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">03 — CI SENTIAMO?</p>
          <div className="contact-content">
            <h2>
              Qui trovi qualcosa
              <br />
              in più su <span>di me.</span>
            </h2>
            <div className="contact-links">
              <a
                className="contact-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <span className="contact-link-note">Codice & progetti</span>
                <ArrowIcon diagonal />
              </a>
              <a
                className="contact-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <span className="contact-link-note">Connessioni professionali</span>
                <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>

        {/* Promemoria futuro: prima di aggiungere form, analytics o cookie non essenziali,
            verificare privacy e consenso; valutare una licenza per il codice se si desidera
            permetterne il riuso. */}
        <section
          className="email-contact section-wrap"
          id="email-contact"
          aria-labelledby="email-contact-title"
          hidden
        >
          <p className="eyebrow">CONTATTO DIRETTO</p>
          <div className="email-contact-card">
            <h2 id="email-contact-title">Scrivimi</h2>
            <p>
              Il contatto email sarà aggiunto qui.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer" ref={footerRef}>
        <div className="footer-brand">
          <a className="wordmark footer-wordmark" href="#home">
            <img className="brand-mark" src="/rp-mark.svg" alt="" />
            {profile.name}
            <span className="wordmark-dot">.</span>
          </a>
        </div>
        <span>FATTO CON CURIOSITÀ, IN ITALIA.</span>
        <small className="ai-disclosure">
          Sviluppato con il supporto parziale di strumenti di IA.
        </small>
      </footer>
      <a
        className="back-to-top"
        href="#home"
        aria-label="Torna all'inizio"
        hidden={!showBackToTop}
      >
        <UpArrowIcon />
      </a>
    </>
  );
}

export default App;
