import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdul Wasiu - Portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-whiteBg w-full">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
