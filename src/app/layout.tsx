import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greyline Group | AI Automation Dashboard",
  description: "Enterprise-grade AI automation platform for quotations, invoicing, and workflow management.",
  icons: {
    icon: "https://res.cloudinary.com/deahibe46/image/upload/v1778151329/ChatGPT_Image_May_4_2026_04_39_57_PM_rw36mp.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background overflow-x-hidden`}>
        <Sidebar />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="ml-64 p-8 flex-1">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
