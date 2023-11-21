import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "MyKartunList",
  description: "MyAnimeList lite, API from jikan.moe",
  icons: {
    icon: "/anime.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="purple-dark">
      <body className={`${sora.className}`}>
        <Providers>
          <NavbarComponent />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
