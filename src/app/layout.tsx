import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Noto_Sans_Thai_init = Noto_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
  variable: "--font-noto-sans-thai",
});

export const metadata: any = {
  title: "PathFinder",
  description: "สร้างเส้นทางสู่อนาคตที่สำคัญของคุณ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-secondary01 font-noto`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
