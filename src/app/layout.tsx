import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Add Google Fonts preconnect and stylesheet links in the <head> section
// Remove geistMono font import and config

// In your RootLayout, add the following inside <head>:
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Monda:wght@400..700&display=swap"
    rel="stylesheet"
  />
</head>

export const metadata: Metadata = {
  title: "Flood Data Sync",
  description: "Flood Data Sync Waitlist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
