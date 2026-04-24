import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageViewTracker from "./components/PageViewTracker";
import Script from "next/script";

// Replace with your real GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-VD0TB2FS8Y";

export const metadata = {
  metadataBase: new URL('https://www.dreamsumproductions.co.uk'),
  title: {
    default: 'Dreamsum Productions | To Inspire, Inform, Entertain',
    template: '%s | Dreamsum Productions',
  },
  description: 'Dreamsum Productions is a London-based company producing high-quality feature films, short films and podcast dramas that inspire, inform and entertain.',
  keywords: ['Dreamsum Productions', 'London film production', 'S.J. Horan', 'feature films', 'short films', 'podcast dramas', 'screenwriter London'],
  authors: [{ name: 'S.J. Horan' }],
  creator: 'S.J. Horan',
  publisher: 'Dreamsum Productions',
  openGraph: {
    type: 'website',
    siteName: 'Dreamsum Productions',
    locale: 'en_GB',
    images: [{ url: '/logo.png', alt: 'Dreamsum Productions' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@DreamsumProd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen justify-center bg-gray-100 text-gray-800">
        <PageViewTracker />
        <Header />

        {/* Add padding to account for fixed header */}
        <div className="pt-24 flex-grow">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
