import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { artists } from "../data/artists";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "Meet the artists of Madiq Empire — distinctive voices shaping the sound and identity of a new generation.",
  openGraph: {
    title: "Our Artists — Madiq Empire",
    description:
      "Meet the artists shaping the sound and identity of a new generation.",
    url: "/artists",
  },
};
export default function ArtistsPage() {
  return (
    <main className="artists-directory">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="/" className="logo">
          <span className="logo-mark">M</span>

          <span className="logo-text">
            MADIQ
            <small>EMPIRE</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="/">HOME</a>
          <a href="/artists" className="nav-active">ARTISTS</a>
          <a href="/music">MUSIC</a>
          <a href="/#media">MEDIA</a>
          <a href="/#about">ABOUT</a>
        </div>

        <a href="/#contact" className="nav-button">
          CONTACT
        </a>

        <details className="mobile-menu">
          <summary
            className="menu-toggle"
            aria-label="Open navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </summary>

          <div className="mobile-nav-links">
            <a href="/">HOME</a>
            <a href="/artists" className="nav-active">ARTISTS</a>
            <a href="/music">MUSIC</a>
            <a href="/#media">MEDIA</a>
            <a href="/#about">ABOUT</a>
            <a href="/#contact">CONTACT</a>
          </div>
        </details>
      </nav>

      {/* PAGE HEADER */}
      <section className="artists-directory-hero">
        <div className="artists-directory-content">
          <Link href="/" className="artist-back">
  ← BACK TO MADIQ EMPIRE
</Link>

          <div className="section-label">
            MADIQ EMPIRE
          </div>

          <h1>OUR ARTISTS</h1>

          <p>
            Artists shaping the sound and identity of a new generation.
          </p>
          <div className="directory-scroll-indicator">
  <span>SCROLL TO EXPLORE</span>
  <span className="scroll-line"></span>
</div>
        </div>
      </section>

      {/* ARTIST GRID */}
      <section className="section artists-directory-section">
        <div className="section-header">
          <div className="section-label">
            THE ROSTER
          </div>

          <span className="artist-section-note">
            {artists.length} ARTISTS
          </span>
        </div>

        <div className="roster-signature">
  <span>MADIQ EMPIRE</span>
  <span>EST. 2023</span>
</div>

        <div className="artists-directory-grid">
          {artists.map((artist) => (
            <Link
              href={`/artists/${artist.slug}`}
              className="artist-directory-card"
              key={artist.slug}
            >
              <div className="artist-directory-image">
                <div className="artist-directory-index">
  {String(artists.indexOf(artist) + 1).padStart(2, "0")}
</div>
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />

                <div className="artist-image-overlay" />

                <div className="artist-directory-info">
                  <strong>{artist.name}</strong>
                  <span>{artist.role}</span>
                </div>

                <div className="card-arrow">↗</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* BACK TO TOP */}
<div className="artists-directory-top">
  <a href="#">↑ BACK TO TOP</a>
</div>

<Footer />

</main>
  );
}