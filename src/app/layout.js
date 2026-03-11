import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-center bg-gray-100 text-gray-800">
        <Header />

        {/* Add padding to account for fixed header */}
        <div className="pt-24 flex-grow">
          {children}
        </div>

        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-light tracking-[0.1em] mb-4">DREAMSUM PRODUCTIONS</h3>
                <p className="text-gray-300 font-light mb-4">
                  Creating meaningful cinema and podcasts that inspire, inform and entertain
                </p>
                <p className="text-gray-400 text-sm font-light">Based in London, United Kingdom</p>
              </div>

              <div>
                <h4 className="text-lg font-light mb-4">Explore</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-white transition-colors font-light">Home</a></li>
                  <li><a href="/whoAmI" className="text-gray-300 hover:text-white transition-colors font-light">Who I am</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors font-light">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-light mb-4">Stay Updated</h4>
                <p className="text-gray-300 mb-4 text-sm font-light">Sign up with your email address to receive news and updates.</p>
                <a
                  href="/contact"
                  className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors font-light text-sm"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400 text-sm font-light">© 2025 Dreamsum Productions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
