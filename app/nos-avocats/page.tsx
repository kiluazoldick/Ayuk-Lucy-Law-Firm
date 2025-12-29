"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import {
  User,
  GraduationCap,
  Globe,
  Award,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function TeamPage() {
  const { language } = useLanguage();
  const t = content[language];

  const teamPhotos = [
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
  ];

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
            {t.team.title}
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "800px",
              margin: "0 auto",
              opacity: 0.9,
            }}
          >
            {t.team.description}
          </p>
        </Container>
      </section>

      {/* Team Grid */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <SectionTitle
            title={
              language === "fr" ? "Notre Équipe d'Experts" : "Our Expert Team"
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
            {t.team.members.map((member, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fffefc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
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
                    height: "300px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={teamPhotos[index]}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      backgroundColor: "#b8860b",
                      color: "#ffffff",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
                <div style={{ padding: "40px 30px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "15px",
                    }}
                  >
                    <User
                      size={20}
                      color="#b8860b"
                      style={{ marginRight: "10px" }}
                    />
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.8rem",
                        color: "#0f2e1c",
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      {member.name}
                    </h3>
                  </div>
                  <p
                    style={{
                      color: "#b8860b",
                      fontWeight: 600,
                      marginBottom: "25px",
                      fontSize: "1.1rem",
                    }}
                  >
                    {member.position}
                  </p>
                  <p
                    style={{
                      color: "#666666",
                      lineHeight: 1.7,
                      marginBottom: "30px",
                      fontSize: "1.1rem",
                    }}
                  >
                    {member.description}
                  </p>

                  <div
                    style={{
                      backgroundColor: "#f8f5f0",
                      borderRadius: "4px",
                      padding: "20px",
                      marginBottom: "25px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                      }}
                    >
                      <GraduationCap
                        size={18}
                        color="#1a472a"
                        style={{ marginRight: "10px" }}
                      />
                      <span style={{ color: "#333333", fontWeight: 600 }}>
                        {language === "fr" ? "Formation:" : "Education:"}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "#666666",
                        margin: 0,
                        paddingLeft: "28px",
                      }}
                    >
                      {member.education}
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: "#f8f5f0",
                      borderRadius: "4px",
                      padding: "20px",
                      marginBottom: "25px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                      }}
                    >
                      <Globe
                        size={18}
                        color="#1a472a"
                        style={{ marginRight: "10px" }}
                      />
                      <span style={{ color: "#333333", fontWeight: 600 }}>
                        {language === "fr" ? "Langues:" : "Languages:"}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "#666666",
                        margin: 0,
                        paddingLeft: "28px",
                      }}
                    >
                      {member.languages}
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                      }}
                    >
                      <Award
                        size={18}
                        color="#1a472a"
                        style={{ marginRight: "10px" }}
                      />
                      <span style={{ color: "#333333", fontWeight: 600 }}>
                        {language === "fr"
                          ? "Spécialisations:"
                          : "Specializations:"}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        paddingLeft: "28px",
                      }}
                    >
                      {member.specializations.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          style={{
                            backgroundColor: "#eae6dd",
                            padding: "6px 15px",
                            borderRadius: "20px",
                            fontSize: "0.9rem",
                            color: "#666666",
                          }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      marginTop: "30px",
                      paddingTop: "25px",
                      borderTop: "1px solid #eae6dd",
                    }}
                  >
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        backgroundColor: "#1a472a",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        flex: 1,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#0f2e1c";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#1a472a";
                      }}
                    >
                      <Mail size={16} />
                      {language === "fr" ? "Contacter" : "Contact"}
                    </button>
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        backgroundColor: "#b8860b",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        flex: 1,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#daa520";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#b8860b";
                      }}
                    >
                      <Calendar size={16} />
                      {language === "fr" ? "RDV" : "Appointment"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Philosophy */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8f5f0" }}>
        <Container>
          <SectionTitle
            title={
              language === "fr"
                ? "Notre Philosophie d'Équipe"
                : "Our Team Philosophy"
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
                ? "Nous croyons en la puissance de la collaboration et de l'expertise collective. Chaque avocat de notre cabinet apporte des compétences uniques, mais c'est en travaillant ensemble que nous offrons les meilleures solutions à nos clients."
                : "We believe in the power of collaboration and collective expertise. Each lawyer in our firm brings unique skills, but it is by working together that we provide the best solutions to our clients."}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "30px",
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "30px 20px",
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
                  15+
                </div>
                <div
                  style={{
                    color: "#666666",
                    fontSize: "1.1rem",
                  }}
                >
                  {language === "fr"
                    ? "Années d'Expérience"
                    : "Years of Experience"}
                </div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  padding: "30px 20px",
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
                  500+
                </div>
                <div
                  style={{
                    color: "#666666",
                    fontSize: "1.1rem",
                  }}
                >
                  {language === "fr" ? "Affaires Traitées" : "Cases Handled"}
                </div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  padding: "30px 20px",
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
                  98%
                </div>
                <div
                  style={{
                    color: "#666666",
                    fontSize: "1.1rem",
                  }}
                >
                  {language === "fr"
                    ? "Taux de Satisfaction"
                    : "Satisfaction Rate"}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        style={{
          background:
            "linear-gradient(rgba(184, 134, 11, 0.9), rgba(218, 165, 32, 0.95))",
          color: "#ffffff",
          textAlign: "center",
          padding: "80px 0",
        }}
      >
        <Container>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            {language === "fr"
              ? "Besoin d'un Expert Juridique ?"
              : "Need a Legal Expert?"}
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
              ? "Notre équipe d'avocats expérimentés est prête à vous accompagner dans vos démarches juridiques."
              : "Our team of experienced lawyers is ready to accompany you in your legal procedures."}
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
              <Phone size={18} />
              {language === "fr" ? "Nous Contacter" : "Contact Us"}
            </a>
            <a
              href="/expertise"
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
                border: "2px solid #ffffff",
                fontFamily: "'Source Serif Pro', serif",
                backgroundColor: "transparent",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#b8860b";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {language === "fr" ? "Voir Nos Services" : "View Our Services"}
            </a>
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
          .team-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .team-member-buttons {
            flex-direction: column;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 2rem !important;
          }
          .specializations {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}
