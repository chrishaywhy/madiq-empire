import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Explore the complete Madiq Empire catalogue — every release, every era, and every sound from the roster.",
  openGraph: {
    title: "The Music — Madiq Empire",
    description:
      "Explore the complete Madiq Empire catalogue and discover every release from the roster.",
    url: "/music",
  },
};

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}