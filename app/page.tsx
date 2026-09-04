"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { artists } from "./data/artists";
import Footer from "./components/Footer";
const media = [
  {
    title: "MIGRAINE",
    type: "INSTAGRAM REEL",
    image: "/images/media-migraine-1.webp",
    link: "https://www.instagram.com/reel/DRkiA5HjAfy/?igsi=MWowNHE3bzh5dDQ5Ng==",
  },
  {
    title: "FINALLY",
    type: "INSTAGRAM REEL",
    image: "/images/media-finally-2.webp",
    link: "https://www.instagram.com/reel/DPuGFxBDEVy/?igsi=M2hlMWxrbXFrY2Zq",
  },
  {
    title: "BRO",
    type: "INSTAGRAM REEL",
    image: "/images/media-bro-3.webp",
    link: "https://www.instagram.com/reel/DLurWyHs-wB/?igsi=MTYwb2FwNzRyamFjZg==",
  },
  {
    title: "PARABLES",
    type: "INSTAGRAM REEL",
    image: "/images/media-parables-4.webp",
    link: "https://www.instagram.com/reel/DN6IZrhDJkq/?igsi=Z3hsNjN1cnVoajM0",
  },
];

const news = [
  {
    category: "RELEASE",
    title: 'LORDMOON DROPS "BALANCE REMIX"',
    date: "2026",
    content:
      'Lordmoon returns with "Balance Remix", bringing a fresh interpretation of his laid-back sound with contemporary Afrobeats energy. The release continues his exploration of melody, atmosphere, and a distinctly personal approach to music.',
  },
  {
    category: "UPDATE",
    title: "BEHIND THE SCENES: STUDIO VIBES",
    date: "2026",
    content:
      "Inside the Madiq Empire creative process, the studio is where ideas begin to take shape. From melodies and rhythms to late-night conversations and unfinished recordings, every project starts with experimentation. This is where the sound of the Empire continues to evolve.",
  },
  {
    category: "NEWS",
    title: "MADIQ EMPIRE EXPANDS ITS VISION",
    date: "2026",
    content:
      "Madiq Empire is building beyond releases. The label is developing a creative ecosystem focused on artists, music, visual identity, and culture. The goal is simple: create an environment where distinctive artists can develop their sound and build something that lasts.",
  },
  {
    category: "FEATURE",
    title: "THE FUTURE OF INDEPENDENT MUSIC",
    date: "2026",
    content:
      "Independent music is changing rapidly. Artists now have more tools to create, distribute, promote, and connect directly with audiences than ever before. For Madiq Empire, independence means using that freedom to build artists and develop a sound without losing the identity that makes each artist different.",
  },
];

