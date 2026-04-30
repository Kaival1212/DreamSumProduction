import CityInFlamesClient from "./CityInFlamesClient";

export const metadata = {
  title: "City in Flames | Historical Drama Feature Film",
  description: "City in Flames is a historical drama feature film about the 1922 Smyrna crisis — told through Asa K. Jennings' heroic efforts to save hundreds of thousands of refugees. Called a 'blockbuster' by a BBC director. Written by S.J. Horan.",
  openGraph: {
    title: "City in Flames | Historical Drama Feature Film",
    description: "An epic historical drama about the 1922 Smyrna tragedy and the heroic American minister who saved hundreds of thousands of lives.",
    images: [{ url: "/Cityflames2.png", alt: "City in Flames - Historical Drama Film Poster" }],
    url: "https://www.dreamsumproductions.co.uk/slate/city-in-flames",
  },
};

export default function CityInFlamesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            "name": "City in Flames",
            "description": "A historical drama about the 1922 Smyrna crisis, told through Asa K. Jennings' heroic efforts to evacuate hundreds of thousands of Greek and Armenian refugees.",
            "genre": ["Historical Drama", "Feature Film"],
            "inLanguage": "en",
            "image": "https://www.dreamsumproductions.co.uk/Cityflames.jpg",
            "productionCompany": { "@type": "Organization", "name": "Dreamsum Productions" },
            "author": { "@type": "Person", "name": "S.J. Horan" }
          })
        }}
      />
      <CityInFlamesClient />
    </>
  );
}
