import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "2027 IEEE International Conference on Innovation and Quality in Engineering and Technology (2027 ICONIQ)",
    template: "%s | 2027 ICONIQ",
  },
  description:
    "2027 IEEE International Conference on Innovation and Quality in Engineering and Technology (2027 ICONIQ).",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title:
      "2027 IEEE International Conference on Innovation and Quality in Engineering and Technology (2027 ICONIQ)",
    description:
      "2027 IEEE International Conference on Innovation and Quality in Engineering and Technology (2027 ICONIQ).",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
