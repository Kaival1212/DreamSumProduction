import WhoAmIClient from "./WhoAmIClient";

export const metadata = {
  title: "S.J. Horan | London Filmmaker & Screenwriter",
  description: "S.J. Horan is a London-based writer, filmmaker and producer. Creator of Goodbye Sunshine (Cannes Indie Shorts selected), City in Flames, Supper's Off, A Spell in Greece and more.",
  openGraph: {
    title: "S.J. Horan | London Filmmaker & Screenwriter",
    description: "Explore the portfolio of S.J. Horan — London filmmaker, screenwriter and producer behind Goodbye Sunshine and multiple award-recognised feature films.",
    images: [{ url: "/Sallyphoto.jpg", alt: "S.J. Horan - Writer, filmmaker and producer" }],
    url: "https://www.dreamsumproductions.co.uk/whoAmI",
  },
};

export default function WhoAmIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "S.J. Horan",
            "jobTitle": "Filmmaker, Screenwriter, Producer",
            "image": "https://www.dreamsumproductions.co.uk/Sallyphoto.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressCountry": "GB"
            },
            "knowsLanguage": ["English", "French", "Spanish", "Italian", "German"],
            "worksFor": {
              "@type": "Organization",
              "name": "Dreamsum Productions",
              "url": "https://www.dreamsumproductions.co.uk"
            },
            "hasCredential": [
              { "@type": "EducationalOccupationalCredential", "name": "MA in Creative Writing (Plays and Scripts)" },
              { "@type": "EducationalOccupationalCredential", "name": "BSc(Hons) Computational Linguistics and Modern Languages" }
            ]
          })
        }}
      />
      <WhoAmIClient />
    </>
  );
}
