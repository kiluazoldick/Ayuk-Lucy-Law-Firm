"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import { Phone } from "lucide-react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import LawyerCard from "@/components/LawyerCard";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        style={{
          background:
            'linear-gradient(rgba(26, 71, 42, 0.85), rgba(26, 71, 42, 0.9)), url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
          padding: "180px 0 120px",
          marginTop: "80px",
          textAlign: "center",
        }}
      >
        <Container>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "3.5rem",
                color: "#ffffff",
                marginBottom: "20px",
                lineHeight: 1.2,
                fontWeight: 700,
              }}
            >
              {t.hero.title}
            </h1>
            <p
              style={{
                fontSize: "1.3rem",
                marginBottom: "40px",
                opacity: 0.9,
              }}
            >
              {t.hero.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  borderRadius: "4px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  border: "none",
                  fontFamily: "'Source Serif Pro', serif",
                  backgroundColor: "#b8860b",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#daa520";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#b8860b";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Phone size={18} />
                {t.hero.contactButton}
              </a>
              <WhatsAppButton text={t.hero.whatsappButton} />
            </div>
          </div>
        </Container>
      </section>

      {/* About Preview */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8f5f0" }}>
        <Container>
          <SectionTitle
            title={language === "fr" ? "À Propos du Cabinet" : "About the Firm"}
            description={
              language === "fr"
                ? "Fondé en 2010, notre cabinet est devenu une référence en matière de conseil juridique au Cameroun."
                : "Founded in 2010, our firm has become a benchmark for legal advice in Cameroon."
            }
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "#666666",
                maxWidth: "800px",
                textAlign: "center",
                lineHeight: 1.8,
              }}
            >
              {language === "fr"
                ? "Notre cabinet combine expertise juridique approfondie et compréhension des réalités économiques et sociales camerounaises. Nous nous engageons à fournir des solutions juridiques innovantes et efficaces, adaptées aux besoins spécifiques de chaque client."
                : "Our firm combines in-depth legal expertise with an understanding of Cameroonian economic and social realities. We are committed to providing innovative and effective legal solutions, tailored to the specific needs of each client."}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "30px",
                marginTop: "20px",
              }}
            >
              {t.cabinet.stats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    minWidth: "150px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.5rem",
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
                      fontSize: "1rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/cabinet"
              style={{
                display: "inline-block",
                padding: "12px 32px",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "2px solid #1a472a",
                fontFamily: "'Source Serif Pro', serif",
                backgroundColor: "transparent",
                color: "#1a472a",
                marginTop: "20px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1a472a";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#1a472a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {language === "fr" ? "En savoir plus" : "Learn more"}
            </a>
          </div>
        </Container>
      </section>

      {/* Services Preview */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <SectionTitle
            title={t.services.title}
            description={t.services.description}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {t.services.items.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <a
              href="/expertise"
              style={{
                display: "inline-block",
                padding: "12px 32px",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "none",
                fontFamily: "'Source Serif Pro', serif",
                backgroundColor: "#1a472a",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0f2e1c";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1a472a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {language === "fr"
                ? "Voir tous nos services"
                : "View all our services"}
            </a>
          </div>
        </Container>
      </section>

      {/* Team Preview */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8f5f0" }}>
        <Container>
          <SectionTitle title={t.team.title} description={t.team.description} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {t.team.members.slice(0, 2).map((member, index) => (
              <LawyerCard key={index} member={member} index={index} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <a
              href="/nos-avocats"
              style={{
                display: "inline-block",
                padding: "12px 32px",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "none",
                fontFamily: "'Source Serif Pro', serif",
                backgroundColor: "#b8860b",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#daa520";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#b8860b";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {language === "fr"
                ? "Rencontrer toute l'équipe"
                : "Meet the whole team"}
            </a>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background:
            'linear-gradient(rgba(26, 71, 42, 0.9), rgba(26, 71, 42, 0.95)), url("https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
          textAlign: "center",
          padding: "100px 0",
        }}
      >
        <Container>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
              fontSize: "2.8rem",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            {language === "fr"
              ? "Prêt à Résoudre Votre Problème Juridique ?"
              : "Ready to Solve Your Legal Problem?"}
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "700px",
              margin: "0 auto 40px",
              opacity: 0.9,
            }}
          >
            {language === "fr"
              ? "Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider."
              : "Contact us today for a free consultation and discover how we can help you."}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "none",
                fontFamily: "'Source Serif Pro', serif",
                backgroundColor: "#b8860b",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#daa520";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0, 0, 0, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#b8860b";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {language === "fr"
                ? "Prendre Rendez-vous"
                : "Schedule Appointment"}
            </a>
            <WhatsAppButton text={t.hero.whatsappButton} />
          </div>
        </Container>
      </section>

      <style jsx>{`
        @media (max-width: 992px) {
          h1 {
            font-size: 2.8rem !important;
          }
          h2 {
            font-size: 2.2rem !important;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.3rem !important;
          }
          p {
            font-size: 1.1rem !important;
          }
          section {
            padding: 60px 0 !important;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          button,
          a {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
          .stats-container {
            flex-direction: column;
            gap: 20px;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1.8rem !important;
          }
          .cta h2 {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </>
  );
}
