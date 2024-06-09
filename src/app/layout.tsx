import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className="bg-secondary01">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
