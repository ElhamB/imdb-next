import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Providers } from "@/utils/Provider";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata: Metadata = {
  title: "IMDb App",
  description: "This website is about movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
