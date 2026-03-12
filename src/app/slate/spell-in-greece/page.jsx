import SpellInGreeceClient from "./SpellInGreeceClient";

export const metadata = {
  title: "A Spell in Greece | Romantic Comedy Feature Film",
  description: "A Spell in Greece is an upbeat romantic comedy feature film set on a stunning Greek island. The script passed the first round of the Cannes Film Awards 2026. Written by S.J. Horan.",
  openGraph: {
    title: "A Spell in Greece | Romantic Comedy Feature Film",
    description: "A feel-good romantic comedy set on a Greek island — Cannes Film Awards 2026 first-round qualifier. Written by S.J. Horan.",
    images: [{ url: "/spell.png", alt: "A Spell in Greece - Romantic Comedy Film Poster" }],
    url: "https://www.dreamsumproductions.co.uk/slate/spell-in-greece",
  },
};

export default function SpellInGreecePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            "name": "A Spell in Greece",
            "description": "A romantic comedy set on a Greek island following Saffron's hilarious battle to win her partner's affections. Cannes Film Awards 2026 first-round qualifier.",
            "genre": ["Romantic Comedy", "Feature Film"],
            "inLanguage": "en",
            "image": "https://www.dreamsumproductions.co.uk/spell.png",
            "productionCompany": { "@type": "Organization", "name": "Dreamsum Productions" },
            "author": { "@type": "Person", "name": "S.J. Horan" }
          })
        }}
      />
      <SpellInGreeceClient />
    </>
  );
}
