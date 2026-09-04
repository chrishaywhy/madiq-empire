export type Release = {
  title: string;
  artist: string;
  artistSlug: string;
  slug: string;
  type: "SINGLE" | "EP" | "ALBUM";
  year: number;
  artwork: string;
  description: string;
  link: string;
};

export const releases: Release[] = [
  {
    title: "Balance Remix",
    artist: "Lordmoon, Capachinoo",
    artistSlug: "lordmoon",
    slug: "balance-remix",
    type: "SINGLE",
    year: 2026,
    artwork: "/images/balance-remix.jpg",
    description:
      "A reimagined version of Lordmoon's signature sound, blending laid-back melodies with contemporary Afrobeats energy.",
    link:
      "https://open.spotify.com/track/4i9jKerGdHOVWtQk4hXimr?si=cd84ef5ddda647d4",
  },
  {
  title: "Lamentations",
  artist: "Emmadbest",
  artistSlug: "emmadbest",
  slug: "lamentations",
  type: "SINGLE",
  year: 2026,
  artwork: "/images/music-emmadbest-lamentations.webp",
  description:
    "A release from Emmadbest blending Afro Spiritism with contemporary Afrobeats.",
  link: "https://open.spotify.com/track/0ibVnOKz2zqz8Yv0CwNH2a?si=a3077349be724780",
},
{
  title: "No Fear",
  artist: "Emmadbest, Madiq Empire",
  artistSlug: "emmadbest",
  slug: "no-fear",
  type: "SINGLE",
  year: 2025,
  artwork: "/images/music-emmadbest-no-fear.webp",
  description:
    "A release from Emmadbest blending Afro Spiritism with contemporary Afrobeats.",
  link: "https://open.spotify.com/track/6IDdsueNhfxLvgh3NMsTdf?si=3ecaabe72df84fb6",
},
{
  title: "Melanin",
  artist: "Emmadbest",
  artistSlug: "emmadbest",
  slug: "melanin",
  type: "SINGLE",
  year: 2024,
  artwork: "/images/music-emmadbest-melanin.webp",
  description:
    "A release from Emmadbest blending Afro Spiritism with contemporary Afrobeats.",
  link: "https://open.spotify.com/track/2nOdZXRqUZ7zjFUB20cX1H?si=1bc660a82c164841",
},
{
  title: "Dance",
  artist: "Emmadbest",
  artistSlug: "emmadbest",
  slug: "dance",
  type: "SINGLE",
  year: 2024,
  artwork: "/images/music-emmadbest-dance.webp",
  description:
    "A release from Emmadbest blending Afro Spiritism with contemporary Afrobeats.",
  link: "https://open.spotify.com/track/6y1RNJyEIcM0eRjil5fq7z?si=07d9098d520d4ff8",
},
{
  title: "El Mejor",
  artist: "Malayszn, Emmadbest, Lordmoon",
  artistSlug: "emmadbest, lordmoon",
  slug: "el-mejor",
  type: "SINGLE",
  year: 2024,
  artwork: "/images/music-emmadbest-el-mejor.webp",
  description:
    "A release from Malayszn blending Afro Spiritism with contemporary Afrobeats.",
  link: "https://open.spotify.com/album/7I8eTSgXncJCe9m5XSO86J?si=kY4RBkXASEaDd96dd0-LVQ",
},
{
  title: "Migraine / Finally",
  artist: "Emmadbest",
  artistSlug: "emmadbest",
  slug: "migraine-finally",
  type: "SINGLE",
  year: 2025,
  artwork: "/images/music-emmadbest-migraine.webp",
  description:
    "A release from Emmadbest blending Afro Spiritism with contemporary Afrobeats.",
  link: "https://open.spotify.com/track/2KIV2t7OIXXO68Erb8VHsb?si=1b6638ed4d5c4ba8",
},
{
  title: "Parables",
  artist: "Emmadbest",
  artistSlug: "emmadbest",
  slug: "parables",
  type: "SINGLE",
  year: 2025,
  artwork: "/images/music-emmadbest-parables.webp",
  description:
    "A release from Emmadbest blending Afro Spiritism with contemporary Afrobeats.",
  link: "https://open.spotify.com/track/5dC4X14syqPaoNGXsPRauG?si=bf2929ff0a9044a9",
},
{
    title: "Sorry I'm Different",
    artist: "Lordmoon",
    artistSlug: "lordmoon",
    slug: "sorry-im-different",
    type: "EP",
    year: 2024,
    artwork: "/images/music-lordmoon-SID.webp",
    description:
      "A defining project from Lordmoon, built around melody, atmosphere and a distinctly personal sound.",
    link: "https://open.spotify.com/album/603SU8a028kCrT60rAeCZK?si=YWxIsqwJRR6p4xRl4W_4lA",
  },
  {
    title: "Stringed EP",
    artist: "Lordmoon",
    artistSlug: "lordmoon",
    slug: "stringed",
    type: "EP",
    year: 2023,
    artwork: "/images/music-lordmoon-stringed.webp",
    description:
      "An early project exploring melodic Afrosounds and the stripped-back side of Lordmoon's artistry.",
    link: "https://open.spotify.com/album/3dYrvtLu6dDjuOzMzv4Cf8?si=fBKRM0qbSguI77G-ZxcgKg",
  },
{
    title: "Abracadabra",
    artist: "Lordmoon",
    artistSlug: "lordmoon",
    slug: "abracadabra",
    type: "SINGLE",
    year: 2023,
    artwork: "/images/music-lordmoon-abracadabra.webp",
    description:
      "A defining project from Lordmoon, built around melody, atmosphere and a distinctly personal sound.",
    link: "https://open.spotify.com/album/6fxJOiuxXPhDioOOXSalm7?si=4K9yb7BmSjuJ-sKwt1jfFQ",
  },
  {
    title: "New Sign",
    artist: "Lordmoon",
    artistSlug: "lordmoon",
    slug: "newsign",
    type: "SINGLE",
    year: 2023,
    artwork: "/images/music-lordmoon-new-sign.webp",
    description:
      "An early project exploring melodic Afrosounds and the stripped-back side of Lordmoon's artistry.",
    link: "https://open.spotify.com/track/3vSCl8YTo8mqLWmmmOAkKK?si=321bfd65dbac4188",
  },
  {
    title: "Bro",
    artist: "Lordmoon, Ahnie",
    artistSlug: "lordmoon",
    slug: "bro",
    type: "SINGLE",
    year: 2025,
    artwork: "/images/music-lordmoon-bro.webp",
    description:
      "A defining project from Lordmoon, built around melody, atmosphere and a distinctly personal sound.",
    link: "https://open.spotify.com/album/03RnbPSXaOBVTlnMA2wjke?si=dvLQq5qvR4yHOpSIEKOL3g",
  },
  {
    title: "Choice",
    artist: "Lordmoon, Protocol",
    artistSlug: "lordmoon",
    slug: "choice",
    type: "SINGLE",
    year: 2023,
    artwork: "/images/music-lordmoon-choice.webp",
    description:
      "An early project exploring melodic Afrosounds and the stripped-back side of Lordmoon's artistry.",
    link: "https://open.spotify.com/album/5O6qkm7KhKIXPQDDFzAEmn?si=3ZV6me-FSZC_T-PamQvOvw",
  },
  {
    title: "No Strength",
    artist: "Lordmoon, Boy Raven",
    artistSlug: "lordmoon",
    slug: "nostrength",
    type: "SINGLE",
    year: 2024,
    artwork: "/images/music-lordmoon-nostrength.webp",
    description:
      "A defining project from Lordmoon, built around melody, atmosphere and a distinctly personal sound.",
    link: "https://open.spotify.com/track/3Xq1rwaIisPOlMdxE5d8io?si=de11b81c38974499",
  },
  {
    title: "Awilo Reimagined",
    artist: "Boy Raven",
    artistSlug: "boyraven",
    slug: "awiloreimagined",
    type: "SINGLE",
    year: 2025,
    artwork: "/images/music-boyraven-awilo.webp",
    description:
      "An early project exploring melodic Afrosounds and the stripped-back side of Boy Raven artistry.",
    link: "https://open.spotify.com/track/3wsN6cMZjeTKdUAquFBgLL?si=049518d0b95043d1",
  },
  {
    title: "Down 4u",
    artist: "Kay Smark",
    artistSlug: "kaysmark",
    slug: "down4u",
    type: "SINGLE",
    year: 2025,
    artwork: "/images/music-kaysmark-down.webp",
    description:
      "An early project exploring melodic Afrosounds and the stripped-back side of Kay Smark artistry.",
    link: "https://open.spotify.com/track/6yDey0nqgwdSu5xeyO9kag?si=79408b20f3284073",
  },
  {
    title: "My Mind",
    artist: "Boixtiz",
    artistSlug: "boixtiz",
    slug: "mymind",
    type: "SINGLE",
    year: 2025,
    artwork: "/images/music-boixtiz-mind.webp",
    description:
      "An early project exploring melodic Afrosounds and the stripped-back side of Boixtiz artistry.",
    link: "https://open.spotify.com/track/4GAdYyMRAQpB5JXvdWqyLd?si=65740f986f124f56",
  },
];