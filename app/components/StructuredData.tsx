export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://madiq-empire.vercel.app/#organization",
    name: "Madiq Empire",
    alternateName: "Madiq Empire Record Label",
    description:
      "Madiq Empire is an independent Nigerian record label and creative force founded by Nigerian artist Christian Orji, professionally known as Lordmoon, on January 15, 2024.",
    url: "https://madiq-empire.vercel.app",
    logo: "https://madiq-empire.vercel.app/images/madiq-logo.webp",
    foundingDate: "2024-01-15",
    founder: {
      "@type": "Person",
      name: "Christian Orji",
      alternateName: "Lordmoon",
    },
    member: [
  {
    "@type": "Person",
    name: "Lordmoon",
    url: "https://madiq-empire.vercel.app/artists/lordmoon",
  },
  {
    "@type": "Person",
    name: "Emmadbest",
    url: "https://madiq-empire.vercel.app/artists/emmadbest",
  },
  {
    "@type": "Person",
    name: "Boixtiz",
    url: "https://madiq-empire.vercel.app/artists/boixtiz",
  },
  {
    "@type": "Person",
    name: "Boyraven",
    url: "https://madiq-empire.vercel.app/artists/boyraven",
  },
  {
    "@type": "Person",
    name: "Kaysmark",
    url: "https://madiq-empire.vercel.app/artists/kaysmark",
  },
],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [
  "https://instagram.com/madiqempire",
  "https://open.spotify.com/artist/4Z4jiRm3nrRtUd5T8NELkE",
  "https://www.linkedin.com/in/madiq-empire-757ab4310/",
  "https://music.apple.com/ng/artist/madiq-empire/1741553129",
  "https://ra.co/labels/23826",
  "https://www.deezer.com/pt/artist/262280531",
],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}