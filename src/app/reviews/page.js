import ReviewsClient from "./ReviewsClient";

export const metadata = {
    title: "Reviews & Testimonials | Dreamsum Productions",
    description: "Read what industry professionals, agents, and collaborators have said about the work of S.J. Horan — writer, filmmaker and producer at Dreamsum Productions.",
    openGraph: {
        title: "Reviews & Testimonials | Dreamsum Productions",
        description: "Industry reviews and testimonials for S.J. Horan's screenplays, films and plays.",
        url: "https://www.dreamsumproductions.co.uk/reviews",
    },
};

export default function ReviewsPage() {
    return <ReviewsClient />;
}
