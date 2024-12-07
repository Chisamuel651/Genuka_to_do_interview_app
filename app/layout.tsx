import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavigationMenu from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chi Samuel Apeng",
  description: "Genuka To Do List App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <div className="min-h-screen flex flex-col items-center">
          <NavigationMenu />
          <main className="font-sans">
            {children}
          </main>
          
        </div>
        
      </body>
    </html>
  );
}
