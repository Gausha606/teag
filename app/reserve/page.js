import ReservationPage from "./ReservationPage";

export const metadata = {
  title: "Reserve a Table",
  description:
    "Book your perfect table at Teagather Grand online for a seamless dining experience.",
  openGraph: {
    images: [
      {
        url: "https://teag.netlify.app/images/reservepage.png",
        width: 1200,
        height: 630,
        alt: "A welcoming view of a reserved table at Teagather Grand.",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://teag.netlify.app/images/reservepage.png",
        width: 1200,
        height: 630,
        alt: "A welcoming view of a reserved table at Teagather Grand.",
      },
    ],
  },
};


export default function Reservepage(){
  return <ReservationPage />
}
