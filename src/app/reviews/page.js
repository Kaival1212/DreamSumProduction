import ReviewsClient from "./ReviewsClient";

export const metadata = {
    title: "Reviews & Testimonials | Dreamsum Studios",
    description: "Read what industry professionals, agents, and collaborators have said about the work of S.J. Horan — writer, filmmaker and producer at Dreamsum Studios.",
    openGraph: {
        title: "Reviews & Testimonials | Dreamsum Studios",
        description: "Industry reviews and testimonials for S.J. Horan's screenplays, films and plays.",
        url: "https://www.dreamsumproductions.co.uk/reviews",
    },
};

export default function ReviewsPage() {
    return <ReviewsClient />;
}
