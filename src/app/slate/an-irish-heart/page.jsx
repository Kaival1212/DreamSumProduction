import AnIrishHeartClient from "./AnIrishHeartClient";

export const metadata = {
  title: "An Irish Heart | Romantic Comedy Feature Film | Pre-Production",
  description: "An Irish Heart is a feel-good romantic comedy set in Ireland about love, life choices and second chances. Currently in pre-production. Written by S.J. Horan.",
  openGraph: {
    title: "An Irish Heart | Romantic Comedy Feature Film",
    description: "A funny and romantic story about finding out who we really are, before it's too late. Set in the beautiful emerald isle of Ireland.",
    images: [{ url: "/Irish.png", alt: "An Irish Heart - Romantic Comedy Film Poster" }],
    url: "https://www.dreamsumproductions.co.uk/slate/an-irish-heart",
  },
};

export default function AnIrishHeartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            "name": "An Irish Heart",
            "description": "A romantic comedy set in Ireland following Maria's journey to choose between stable love and adventure. Currently in pre-production.",
            "genre": ["Romantic Comedy", "Feature Film"],
            "inLanguage": "en",
            "image": "https://www.dreamsumproductions.co.uk/Irish.png",
            "productionCompany": { "@type": "Organization", "name": "Dreamsum Productions" },
            "author": { "@type": "Person", "name": "S.J. Horan" }
          })
        }}
      />
      <AnIrishHeartClient />
    </>
  );
}
