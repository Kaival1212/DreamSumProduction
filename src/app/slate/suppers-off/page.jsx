import SuppersOffClient from "./SuppersOffClient";

export const metadata = {
  title: "Supper's Off | Romantic Comedy Feature Film",
  description: "Supper's Off is a romantic comedy feature film set in Tuscany — an update of Shirley Valentine. Praised by Raindance Film School for its pacey screenplay and excellent comic structure. Written by S.J. Horan.",
  openGraph: {
    title: "Supper's Off | Romantic Comedy Feature Film",
    description: "A romantic comedy set in Tuscany following Daisy's escape from routine life into love and laughter. Praised by Raindance Film School.",
    images: [{ url: "/supper2.png", alt: "Supper's Off - Romantic Comedy Film Poster" }],
    url: "https://www.dreamsumproductions.co.uk/slate/suppers-off",
  },
};

export default function SuppersOffPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            "name": "Supper's Off",
            "description": "A romantic comedy set in Tuscany following Daisy's escape from routine life, inspired by Shirley Valentine. Praised by Raindance Film School.",
            "genre": ["Romantic Comedy", "Feature Film"],
            "inLanguage": "en",
            "image": "https://www.dreamsumproductions.co.uk/supper2.png",
            "productionCompany": { "@type": "Organization", "name": "Dreamsum Productions" },
            "author": { "@type": "Person", "name": "S.J. Horan" }
          })
        }}
      />
      <SuppersOffClient />
    </>
  );
}
