import GoodbyeSunshineClient from "./GoodbyeSunshineClient";

export const metadata = {
  title: "Goodbye Sunshine | Cannes-Selected Short Film About Knife Crime",
  description: "Goodbye Sunshine is a Cannes Indie Shorts Festival selected short film exploring the devastating impact of knife crime through a mother's grief. Written by S.J. Horan, directed by Ufuk Gokkaya.",
  openGraph: {
    title: "Goodbye Sunshine | Cannes-Selected Short Film",
    description: "A powerful short film exploring knife crime through a mother's grief. Selected for the Cannes Indie Shorts Festival.",
    images: [{ url: "/goodbyesun.png", alt: "Goodbye Sunshine - Official Festival Poster" }],
    url: "https://www.dreamsumproductions.co.uk/slate/goodbye-sunshine",
  },
};

export default function GoodbyeSunshinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            "name": "Goodbye Sunshine",
            "description": "A Cannes Indie Shorts Festival selected short film about the devastating impact of knife crime in London, seen through a mother's grief.",
            "genre": ["Drama", "Short Film"],
            "inLanguage": "en",
            "image": "https://www.dreamsumproductions.co.uk/goodbyesun.png",
            "productionCompany": { "@type": "Organization", "name": "Dreamsum Productions" },
            "author": { "@type": "Person", "name": "S.J. Horan" },
            "director": { "@type": "Person", "name": "Ufuk Gokkaya" }
          })
        }}
      />
      <GoodbyeSunshineClient />
    </>
  );
}
