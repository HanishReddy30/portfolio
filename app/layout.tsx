import type { Metadata } from "next";
import { Akatab, Inter, Rubik, Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik"
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu"
});

const akt = Akatab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-akt"
});

export const metadata: Metadata = {
  title: "Hanish Reddy - Creative Director & Brand Designer",
  description:
    "Portfolio of Hanish Reddy, a creative director and founder building bold brand identities, motion-led content, and digital systems."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rubik.variable} ${ubuntu.variable} ${akt.variable} bg-ink text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
