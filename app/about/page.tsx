"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div style={{ marginTop: "100px" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3rem",
            color: "#0f2e1c",
            marginBottom: "40px",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          {language === "fr" ? "À Propos du Cabinet" : "About the Firm"}
        </h1>

        <div
          style={{
            backgroundColor: "#f8f5f0",
            borderRadius: "8px",
            padding: "60px",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.3rem",
              marginBottom: "25px",
              color: "#0f2e1c",
              fontWeight: 700,
            }}
          >
            {t.about.title}
          </h2>
          {t.about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              style={{
                marginBottom: "20px",
                fontSize: "1.1rem",
                color: "#666666",
                lineHeight: 1.8,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginTop: "60px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fffefc",
              borderRadius: "8px",
              padding: "30px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
              borderTop: "4px solid #b8860b",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                marginBottom: "15px",
                color: "#0f2e1c",
                fontWeight: 700,
              }}
            >
              {language === "fr" ? "Notre Mission" : "Our Mission"}
            </h3>
            <p style={{ color: "#666666" }}>
              {language === "fr"
                ? "Fournir des services juridiques d'excellence, innovants et adaptés aux besoins spécifiques de nos clients, tout en respectant les plus hauts standards éthiques et professionnels."
                : "To provide excellent, innovative legal services tailored to the specific needs of our clients, while respecting the highest ethical and professional standards."}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fffefc",
              borderRadius: "8px",
              padding: "30px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
              borderTop: "4px solid #b8860b",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                marginBottom: "15px",
                color: "#0f2e1c",
                fontWeight: 700,
              }}
            >
              {language === "fr" ? "Nos Valeurs" : "Our Values"}
            </h3>
            <ul style={{ color: "#666666", paddingLeft: "20px" }}>
              <li style={{ marginBottom: "10px" }}>
                {language === "fr"
                  ? "Intégrité et éthique"
                  : "Integrity and ethics"}
              </li>
              <li style={{ marginBottom: "10px" }}>
                {language === "fr"
                  ? "Excellence professionnelle"
                  : "Professional excellence"}
              </li>
              <li style={{ marginBottom: "10px" }}>
                {language === "fr"
                  ? "Confidentialité absolue"
                  : "Absolute confidentiality"}
              </li>
              <li style={{ marginBottom: "10px" }}>
                {language === "fr" ? "Engagement client" : "Client commitment"}
              </li>
              <li>
                {language === "fr"
                  ? "Innovation juridique"
                  : "Legal innovation"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
