import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "Cazari Praid",
  description: "Găsește cele mai bune oferte de cazare în Praid cu prețuri avantajoase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
