import HomeClient from "./HomeClient";

export const metadata = {
  title: "Dreamsum Studios | London Film & Podcast Production Company",
  description: "Dreamsum Studios is a London-based company producing high-quality feature films, short films and podcast dramas that inspire, inform and entertain.",
  openGraph: {
    title: "Dreamsum Studios | London Film & Podcast Production Company",
    description: "A London-based production company creating compelling films and podcasts. Home of Goodbye Sunshine (Cannes-selected) and multiple award-recognised projects.",
    images: [{ url: "/logonew.webp", alt: "Dreamsum Studios" }],
    url: "https://www.dreamsumproductions.co.uk",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dreamsum Studios",
            "description": "A London-based film and podcast production company that produces feature films, short films and podcast dramas.",
            "url": "https://www.dreamsumproductions.co.uk",
            "logo": "https://www.dreamsumproductions.co.uk/logonew.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressCountry": "GB"
            },
            "founder": {
              "@type": "Person",
              "name": "S.J. Horan"
            },
            "sameAs": [
              "https://www.dreamsumproductions.co.uk"
            ]
          })
        }}
      />
      <HomeClient />
    </>
  );
}
