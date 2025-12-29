"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import {
  Target,
  Eye,
  Shield,
  Zap,
  Award,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function CabinetPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div style={{ marginTop: "100px" }}>
      {/* Hero */}
      <section
        style={{
          background:
            'linear-gradient(rgba(26, 71, 42, 0.9), rgba(26, 71, 42, 0.95)), url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
          padding: "150px 0 80px",
          textAlign: "center",
        }}
      >
        <Container>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5rem",
              color: "#ffffff",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            {t.cabinet.title}
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "800px",
              margin: "0 auto",
              opacity: 0.9,
            }}
          >
            {t.cabinet.description}
          </p>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8f5f0" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "50px",
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                backgroundColor: "#fffefc",
                borderRadius: "8px",
                padding: "40px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <Target
                  size={32}
                  color="#b8860b"
                  style={{ marginRight: "15px" }}
                />
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    color: "#0f2e1c",
                    fontWeight: 700,
                  }}
                >
                  {t.cabinet.missionTitle}
                </h2>
              </div>
              <p style={{ color: "#666666", lineHeight: 1.8 }}>
                {t.cabinet.missionDescription}
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#fffefc",
                borderRadius: "8px",
                padding: "40px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <Eye
                  size={32}
                  color="#b8860b"
                  style={{ marginRight: "15px" }}
                />
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    color: "#0f2e1c",
                    fontWeight: 700,
                  }}
                >
                  {t.cabinet.visionTitle}
                </h2>
              </div>
              <p style={{ color: "#666666", lineHeight: 1.8 }}>
                {t.cabinet.visionDescription}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
              marginTop: "60px",
            }}
          >
            {t.cabinet.stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "30px 20px",
                  backgroundColor: "#fffefc",
                  borderRadius: "8px",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "#1a472a",
                    marginBottom: "10px",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    color: "#666666",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <SectionTitle title={t.cabinet.valuesTitle} center={true} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {t.cabinet.values.map((value, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "40px 30px",
                  backgroundColor: "#f8f5f0",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#1a472a",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 25px",
                  }}
                >
                  {index === 0 && <Shield size={32} color="#ffffff" />}
                  {index === 1 && <Award size={32} color="#ffffff" />}
                  {index === 2 && <CheckCircle size={32} color="#ffffff" />}
                  {index === 3 && <Zap size={32} color="#ffffff" />}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    color: "#0f2e1c",
                    marginBottom: "15px",
                    fontWeight: 700,
                  }}
                >
                  {value.title}
                </h3>
                <p style={{ color: "#666666", lineHeight: 1.7 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8f5f0" }}>
        <Container>
          <SectionTitle
            title={
              language === "fr" ? "Ce Qui Nous Distingue" : "What Sets Us Apart"
            }
            center={true}
          />
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "#666666",
                lineHeight: 1.8,
                marginBottom: "40px",
              }}
            >
              {language === "fr"
                ? "Notre cabinet se distingue par son approche holistique du droit, combinant expertise technique, compréhension des enjeux commerciaux et sensibilité culturelle."
                : "Our firm stands out for its holistic approach to law, combining technical expertise, understanding of business issues and cultural sensitivity."}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                marginTop: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#fffefc",
                  padding: "15px 25px",
                  borderRadius: "4px",
                  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Users size={20} color="#b8860b" />
                <span style={{ color: "#666666", fontWeight: 600 }}>
                  {language === "fr"
                    ? "Équipe Multilingue"
                    : "Multilingual Team"}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#fffefc",
                  padding: "15px 25px",
                  borderRadius: "4px",
                  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Clock size={20} color="#b8860b" />
                <span style={{ color: "#666666", fontWeight: 600 }}>
                  {language === "fr"
                    ? "Disponibilité 24/7"
                    : "24/7 Availability"}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#fffefc",
                  padding: "15px 25px",
                  borderRadius: "4px",
                  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.05)",
                }}
              >
                <CheckCircle size={20} color="#b8860b" />
                <span style={{ color: "#666666", fontWeight: 600 }}>
                  {language === "fr"
                    ? "Approche Personnalisée"
                    : "Personalized Approach"}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          section {
            padding: 60px 0 !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 2rem !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .value-card {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
