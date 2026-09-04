import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { releases } from "../../data/music";
import Footer from "../../components/Footer";

type ReleasePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return releases.map((release) => ({
    slug: release.slug,
  }));
}

export async function generateMetadata({
  params,
}: ReleasePageProps): Promise<Metadata> {
  const { slug } = await params;

  const release = releases.find((item) => item.slug === slug);

  if (!release) {
    return {
      title: "Release Not Found",
    };
  }

  return {
    title: release.title,
    description: `${release.title} by ${release.artist} — ${release.type} released through Madiq Empire.`,
    openGraph: {
      title: `${release.title} — ${release.artist}`,
      description:
        release.description ||
        `Listen to ${release.title} by ${release.artist}, released through Madiq Empire.`,
      url: `/music/${release.slug}`,
      images: [
        {
          url: release.artwork,
          alt: `${release.title} by ${release.artist}`,
        },
      ],
    },
  };
}

export default async function ReleasePage({
  params,
}: ReleasePageProps) {
  const { slug } = await params;

  const release = releases.find((item) => item.slug === slug);

  if (!release) {
    notFound();
  }
  const currentIndex = releases.findIndex(
  (item) => item.slug === slug
);

const previousRelease =
  currentIndex > 0
    ? releases[currentIndex - 1]
    : null;

const nextRelease =
  currentIndex < releases.length - 1
    ? releases[currentIndex + 1]
    : null;

  return (
    <main className="release-page">
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

      {/* RELEASE CONTENT */}
      <section className="release-hero">
        <div className="release-artwork">
          <Image
            src={release.artwork}
            alt={release.title}
            fill
            sizes="(max-width: 800px) 90vw, 45vw"
            priority
          />
        </div>

        <div className="release-content">
          <Link href="/music" className="artist-back">
            ← BACK TO MUSIC
          </Link>

          <div className="section-label">{release.type}</div>

          <h1>{release.title}</h1>

          <p className="release-artist">
            {release.artist}
          </p>

          <div className="release-meta">
            <span>{release.year}</span>
            <span>MADIQ EMPIRE</span>
          </div>

          <p className="release-description">
            {release.description}
          </p>

          <a
            href={release.link}
            target="_blank"
            rel="noopener noreferrer"
            className="release-listen"
          >
            LISTEN ON SPOTIFY ↗
          </a>
        </div>
      </section>

      {/* RELEASE NAVIGATION */}
<section className="release-navigation">
  <div className="release-nav-inner">
    {previousRelease ? (
      <Link
        href={`/music/${previousRelease.slug}`}
        className="release-nav-link release-nav-previous"
      >
        <span>← PREVIOUS RELEASE</span>
        <strong>{previousRelease.title}</strong>
      </Link>
    ) : (
      <div />
    )}

    <Link
      href="/music"
      className="release-nav-back"
    >
      BACK TO MUSIC
    </Link>

    {nextRelease ? (
      <Link
        href={`/music/${nextRelease.slug}`}
        className="release-nav-link release-nav-next"
      >
        <span>NEXT RELEASE →</span>
        <strong>{nextRelease.title}</strong>
      </Link>
    ) : (
      <div />
    )}
  </div>
</section>
<Footer />
</main>
  );
}