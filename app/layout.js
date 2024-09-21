import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefin);

import "@/app/_styles/globals.css";

export const metadata = {
  //title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel , located in the hearth of the Italian Dolomites, surrounded by beatifull mountains",
};

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-50 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />

        <div className="flex-1  px-8 py-12 grid">
          <main className="max-w-7xl  mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
          {/*  <footer>Copyright by the wild Oasis</footer> */}
        </div>
      </body>
    </html>
  );
}
