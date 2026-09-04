export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Madiq Empire",
    description:
      "Madiq Empire is an independent record label and creative force built around distinctive artists, original music, and a new generation of sound.",
    url: "http://localhost:3000",
    logo: "http://localhost:3000/images/madiq-logo.webp",
    sameAs: [
      "https://instagram.com/madiqempire",
      "https://open.spotify.com/artist/4Z4jiRm3nrRtUd5T8NELkE",
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