"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { releases } from "../data/music";
import Footer from "../components/Footer";
export default function MusicPage() {
  const [typeFilter, setTypeFilter] = useState("ALL");
  const [artistFilter, setArtistFilter] = useState("ALL");

  const filteredReleases = releases.filter((release) => {
    const matchesType =
      typeFilter === "ALL" || release.type === typeFilter;

    const matchesArtist =
      artistFilter === "ALL" || release.artistSlug === artistFilter;

    return matchesType && matchesArtist;
  });

  return (
    <main className="music-page">
      {/* NAVIGATION */}
      <nav className="navbar">
        <Link href="/" className="logo">
          <span className="logo-mark">M</span>
          <span className="logo-text">
            MADIQ
            <small>EMPIRE</small>
          </span>
        </Link>

        <div className="nav-links">
          <Link href="/">HOME</Link>
          <Link href="/artists">ARTISTS</Link>
          <Link href="/music" className="nav-active">
            MUSIC
          </Link>
          <Link href="/#media">MEDIA</Link>
          <Link href="/#about">ABOUT</Link>
        </div>

        <Link href="/#contact" className="nav-button">
          CONTACT
        </Link>

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
            <Link href="/">HOME</Link>
            <Link href="/artists">ARTISTS</Link>
            <Link href="/music" className="nav-active">
              MUSIC
            </Link>
            <Link href="/#media">MEDIA</Link>
            <Link href="/#about">ABOUT</Link>
            <Link href="/#contact">CONTACT</Link>
          </div>
        </details>
      </nav>

      {/* PAGE HEADER */}
      <section className="music-hero">
        <div className="music-hero-content">
          <Link href="/" className="artist-back">
            ← BACK TO MADIQ EMPIRE
          </Link>

          <div className="section-label">MADIQ EMPIRE</div>

          <h1>THE MUSIC</h1>

          <p>
            The complete catalogue. Every release, every era, every sound
            from the Madiq Empire roster.
          </p>

          <div className="music-count">
            <span>{String(releases.length).padStart(2, "0")}</span>
            <span>RELEASES</span>
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="section music-catalogue">
        <div className="section-header">
  <div className="section-label">
  {typeFilter === "ALL" && artistFilter === "ALL"
    ? "THE CATALOGUE"
    : "FILTERED CATALOGUE"}
</div>

  <span className="music-section-note">
    {String(filteredReleases.length).padStart(2, "0")} RELEASES
  </span>
</div>

<div className="music-filters">

  <div className="music-filter-group">
    <span className="music-filter-label">FORMAT</span>

    <div className="music-filter-buttons">
      {["ALL", "SINGLE", "EP", "ALBUM"].map((type) => (
        <button
          key={type}
          type="button"
          className={typeFilter === type ? "filter-active" : ""}
          onClick={() => setTypeFilter(type)}
        >
          {type}
        </button>
      ))}
    </div>
  </div>

  <div className="music-filter-group">
    <span className="music-filter-label">ARTIST</span>

    <div className="music-filter-buttons">
      <button
        type="button"
        className={artistFilter === "ALL" ? "filter-active" : ""}
        onClick={() => setArtistFilter("ALL")}
      >
        ALL ARTISTS
      </button>

      <button
        type="button"
        className={artistFilter === "lordmoon" ? "filter-active" : ""}
        onClick={() => setArtistFilter("lordmoon")}
      >
        LORDMOON
      </button>

      <button
        type="button"
        className={artistFilter === "emmadbest" ? "filter-active" : ""}
        onClick={() => setArtistFilter("emmadbest")}
      >
        EMMADBEST
      </button>

      <button
        type="button"
        className={artistFilter === "boixtiz" ? "filter-active" : ""}
        onClick={() => setArtistFilter("boixtiz")}
      >
        BOIXTIZ
      </button>

      <button
        type="button"
        className={artistFilter === "boyraven" ? "filter-active" : ""}
        onClick={() => setArtistFilter("boyraven")}
      >
        BOY RAVEN
      </button>

      <button
        type="button"
        className={artistFilter === "kaysmark" ? "filter-active" : ""}
        onClick={() => setArtistFilter("kaysmark")}
      >
        KAY SMARK
      </button>
    </div>
  </div>

</div>

<div className="music-grid">
          {filteredReleases.map((release) => (
            <a
  href={release.link}
  target="_blank"
  rel="noopener noreferrer"
  className="music-card"
  key={release.slug}
>
              <div className="music-artwork">
                <Image
                  src={release.artwork}
                  alt={release.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                />

                <div className="music-artwork-overlay" />

                <div className="music-type">
                  {release.type}
                </div>

                <div className="music-year">
                  {release.year}
                </div>
              </div>

              <div className="music-card-info">
                <div>
                  <h2>{release.title}</h2>
                  <p>{release.artist}</p>
                </div>

                <span className="music-listen">
  LISTEN ↗
</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}