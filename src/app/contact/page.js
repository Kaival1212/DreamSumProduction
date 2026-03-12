import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Invest, Donate & Collaborate",
  description: "Get in touch with Dreamsum Productions to invest, donate, or collaborate on our film projects. We welcome investors, co-producers and creative partners. Based in London, UK.",
  openGraph: {
    title: "Contact Dreamsum Productions | Invest, Donate & Collaborate",
    description: "Interested in investing in or collaborating with Dreamsum Productions? Get in touch — every great story begins with a conversation.",
    images: [{ url: "/logo.png", alt: "Dreamsum Productions" }],
    url: "https://www.dreamsumproductions.co.uk/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
