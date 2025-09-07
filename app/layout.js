import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ReactLenis } from 'lenis/react'; // Import ReactLenis and useLenis
import 'lenis/dist/lenis.css'; // Import Lenis CSS
import ScrollToTop from "./components/scrollToTop";


export default function RootLayout({ children,modal }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className="bg-white">
        <ReactLenis root options={{ lerp: 0.01, duration: 1.2, smoothTouch: true }} >
        <div className="relative">
        <Header />
        <ScrollToTop />
        {modal}
        {children}
        <Footer />
        </div>
        </ReactLenis>
        </body>
    </html>
  );
}
