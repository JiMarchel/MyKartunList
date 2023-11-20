import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import NavbarComponent from "@/components/Navbar,js";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "My Wibu List",
  description: "My Wibu List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="purple-dark">
      <body className={`${sora.className}`}>
        <Providers>
          <NavbarComponent />
          {children}
        </Providers>
      </body>
    </html>
  );
}
