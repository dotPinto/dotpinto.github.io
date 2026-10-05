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

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>
          {profile.name}
          <span className="wordmark-dot">.</span>
        </a>
        <nav className="main-nav" aria-label="Navigazione principale">
          <a href="#about">Chi sono</a>
          <a href="#journal">Appunti</a>
          <a className="nav-contact" href="#contact">
            Facciamo due chiacchiere <ArrowIcon diagonal />
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
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#about">
                Piacere di conoscerti <ArrowIcon />
              </a>
              <a
                className="text-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowIcon diagonal />
              </a>
            </div>
          </div>
          <div className="hero-note" aria-label="Nota personale">
            <span className="note-star" aria-hidden="true">
              ✳
            </span>
            <p>
              idee in
              <br />
              movimento,
              <br />
              sempre.
            </p>
            <span className="note-index">NOTE PERSONALI · N. 001</span>
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
                <p className="eyebrow">02 — DAL TACCUINO</p>
                <h2>Appunti sparsi<span>.</span></h2>
              </div>
              <p className="journal-caption">
                Idee, progetti e piccole cose
                <br />
                da ricordare.
              </p>
            </div>
            <div className="article-list">
              {profile.articles.map((article, index) => (
                <article className="article-card" key={article.title}>
                  <span className="article-number">
                    0{index + 1}
                    <span aria-hidden="true">/</span>
                  </span>
                  <div className="article-main">
                    <span className="article-category">{article.category}</span>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
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
              Ogni bella idea
              <br />
              inizia con un <span>ciao.</span>
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
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home">
          {profile.name}
          <span className="wordmark-dot">.</span>
        </a>
        <span>FATTO CON CURIOSITÀ, IN ITALIA.</span>
        <a className="back-to-top" href="#home">
          TORNA SU ↑
        </a>
      </footer>
    </>
  );
}

export default App;
