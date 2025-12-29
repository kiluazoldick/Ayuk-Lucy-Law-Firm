"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import {
  Award,
  UserCheck,
  Lock,
  Users,
  Target,
  CheckCircle,
  Star,
  Shield,
  Zap,
  Clock,
  ThumbsUp,
} from "lucide-react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function WhyChooseUsPage() {
  const { language } = useLanguage();
  const t = content[language];

  const advantageIcons = [
    <Award key="award" size={28} />,
    <UserCheck key="usercheck" size={28} />,
    <Lock key="lock" size={28} />,
    <Users key="users" size={28} />,
    <Target key="target" size={28} />,
    <CheckCircle key="checkcircle" size={28} />,
  ];

  return (
    <div style={{ marginTop: "100px" }}>
      {/* Hero */}
      <section
        style={{
          background:
            'linear-gradient(rgba(26, 71, 42, 0.9), rgba(26, 71, 42, 0.95)), url("https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
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
            {t.whyUs.title}
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "800px",
              margin: "0 auto",
              opacity: 0.9,
            }}
          >
            {t.whyUs.description}
          </p>
        </Container>
      </section>

      {/* Advantages */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <SectionTitle
            title={language === "fr" ? "Nos Avantages" : "Our Advantages"}
            center={true}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "40px",
            }}
          >
            {t.whyUs.advantages.map((advantage, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fffefc",
                  borderRadius: "8px",
                  padding: "40px 30px",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
                  transition: "transform 0.3s ease",
                  borderLeft: "4px solid #b8860b",
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
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "25px",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#1a472a",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "20px",
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ color: "#ffffff" }}>
                      {advantageIcons[index]}
                    </div>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem",
                      color: "#0f2e1c",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {advantage.title}
                  </h3>
                </div>
                <p
                  style={{
                    color: "#666666",
                    marginBottom: "20px",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}
                >
                  {advantage.description}
                </p>
                <div
                  style={{
                    padding: "15px",
                    backgroundColor: "#f8f5f0",
                    borderRadius: "4px",
                    marginTop: "20px",
                  }}
                >
                  <p
                    style={{
                      color: "#333333",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    {advantage.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8f5f0" }}>
        <Container>
          <SectionTitle
            title={
              language === "fr" ? "Témoignages Clients" : "Client Testimonials"
            }
            center={true}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              marginTop: "50px",
            }}
          >
            {[
              {
                name: language === "fr" ? "Pierre Mbarga" : "Pierre Mbarga",
                role:
                  language === "fr"
                    ? "PDG, Groupe Mbarga"
                    : "CEO, Mbarga Group",
                text:
                  language === "fr"
                    ? "Le cabinet Ayuk Lucy nous a accompagnés dans notre expansion internationale. Leur expertise en droit OHADA a été déterminante."
                    : "Ayuk Lucy Law Firm accompanied us in our international expansion. Their expertise in OHADA law was decisive.",
                rating: 5,
              },
              {
                name: language === "fr" ? "Sophie Ngo" : "Sophie Ngo",
                role:
                  language === "fr" ? "Directrice Générale" : "General Manager",
                text:
                  language === "fr"
                    ? "Approche professionnelle et résultats concrets. Je recommande vivement ce cabinet pour toute question juridique complexe."
                    : "Professional approach and concrete results. I highly recommend this firm for any complex legal matter.",
                rating: 5,
              },
              {
                name: language === "fr" ? "David Schmidt" : "David Schmidt",
                role:
                  language === "fr"
                    ? "Investisseur International"
                    : "International Investor",
                text:
                  language === "fr"
                    ? "En tant qu'investisseur étranger, leur connaissance du droit camerounais et des réalités locales a été inestimable."
                    : "As a foreign investor, their knowledge of Cameroonian law and local realities was invaluable.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fffefc",
                  borderRadius: "8px",
                  padding: "40px 30px",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Shield
                    size={24}
                    color="#b8860b"
                    style={{ marginRight: "10px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} color="#b8860b" fill="#b8860b" />
                    ))}
                  </div>
                </div>
                <p
                  style={{
                    color: "#666666",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    marginBottom: "25px",
                  }}
                >
                  &quot;{testimonial.text}&quot;
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "20px",
                    borderTop: "1px solid #eae6dd",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.2rem",
                        color: "#0f2e1c",
                        margin: "0 0 5px 0",
                        fontWeight: 700,
                      }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      style={{
                        color: "#b8860b",
                        fontSize: "0.9rem",
                        margin: 0,
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Differentiators */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <SectionTitle
            title={
              language === "fr"
                ? "Ce Qui Nous Rend Uniques"
                : "What Makes Us Unique"
            }
            center={true}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              marginTop: "50px",
            }}
          >
            {[
              {
                icon: <Zap size={32} color="#ffffff" />,
                title:
                  language === "fr"
                    ? "Rapidité d'Exécution"
                    : "Execution Speed",
                description:
                  language === "fr"
                    ? "Délais réduits grâce à notre organisation efficace"
                    : "Reduced deadlines thanks to our efficient organization",
              },
              {
                icon: <Clock size={32} color="#ffffff" />,
                title:
                  language === "fr"
                    ? "Disponibilité 24/7"
                    : "24/7 Availability",
                description:
                  language === "fr"
                    ? "Accessible à tout moment pour les urgences"
                    : "Accessible at any time for emergencies",
              },
              {
                icon: <ThumbsUp size={32} color="#ffffff" />,
                title:
                  language === "fr"
                    ? "Taux de Succès Élevé"
                    : "High Success Rate",
                description:
                  language === "fr"
                    ? "98% de réussite dans nos dossiers"
                    : "98% success rate in our cases",
              },
              {
                icon: <Users size={32} color="#ffffff" />,
                title:
                  language === "fr"
                    ? "Équipe Multilingue"
                    : "Multilingual Team",
                description:
                  language === "fr"
                    ? "Communication en français, anglais et langues locales"
                    : "Communication in French, English and local languages",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "40px 25px",
                  backgroundColor: "#f8f5f0",
                  borderRadius: "8px",
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
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    color: "#0f2e1c",
                    marginBottom: "15px",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#666666", lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
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
          .advantages-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
