export type Artist = {
  name: string;
  slug: string;
  role: string;
  description: string;
  bio: string;
  genre: string;
  image: string;
  featuredMusic: {
    title: string;
    link: string;
  };
  instagram?: string;
  spotify?: string;
  youtube?: string;
};

export const artists: Artist[] = [
  {
    name: "LORDMOON",
    slug: "lordmoon",
    role: "ARTIST",
    description: "Afrosounds / Afrobeats",
    genre: "Afrobeats",
    image: "/images/lordmoon-hero.webp",

    bio: `Christian Orji, professionally known as Lordmoon is a Nigerian Artist. Born in Lagos Nigeria, and originates from Abia State; East side of Nigeria, located in West Africa. He is an all round artist who embarked on a journey to the Ghana, where he spent most of his life gaining some knowledge about the cultural behavior of people in West Africa.

As a creative he developed skills in music, songwriting, production. He started an independent label Madiq Empire, to nurture and provide a safe space for creatives and act as bridge between them and the music industry.

As a recording artist, Lordmoon began his musical career in 2023, after releasing his first extended playlist “18 AND COUNTING” under his previous name Alcohol. He moved back to Lagos Nigeria in 2022 and instantly began collaborative efforts with other artist in the field of music, sound production and content creation.

This preceded to the release of his song “Emergency” in February 2023 with subsequent releases afterwards, such as “18 AND COUNTING The EP” in March 2023; leading to his much improved blend and stands in the afrobeat genre with his song “Fine” by Lordmoon featuring Legit bossz in April 2023.

In January 2024, he established the an Independent artist Label, Madiq Empire; With the aim of promoting and uplifting young artists who had no means of getting their songs and artistry skills shown across the internet and the world as a way for contributing to the general growth of the industry.

And in 2023 again partnered with Legit Records to bring more independent artists into the Nigerian music limelight. After much delegations and conflicts he began a total rebranding process in 2023 by renaming to Lordmoon from “Alcohol” which was triggered by Spotify copyrights of another singer in Hungary with the same artist name.

This propelled the release of his second studio single song “Fine” in April 2023 under his new refined professional name “Lordmoon”. He has since then pushed himself to embark on another various Extended playlists and singles throughout the span of his early career.`,

    featuredMusic: {
      title: "Balance Remix",
      link: "https://open.spotify.com/track/4i9jKerGdHOVWtQk4hXimr?si=cd84ef5ddda647d4",
    },

    instagram: "https://instagram.com/@whoislordmoon",
    spotify: "https://open.spotify.com/artist/5xSVLgWl8g0dNUOlJDgf2E",
  },

  {
    name: "EMMADBEST",
    slug: "emmadbest",
    role: "ARTIST",
    description: "Madiq Empire Artist",
    genre: "Afro Spiritism / Afrobeats",
    image: "/images/artist-emmadbest-3.webp",

    bio: `He calls his genre Afro spiritism because of his deep wordplay, mind-blowing melody, and his out of this world vocal delivery on every song.

Emmanuel Eromosele Williams, popularly known as Emmadbest, emerged onto the Nigerian music scene with a voice that transcends his age. Born on March 9, 2007, in the vibrant city of Benin, Edo State, Nigeria, Emmadbest discovered his passion for music at a young age.

In 2022, at the tender age of fifteen, Emmadbest began his musical journey, captivating audiences with his soulful voice and dynamic performances. With influences ranging from Afrobeat to contemporary R&B, Emmadbest infuses his music with infectious rhythms and heartfelt lyrics.

His early tracks, including "Ole Cover," "Burn it Down," and "Blessing," showcased his versatility and innate talent. These songs quickly gained attraction on platforms like Audiomack, earning him recognition as a promising newcomer in the Nigerian music scene.

In pursuit of his musical dreams, Emmadbest signed with Madiq Empire, an independent recording label known for emerging talent. During this time, he released his debut single, "Melanin," a soul-stirring ode to the beauty of black culture. The song received widespread acclaim, solidifying Emmadbest's position as an artist to watch.

With his sights set on greatness, Emmadbest continues to hone his craft, pushing boundaries and exploring new musical horizons. As he embarks on his journey, he remains committed to creating music that resonates with audiences worldwide, leaving an indelible mark on the industry for years to come.`,

    featuredMusic: {
      title: "Migraine / Finally",
      link: "https://open.spotify.com/album/3YeQwoSFY5jVcu2g4oEcOG",
    },

    instagram: "https://instagram.com/@emmad.best",
    spotify: "https://open.spotify.com/artist/4MvFAWVgSojzzvWHsWCYOd",
  },

  {
    name: "BOIXTIZ",
    slug: "boixtiz",
    role: "ARTIST",
    description: "Madiq Empire Artist",
    genre: "Afrobeats",
    image: "/images/artist-boixtiz-4.webp",

    bio: `Okeofia Augustine Odinakachukwu (born March 3rd) is a Nigerian music artist and a fast-rising music producer, hails from Anambra State, born with an innate passion for music.

His artistic journey began with a unique fusion of Afro-swing and soul, drawing inspiration from his cultural heritage and personal experiences. With a voice that seamlessly blends melody and emotion, Okeofia’s music reflects his upbringing and background.

His distinctive sound is characterized by infectious rhythms, captivating stage presence, and heartfelt lyrics that resonate with listeners. Throughout his career, Okeofia has demonstrated dedication, perseverance, and a commitment to creating music that inspires and uplifts.

As his fanbase grows and recognition within the music industry increases, Okeofia is poised to become a leading voice in Nigerian music.

Through his music, Okeofia aims to share his story, connect with his audience, and leave a lasting impact on the music world.`,

    featuredMusic: {
      title: "My Mind",
      link: "https://open.spotify.com/track/4GAdYyMRAQpB5JXvdWqyLd",
    },

    spotify: "https://open.spotify.com/artist/5cXdVaw20dmvXeYre9Ujpx",
  },

  {
    name: "BOYRAVEN",
    slug: "boyraven",
    role: "ARTIST",
    description: "Madiq Empire Artist",
    genre: "Afrobeats",
    image: "/images/artist-boyraven-2.webp",

    bio: `Okenwa David Justin professionally known as "Boy Raven" is a Nigerian musicial artist, singer and songwriter. He was born on the 3rd of May 2005 an indigene of Nnono town in Ikwuano local government area of Abia State, Nigeria.

David spent most of his early years outside the shores of Africa, for the first four years of his life he resided at Lathrop, California in the United States before moving back to Nigeria.

He was then raised in the Nigerian city of Port Harcourt. He attended New Bethel Christian academy in Rivers state before proceeding to the Rivers state university.

He comes from a musical family, He's mum was a singer before she died in 2005.

Boy Raven started off music as an independent artist, He composed many cover songs and gained a loyal following across social media platforms.

This gained him recognition and a contract with an independent record label Madiq Empire. Where his first single “No Strength” with Lordmoon would be his debut single of his professional career.

With more to come from the young talent the industry would see more projects from the youngster in light of his captivating vocals and lyrical prowess.`,

    featuredMusic: {
      title: "Awilo Reimagined",
      link: "https://open.spotify.com/track/3wsN6cMZjeTKdUAquFBgLL?si=5eebc7e8f8574c54",
    },

    instagram: "https://instagram.com/@heis_ravenn",
    spotify: "https://open.spotify.com/artist/4xK6xsdgqkAgBBKs3poBUA",
  },

  {
    name: "KAYSMARK",
    slug: "kaysmark",
    role: "ARTIST",
    description: "Madiq Empire Artist",
    genre: "Afrobeats",
    image: "/images/artist-kaysmark-1.webp",

    bio: `Kay Smark, also known as Ebiotu Tamarauebi Kelvin, is a Nigerian music artist. He is known for his multi-genre music and was born on August 18, 2008, in Kiagbodo, Delta State, Nigeria.

Kay Smark's music journey began in 2020, and he gained attention for songs like "Gobe" and "Hope's On" which were popular on platforms like Audiomack and YouTube.`,

    featuredMusic: {
      title: "Down 4u",
      link: "https://open.spotify.com/track/6yDey0nqgwdSu5xeyO9kag?si=a796ba55ad534316",
    },

    instagram: "https://instagram.com/@kaysmark_ks",
    spotify: "https://open.spotify.com/artist/2in81exPTiMcS3w8FM2Pgx",
  },
];