export default function Home() {
  const [selectedNews, setSelectedNews] = useState<(typeof news)[number] | null>(
    null
  );
  const [selectedLegal, setSelectedLegal] = useState<
  "privacy" | "terms" | null
>(null);

  return (
    <main>
      {/* NAVIGATION */}
      <nav className="navbar">
  <a href="#home" className="logo">
    <span className="logo-mark">M</span>

    <span className="logo-text">
      MADIQ
      <small>EMPIRE</small>
    </span>
  </a>

  <div className="nav-links">
    <a href="#home">HOME</a>
    <Link href="/artists">ARTISTS</Link>
    <a href="/music">MUSIC</a>
    <a href="#media">MEDIA</a>
    <a href="#about">ABOUT</a>
  </div>

  <a href="#contact" className="nav-button">
    CONTACT
  </a>

  <details className="mobile-menu">
    <summary className="menu-toggle" aria-label="Open navigation menu">
      <span></span>
      <span></span>
      <span></span>
    </summary>

    <div className="mobile-nav-links">
      <a href="#home">HOME</a>
      <Link href="/artists">ARTISTS</Link>
      <a href="/music">MUSIC</a>
      <a href="#media">MEDIA</a>
      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>
    </div>
  </details>
</nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-overlay" />
        
        <div className="hero-image">
    <Image
      src="/images/lordmoon-hero.webp"
      alt="Lordmoon"
      fill
      priority
      sizes="(max-width: 800px) 100vw, 50vw"
    />
  </div>

        <div className="hero-content">
          <p className="eyebrow">A MOVEMENT. A CULTURE. A LEGACY.</p>

          <h1>
            MADIQ
            <br />
            EMPIRE
          </h1>

          <div className="hero-line" />

          <p className="hero-subtitle">THE SOUND OF A NEW GENERATION</p>

          <div className="hero-buttons">
            <a href="https://open.spotify.com/playlist/39M8PYdghHT6FG4O2iJmsp?si=f5TpF7lVSTG5cKIBUBW6-w&utm_source=copy-link&pi=6b9BUiZoS2OFr" 
            target="_blank"
  rel="noopener noreferrer"
            className="button button-primary">
              LISTEN NOW <span>→</span>
            </a>

            <a href="https://www.instagram.com/reel/DD9FsxTo8pf/?igsi=MTVuYnN3bDlhbWl6bQ==" 
            target="_blank"
  rel="noopener noreferrer"
            className="button button-outline">
              WATCH VIDEO <span>▶</span>
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <span />
          SCROLL
        </div>
      </section>

      {/* LATEST RELEASE */}
<section id="music" className="section release-section">
  <div className="section-label">LATEST RELEASE</div>

  <div className="release">
    <div className="release-art">
      <Image
        src="/images/balance-remix.jpg"
        alt="Lordmoon — Balance Remix cover artwork"
        fill
        sizes="(max-width: 800px) 100vw, 50vw"
      />
    </div>

    <div className="release-info">
      <span className="tag">NEW SINGLE</span>

      <h2>BALANCE</h2>

      <h3>LORDMOON</h3>

      <p>
        Finding peace in the chaos.
        <br />
        Stream &quot;Balance&quot; on all platforms.
      </p>

      <div className="stream-buttons">
        <a
  href="https://open.spotify.com/album/47FrYiAYionGFUqEl1D8fL"
  target="_blank"
  rel="noopener noreferrer"
>
  ◉ SPOTIFY
</a>
        <a
  href="https://music.apple.com/us/song/balance-remix/6770332245"
  target="_blank"
  rel="noopener noreferrer"
>
  ♫ APPLE MUSIC
</a>
        <a
  href="https://youtu.be/mzzXNslETRQ?si=O-tkk_CJi5oYht5v"
  target="_blank"
  rel="noopener noreferrer"
>
  ▶ YOUTUBE
</a>
        <a
  href="https://www.deezer.com/en/album/985069661"
  target="_blank"
  rel="noopener noreferrer"
>
  ▶ DEEZER
</a>
      </div>
    </div>
  </div>
</section>

      {/* ARTISTS */}
<section id="artists" className="section artists-section">
  <div className="section-header">
    <div className="section-label">OUR ARTISTS</div>
    <Link href="/artists">VIEW ALL →</Link>
  </div>

  <div className="artists-grid">
    {artists.map((artist) => (
      <Link
  href={`/artists/${artist.slug}`}
  className="artist-card"
  key={artist.name}
>
        <div className="artist-image">
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            sizes="(max-width: 800px) 100vw, 33vw"
          />

          <div className="artist-image-overlay" />

          <div className="artist-name">
            <strong>{artist.name}</strong>
            <span>{artist.role}</span>
          </div>

          <div className="card-arrow">↗</div>
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* MEDIA */}
<section id="media" className="section">
  <div className="section-header">
    <div className="section-label">LATEST MEDIA</div>
    <a
  href="https://instagram.com/madiqempire"
  target="_blank"
  rel="noopener noreferrer"
>
  FOLLOW US →
</a>
  </div>

  <div className="media-grid">
    {media.map((item) => (
      <article className="media-card" key={item.title}>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="media-image"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 800px) 50vw, 25vw"
          />

          <div className="media-overlay" />
          <div className="play-button">▶</div>
        </a>

        <h3>{item.title}</h3>
        <p>{item.type}</p>
      </article>
    ))}
  </div>
</section>

      {/* ABOUT */}
<section id="about" className="about-section">
  <div className="about-image">
    <Image
      src="/images/madiq-logo.webp"
      alt="Madiq Empire"
      fill
      sizes="(max-width: 800px) 100vw, 50vw"
    />
  </div>

  <div className="about-content">
    <div className="section-label">THE EMPIRE</div>

    <h2>MORE THAN MUSIC. IT&apos;S A MOVEMENT.</h2>

    <p>
      Madiq Empire is an independent record label and creative force built
      around artists with something real to say.
    </p>

    <p>
      We discover, develop, and empower distinctive talent — giving artists
      the freedom, direction, and platform to turn their sound into
      something lasting.
    </p>

    <p>
      From the first idea to the finished record, we believe in building
      artists, shaping culture, and creating music that lives beyond the
      moment.
    </p>
    <a href="/artists" className="button button-outline">
  DISCOVER THE EMPIRE <span>→</span>
</a>
  </div>
</section>

      {/* JOURNAL */}
<section className="section journal-section">
  <div className="section-header">
    <div className="section-label">NEWS / JOURNAL</div>
  </div>

  <div className="news-grid">
    {news.map((item) => (
  <button
    type="button"
    className="news-card"
    key={item.title}
    onClick={() => setSelectedNews(item)}
  >
    <div className="news-card-top">
      <span>{item.category}</span>
      <strong>↗</strong>
    </div>

    <h3>{item.title}</h3>

    <p>{item.date}</p>
  </button>
))}
  </div>
</section>
{selectedNews && (
  <div
    className="journal-modal"
    onClick={() => setSelectedNews(null)}
  >
    <div
      className="journal-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="journal-modal-close"
        onClick={() => setSelectedNews(null)}
        aria-label="Close article"
      >
        ×
      </button>

      <div className="section-label">{selectedNews.category}</div>

      <h2>{selectedNews.title}</h2>

      <p className="journal-modal-date">{selectedNews.date}</p>

      <div className="journal-modal-body">
        <p>{selectedNews.content}</p>
      </div>
    </div>
  </div>
)}

{selectedLegal && (
  <div
    className="journal-modal"
    onClick={() => setSelectedLegal(null)}
  >
    <div
      className="journal-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="journal-modal-close"
        onClick={() => setSelectedLegal(null)}
        aria-label="Close legal information"
      >
        ×
      </button>

      <div className="section-label">
        {selectedLegal === "privacy" ? "PRIVACY" : "TERMS"}
      </div>

      <h2>
        {selectedLegal === "privacy"
          ? "PRIVACY POLICY"
          : "TERMS & CONDITIONS"}
      </h2>

      <p className="journal-modal-date">
        Last updated: September 2026
      </p>

      <div className="journal-modal-body">
        {selectedLegal === "privacy" ? (
          <>
            <p>
              Madiq Empire respects your privacy and is committed to
              protecting the information you provide when you interact
              with our website.
            </p>

            <p>
              We may collect information you voluntarily provide, such
              as your name or email address when you contact us. We use
              this information only for legitimate business,
              communication, and creative purposes.
            </p>

            <p>
              We do not sell or intentionally share your personal
              information with third parties for their own marketing
              purposes.
            </p>

            <p>
              Our website may contain links to external platforms such
              as Instagram and Spotify. Those platforms operate under
              their own privacy policies and terms.
            </p>

            <p>
              By using the Madiq Empire website, you acknowledge this
              policy. If you have questions about how your information
              is handled, you can contact us through the email provided
              on this website.
            </p>
          </>
        ) : (
          <>
            <p>
              By accessing and using the Madiq Empire website, you agree
              to use the website responsibly and in accordance with
              applicable laws.
            </p>

            <p>
              All music, artwork, photography, videos, branding, text,
              logos, and other original content published by Madiq
              Empire remain the property of their respective owners
              unless otherwise stated.
            </p>

            <p>
              You may view and share links to our content for personal
              and promotional purposes, but you may not reproduce,
              redistribute, modify, or commercially exploit our
              copyrighted material without permission.
            </p>

            <p>
              Links to third-party platforms are provided for
              convenience. Madiq Empire is not responsible for the
              content, policies, or practices of external websites.
            </p>

            <p>
              Madiq Empire reserves the right to update these terms,
              website content, or available services at any time.
              Continued use of the website after changes are published
              constitutes acceptance of the updated terms.
            </p>

            <p>
              For business, licensing, press, partnership, or other
              inquiries, please contact Madiq Empire using the official
              contact information provided on the website.
            </p>
          </>
        )}
      </div>
    </div>
  </div>
)}
<Footer />
</main>
  );
}