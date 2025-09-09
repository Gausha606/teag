import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ReactLenis } from 'lenis/react'; // Import ReactLenis and useLenis
import 'lenis/dist/lenis.css'; // Import Lenis CSS
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  title: 
  {
    template: '%s | Teagather Grand',
    default: "Teagather Grand"
  },
  description : "Welcome to Teagather Grand, where culinary excellence meets a warm and inviting atmosphere. Our restaurant offers a diverse menu crafted with the finest ingredients, ensuring a memorable dining experience for every guest. Whether you\'re joining us for a casual meal or a special occasion, we are dedicated to providing exceptional service and delectable dishes that will tantalize your taste buds. Come and savor the flavors of Teagather Grand, where every meal is a celebration of good food and great company.",
   robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  openGraph: {
    title: {
      template: '%s | Teagather Grand',
      default: 'Teagather Grand',
    },
    description : "Welcome to Teagather Grand, where culinary excellence meets a warm and inviting atmosphere. Our restaurant offers a diverse menu crafted with the finest ingredients, ensuring a memorable dining experience for every guest. Whether you\'re joining us for a casual meal or a special occasion, we are dedicated to providing exceptional service and delectable dishes that will tantalize your taste buds. Come and savor the flavors of Teagather Grand, where every meal is a celebration of good food and great company.",
    siteName: "My Restaurant",
    url: "https://teag.netlify.app",
    images: [
      {
        url: 'https://teag.netlify.app/images/homepage.png',
        width: 1200,
        height: 630,
        alt: "Teagather Grand restaurant's outdoor seating area with lush green decor.",
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: '%s | Teagather Grand',
      default: 'Teagather Grand',
    },
    images: [
      {
        url: 'https://teag.netlify.app/images/homepage.png',
        width: 1200,
        height: 630,
        alt: 'A beautiful look of my website',
      },
    ],
    description : "Welcome to Teagather Grand, where culinary excellence meets a warm and inviting atmosphere. Our restaurant offers a diverse menu crafted with the finest ingredients, ensuring a memorable dining experience for every guest. Whether you\'re joining us for a casual meal or a special occasion, we are dedicated to providing exceptional service and delectable dishes that will tantalize your taste buds. Come and savor the flavors of Teagather Grand, where every meal is a celebration of good food and great company.",
  }
}

export default function RootLayout({ children,modal }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className="bg-white">
        <ReactLenis root options={{ lerp: 0.01, duration: 1.2, smoothTouch: true }} >
        <div className="relative min-h-screen flex flex-col">
        <Header />
        <ScrollToTop />
        {modal}
        <main >
        {children}
        </main>
        <Footer />
        </div>
        </ReactLenis>
        </body>
    </html>
  );
}
