"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import {
  Briefcase,
  Gavel,
  Users,
  HardHat,
  Landmark,
  Globe,
  FileText,
  Scale,
  Building,
  Handshake,
} from "lucide-react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function ExpertisePage() {
  const { language } = useLanguage();
  const t = content[language];

  const serviceIcons = [
    <Briefcase key="briefcase" size={28} />,
    <Gavel key="gavel" size={28} />,
    <Users key="users" size={28} />,
    <HardHat key="hardhat" size={28} />,
    <Landmark key="landmark" size={28} />,
    <Globe key="globe" size={28} />,
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
            {t.expertisePage.title}
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "800px",
              margin: "0 auto",
              opacity: 0.9,
            }}
          >
            {t.expertisePage.description}
          </p>
        </Container>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <SectionTitle
            title={
              language === "fr"
                ? "Nos Domaines d'Expertise"
                : "Our Areas of Expertise"
            }
            center={true}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "40px",
            }}
          >
            {t.expertisePage.services.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fffefc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderTop: "4px solid #b8860b",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0, 0, 0, 0.08)";
                }}
              >
                <div
                  style={{
                    backgroundColor: "#1a472a",
                    padding: "30px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1a472a",
                      flexShrink: 0,
                    }}
                  >
                    {serviceIcons[index]}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem",
                      color: "#ffffff",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
                <div style={{ padding: "30px" }}>
                  <p
                    style={{
                      color: "#666666",
                      marginBottom: "25px",
                      fontSize: "1.1rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </p>
                  <div
                    style={{
                      padding: "20px",
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
                      }}
                    >
                      {service.detailed}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "25px",
                      paddingTop: "25px",
                      borderTop: "1px solid #eae6dd",
                    }}
                  >
                    <FileText
                      size={18}
                      color="#b8860b"
                      style={{ marginRight: "10px" }}
                    />
                    <span
                      style={{
                        color: "#666666",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      {language === "fr"
                        ? "Services inclus:"
                        : "Services included:"}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginLeft: "15px",
                        flexWrap: "wrap",
                      }}
                    >
                      {index === 0 && (
                        <>
                          <span
                            style={{
                              backgroundColor: "#eae6dd",
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              color: "#666666",
                            }}
                          >
                            {language === "fr"
                              ? "Création société"
                              : "Company formation"}
                          </span>
                          <span
                            style={{
                              backgroundColor: "#eae6dd",
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              color: "#666666",
                            }}
                          >
                            {language === "fr" ? "Contrats" : "Contracts"}
                          </span>
                          <span
                            style={{
                              backgroundColor: "#eae6dd",
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              color: "#666666",
                            }}
                          >
                            {language === "fr" ? "Fusions" : "Mergers"}
                          </span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span
                            style={{
                              backgroundColor: "#eae6dd",
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              color: "#666666",
                            }}
                          >
                            {language === "fr" ? "Défense" : "Defense"}
                          </span>
                          <span
                            style={{
                              backgroundColor: "#eae6dd",
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              color: "#666666",
                            }}
                          >
                            {language === "fr" ? "Conseil" : "Advice"}
                          </span>
                          <span
                            style={{
                              backgroundColor: "#eae6dd",
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              color: "#666666",
                            }}
                          >
                            {language === "fr" ? "Assistance" : "Assistance"}
                          </span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <span
                            style={{
                              backgroundColor: "#eae6dd",
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              color: "#666666",
                            }}
                          >
                            {language === "fr" ? "Divorce" : "Divorce"}
                          </span>
                          <span
                            style={{
                              backgroundColor: "#eae6dd",
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              color: "#666666",
                            }}
                          >
                            {language === "fr" ? "Succession" : "Succession"}
                          </span>
                          <span
                            style={{
                              backgroundColor: "#eae6dd",
                              padding: "4px 12px",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              color: "#666666",
                            }}
                          >
                            {language === "fr" ? "Immobilier" : "Real estate"}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8f5f0" }}>
        <Container>
          <SectionTitle
            title={
              language === "fr"
                ? "Notre Processus de Travail"
                : "Our Work Process"
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
                icon: <FileText size={32} color="#ffffff" />,
                title:
                  language === "fr"
                    ? "Consultation Initiale"
                    : "Initial Consultation",
                description:
                  language === "fr"
                    ? "Analyse gratuite de votre situation et évaluation des options"
                    : "Free analysis of your situation and assessment of options",
              },
              {
                icon: <Scale size={32} color="#ffffff" />,
                title:
                  language === "fr" ? "Analyse Juridique" : "Legal Analysis",
                description:
                  language === "fr"
                    ? "Examen approfondi des aspects légaux et recommandations"
                    : "In-depth review of legal aspects and recommendations",
              },
              {
                icon: <Handshake size={32} color="#ffffff" />,
                title:
                  language === "fr"
                    ? "Stratégie Personnalisée"
                    : "Custom Strategy",
                description:
                  language === "fr"
                    ? "Développement d'une stratégie adaptée à vos objectifs"
                    : "Development of a strategy tailored to your goals",
              },
              {
                icon: <Building size={32} color="#ffffff" />,
                title:
                  language === "fr"
                    ? "Exécution & Suivi"
                    : "Execution & Follow-up",
                description:
                  language === "fr"
                    ? "Mise en œuvre et suivi continu jusqu'à résolution"
                    : "Implementation and continuous follow-up until resolution",
              },
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "40px 25px",
                  backgroundColor: "#fffefc",
                  borderRadius: "8px",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "#1a472a",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 25px",
                  }}
                >
                  {step.icon}
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
                  {step.title}
                </h3>
                <p style={{ color: "#666666", lineHeight: 1.6 }}>
                  {step.description}
                </p>
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "2rem",
                    color: "#b8860b",
                    fontWeight: 700,
                  }}
                >
                  0{index + 1}
                </div>
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
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 2rem !important;
          }
          .service-tags {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}
