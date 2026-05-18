import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageViewTracker from "./components/PageViewTracker";
import Script from "next/script";

// Replace with your real GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-VD0TB2FS8Y";

export const metadata = {
  metadataBase: new URL('https://www.sjhstudios.co.uk'),
  title: {
    default: 'SJH Studios | To Inspire, Inform, Entertain',
    template: '%s | SJH Studios',
  },
  description: 'SJH Studios is a London-based company producing high-quality feature films, short films and podcast dramas that inspire, inform and entertain.',
  keywords: ['SJH Studios', 'London film production', 'S.J. Horan', 'feature films', 'short films', 'podcast dramas', 'screenwriter London'],
  authors: [{ name: 'S.J. Horan' }],
  creator: 'S.J. Horan',
  publisher: 'SJH Studios',
  openGraph: {
    type: 'website',
    siteName: 'SJH Studios',
    locale: 'en_GB',
    images: [{ url: '/logo.png', alt: 'SJH Studios' }],
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
