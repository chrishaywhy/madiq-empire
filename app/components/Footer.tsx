import Image from "next/image";
import LegalFooter from "./LegalFooter";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-brand">
        <a href="/" className="footer-logo">
          <Image
            src="/images/madiq-logo.webp"
            alt="Madiq Empire"
            width={150}
            height={150}
          />
        </a>

        <p>The sound of a new generation.</p>

        <div className="socials">
          <a
            href="https://instagram.com/madiqempire"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            IG
          </a>

          <a
            href="https://open.spotify.com/artist/4Z4jiRm3nrRtUd5T8NELkE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
          >
            SP
          </a>
        </div>
      </div>

      <div>
        <h4>NAVIGATION</h4>
        <a href="/">Home</a>
        <a href="/artists">Artists</a>
        <a href="/music">Music</a>
        <a href="/#media">Media</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </div>

      <div>
        <h4>MUSIC</h4>
        <a href="/music">Latest Release</a>
        <a href="https://open.spotify.com/playlist/39M8PYdghHT6FG4O2iJmsp?si=jdii2Y04Qse4KgicblxbAw">Playlists</a>
        <a href="/#media">Media</a>
      </div>

      <div>
        <h4>INFO</h4>
        <a href="/#about">About Us</a>
        <LegalFooter />
      </div>

      <div>
  <h4>CONTACT</h4>

  <p>
    Music, partnerships, press &amp; creative inquiries.
  </p>

  <a href="mailto:madiqempire@gmail.com" className="contact-email">
  <span>EMAIL US</span>
  <strong>madiqempire@gmail.com</strong>
  <b>→</b>
</a>

  <a
    href="https://instagram.com/madiqempire"
    target="_blank"
    rel="noopener noreferrer"
  >
    @madiqempire
  </a>

  <p>Lagos, Nigeria</p>
</div>

      <div className="copyright">
        © 2026 Madiq Empire. All Rights Reserved.
      </div>
    </footer>
  );
}