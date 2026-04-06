import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orbis NFT — Beyond Earth",
  description:
    "A digital object fixed beyond time and place. An exploration of distance, form, and silence in space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Condiment&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
