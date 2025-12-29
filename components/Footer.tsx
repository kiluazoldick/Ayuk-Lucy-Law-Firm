"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#0f2e1c",
        color: "#ffffff",
        padding: "70px 0 30px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Column 1: Firm Description */}
          <div>
            <h3
              style={{
                color: "#ffffff",
                marginBottom: "25px",
                fontSize: "1.5rem",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                position: "relative",
                paddingBottom: "10px",
              }}
            >
              Ayuk Lucy Law Firm
            </h3>
            <p style={{ marginBottom: "15px", opacity: 0.8 }}>
              {t.footer.firmDescription}
            </p>
            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#b8860b";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#b8860b";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#b8860b";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#b8860b";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3
              style={{
                color: "#ffffff",
                marginBottom: "25px",
                fontSize: "1.5rem",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                position: "relative",
                paddingBottom: "10px",
              }}
            >
              {language === "fr" ? "Contact" : "Contact"}
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "15px",
                  opacity: 0.8,
                }}
              >
                <MapPin
                  size={18}
                  style={{
                    marginRight: "12px",
                    color: "#b8860b",
                    minWidth: "20px",
                  }}
                />
                <span>{t.footer.contact.address}</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                  opacity: 0.8,
                }}
              >
                <Phone
                  size={18}
                  style={{
                    marginRight: "12px",
                    color: "#b8860b",
                    minWidth: "20px",
                  }}
                />
                <span>{t.footer.contact.phone}</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                  opacity: 0.8,
                }}
              >
                <Mail
                  size={18}
                  style={{
                    marginRight: "12px",
                    color: "#b8860b",
                    minWidth: "20px",
                  }}
                />
                <span>{t.footer.contact.email}</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                  opacity: 0.8,
                }}
              >
                <Clock
                  size={18}
                  style={{
                    marginRight: "12px",
                    color: "#b8860b",
                    minWidth: "20px",
                  }}
                />
                <span>{t.footer.contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3
              style={{
                color: "#ffffff",
                marginBottom: "25px",
                fontSize: "1.5rem",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                position: "relative",
                paddingBottom: "10px",
              }}
            >
              {language === "fr" ? "Services Rapides" : "Quick Links"}
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {t.footer.quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() =>
                      scrollToSection(index < 4 ? "services" : "team")
                    }
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ffffff",
                      cursor: "pointer",
                      padding: 0,
                      fontSize: "1rem",
                      opacity: 0.8,
                      textAlign: "left",
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.color = "#b8860b";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0.8";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            paddingTop: "30px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            fontSize: "0.9rem",
            opacity: 0.7,
          }}
        >
          <p>{t.footer.copyright}</p>
        </div>
      </div>

      <style jsx>{`
        h3:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background-color: #b8860b;
        }
      `}</style>
    </footer>
  );
}
