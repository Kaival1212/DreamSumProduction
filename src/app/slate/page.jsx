import SlateClient from "./SlateClient";

export const metadata = {
  title: "On the Slate | Film Portfolio",
  description: "Explore Dreamsum Productions' current and upcoming film projects: Goodbye Sunshine (Cannes-selected), City in Flames, Supper's Off, A Spell in Greece, and An Irish Heart.",
  openGraph: {
    title: "On the Slate | Dreamsum Productions Film Portfolio",
    description: "Current and upcoming projects from Dreamsum Productions — compelling stories that inspire, inform and entertain. Seeking investors and co-producers.",
    images: [{ url: "/goodbyesun.png", alt: "Goodbye Sunshine - Cannes Selected Short Film" }],
    url: "https://www.dreamsumproductions.co.uk/slate",
  },
};

export default function OnTheSlatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Dreamsum Productions Film Portfolio",
            "description": "Current and upcoming film projects from Dreamsum Productions",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Goodbye Sunshine", "url": "https://www.dreamsumproductions.co.uk/slate/goodbye-sunshine" },
              { "@type": "ListItem", "position": 2, "name": "City in Flames", "url": "https://www.dreamsumproductions.co.uk/slate/city-in-flames" },
              { "@type": "ListItem", "position": 3, "name": "Supper's Off", "url": "https://www.dreamsumproductions.co.uk/slate/suppers-off" },
              { "@type": "ListItem", "position": 4, "name": "A Spell in Greece", "url": "https://www.dreamsumproductions.co.uk/slate/spell-in-greece" },
              { "@type": "ListItem", "position": 5, "name": "An Irish Heart", "url": "https://www.dreamsumproductions.co.uk/slate/an-irish-heart" }
            ]
          })
        }}
      />
      <SlateClient />
    </>
  );
}
