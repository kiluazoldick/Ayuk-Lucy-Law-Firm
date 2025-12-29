import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Ayuk Lucy Law Firm | Votre Partenaire Juridique au Cameroun",
  description:
    "Cabinet d'avocats de premier plan à Douala, Cameroun. Expertise en droit des affaires, droit pénal, droit civil et droit international.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>{/* Font link moved to pages/_document.js */}</head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Source Serif Pro', serif",
          color: "#333333",
          backgroundColor: "#fffefc",
          lineHeight: 1.6,
          overflowX: "hidden",
        }}
      >
        <LanguageProvider>
          <Header />
          <main style={{ minHeight: "100vh" }}>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
