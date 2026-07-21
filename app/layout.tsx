import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hearth & Haven | Luxury Real Estate & Private Estates",
  description: "Explore exclusive real estate listings, luxury villas, penthouses, and private estates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0b0f17] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
