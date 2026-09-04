import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artists } from "@/app/data/artists";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return artists.map((artist) => ({
    slug: artist.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const artist = artists.find((item) => item.slug === slug);

  if (!artist) {
    return {
      title: "Artist Not Found",
    };
  }

  const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: artist.name,
  genre: artist.genre,
  image: `http://localhost:3000${artist.image}`,
  url: `http://localhost:3000/artists/${artist.slug}`,
  sameAs: [
    artist.spotify,
    ...(artist.instagram ? [artist.instagram] : []),
  ],
};

  return {
    title: artist.name,
    description: `${artist.name} — ${artist.genre} artist from the Madiq Empire roster. Discover their music, story, and latest work.`,
    openGraph: {
      title: `${artist.name} — Madiq Empire`,
      description: `Discover ${artist.name}, their music, story, and latest work with Madiq Empire.`,
      url: `/artists/${artist.slug}`,
      images: [
        {
          url: artist.image,
          alt: artist.name,
        },
      ],
    },
  };
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const artist = artists.find((item) => item.slug === slug);

  if (!artist) {
    notFound();
  }

  return (
    <main className="artist-page">
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
          <a href="/#artists">ARTISTS</a>
          <a href="/#music">MUSIC</a>
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
            <a href="/#artists">ARTISTS</a>
            <a href="/#music">MUSIC</a>
            <a href="/#media">MEDIA</a>
            <a href="/#about">ABOUT</a>
            <a href="/#contact">CONTACT</a>
          </div>
        </details>
      </nav>

      {/* ARTIST HERO */}
      <section className="artist-hero">

        <div className="artist-hero-image">
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>

        <div className="artist-hero-overlay" />

        <div className="artist-hero-content">

          <Link href="/#artists" className="artist-back">
            ← BACK TO ARTISTS
          </Link>

          <div className="section-label">
            ARTIST — MADIQ EMPIRE
          </div>

          <h1>{artist.name}</h1>

          <p className="artist-hero-genre">
            {artist.genre}
          </p>

        </div>

      </section>


      {/* ARTIST INFORMATION */}
      <section className="section artist-info-section">

        <div className="artist-info-grid">

          <div className="artist-info-label">

            <div className="section-label">
              ABOUT THE ARTIST
            </div>

            <div className="artist-meta">

              <div>
                <span>ROLE</span>
                <strong>{artist.role}</strong>
              </div>

              <div>
                <span>SOUND</span>
                <strong>{artist.genre}</strong>
              </div>

            </div>

          </div>


          <div className="artist-bio">

            {artist.bio.split("\n\n").map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}

          </div>

        </div>

      </section>


      {/* FEATURED MUSIC */}
      <section className="section artist-music-section">

        <div className="section-header">

          <div className="section-label">
            FEATURED MUSIC
          </div>

          <span className="artist-section-note">
            LISTEN NOW
          </span>

        </div>


        <a
          href={artist.featuredMusic.link}
          target="_blank"
          rel="noopener noreferrer"
          className="featured-track"
        >

          <div className="featured-track-number">
            01
          </div>

          <div className="featured-track-info">

            <span>FEATURED TRACK</span>

            <h2>
              {artist.featuredMusic.title}
            </h2>

          </div>

          <div className="featured-track-arrow">
            ↗
          </div>

        </a>

      </section>


      {/* CONNECT */}
      <section className="section artist-connect-section">

        <div className="section-header">

          <div className="section-label">
            CONNECT
          </div>

        </div>


        <div className="artist-socials">

          {artist.instagram && (
            <a
              href={artist.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="artist-social"
            >
              <span>INSTAGRAM</span>
              <strong>↗</strong>
            </a>
          )}

          {artist.spotify && (
            <a
              href={artist.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="artist-social"
            >
              <span>SPOTIFY</span>
              <strong>↗</strong>
            </a>
          )}

          {artist.youtube && (
            <a
              href={artist.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="artist-social"
            >
              <span>YOUTUBE</span>
              <strong>↗</strong>
            </a>
          )}

        </div>

      </section>


      {/* CONTACT / BOOKING */}
      <section className="artist-cta">

        <div className="artist-cta-content">

          <div className="section-label">
            MADIQ EMPIRE
          </div>

          <h2>
            READY TO WORK
            <br />
            WITH {artist.name}?
          </h2>

          <p>
            For bookings, collaborations, media and business
            enquiries, get in touch with Madiq Empire.
          </p>

          <a
            href="mailto:madiqempire@gmail.com"
            className="button button-outline"
          >
            CONTACT US <span>→</span>
          </a>

        </div>

      </section>


      {/* BOTTOM NAVIGATION */}
      <div className="artist-bottom-nav">

        <Link href="/#artists">
          ← ALL ARTISTS
        </Link>

        <Link href="/#contact">
          CONTACT MADIQ EMPIRE →
        </Link>

      </div>
      <Footer />

</main>
  );
}