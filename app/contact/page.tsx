"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Calendar,
} from "lucide-react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = content[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(
      language === "fr"
        ? "Message envoyé avec succès!"
        : "Message sent successfully!"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            {t.contact.title}
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "800px",
              margin: "0 auto",
              opacity: 0.9,
            }}
          >
            {t.contact.description}
          </p>
        </Container>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "60px",
            }}
          >
            {/* Contact Form */}
            <div>
              <SectionTitle
                title={t.contact.formTitle}
                description={t.contact.formDescription}
                center={false}
              />

              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#fffefc",
                  padding: "40px",
                  borderRadius: "8px",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div style={{ marginBottom: "25px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#333333",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                    }}
                  >
                    {t.contact.nameLabel}
                  </label>
                  <div style={{ position: "relative" }}>
                    <User
                      size={20}
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#b8860b",
                      }}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 45px",
                        border: "1px solid #eae6dd",
                        borderRadius: "4px",
                        fontSize: "1rem",
                        fontFamily: "'Source Serif Pro', serif",
                        color: "#333333",
                        backgroundColor: "#f8f5f0",
                        transition: "border-color 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#b8860b";
                        e.target.style.outline = "none";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#eae6dd";
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "25px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#333333",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                    }}
                  >
                    {t.contact.emailLabel}
                  </label>
                  <div style={{ position: "relative" }}>
                    <Mail
                      size={20}
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#b8860b",
                      }}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 45px",
                        border: "1px solid #eae6dd",
                        borderRadius: "4px",
                        fontSize: "1rem",
                        fontFamily: "'Source Serif Pro', serif",
                        color: "#333333",
                        backgroundColor: "#f8f5f0",
                        transition: "border-color 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#b8860b";
                        e.target.style.outline = "none";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#eae6dd";
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "25px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#333333",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                    }}
                  >
                    {t.contact.phoneLabel}
                  </label>
                  <div style={{ position: "relative" }}>
                    <Phone
                      size={20}
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#b8860b",
                      }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 45px",
                        border: "1px solid #eae6dd",
                        borderRadius: "4px",
                        fontSize: "1rem",
                        fontFamily: "'Source Serif Pro', serif",
                        color: "#333333",
                        backgroundColor: "#f8f5f0",
                        transition: "border-color 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#b8860b";
                        e.target.style.outline = "none";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#eae6dd";
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "25px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#333333",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                    }}
                  >
                    {t.contact.subjectLabel}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #eae6dd",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      fontFamily: "'Source Serif Pro', serif",
                      color: "#333333",
                      backgroundColor: "#f8f5f0",
                      transition: "border-color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#b8860b";
                      e.target.style.outline = "none";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#eae6dd";
                    }}
                  >
                    <option value="">
                      {language === "fr"
                        ? "-- Sélectionnez un sujet --"
                        : "-- Select a subject --"}
                    </option>
                    <option value="business">
                      {language === "fr"
                        ? "Droit des Affaires"
                        : "Business Law"}
                    </option>
                    <option value="criminal">
                      {language === "fr" ? "Droit Pénal" : "Criminal Law"}
                    </option>
                    <option value="civil">
                      {language === "fr" ? "Droit Civil" : "Civil Law"}
                    </option>
                    <option value="labor">
                      {language === "fr" ? "Droit du Travail" : "Labor Law"}
                    </option>
                    <option value="international">
                      {language === "fr"
                        ? "Droit International"
                        : "International Law"}
                    </option>
                    <option value="other">
                      {language === "fr" ? "Autre" : "Other"}
                    </option>
                  </select>
                </div>

                <div style={{ marginBottom: "30px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#333333",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                    }}
                  >
                    {t.contact.messageLabel}
                  </label>
                  <div style={{ position: "relative" }}>
                    <MessageSquare
                      size={20}
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "15px",
                        color: "#b8860b",
                      }}
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 45px",
                        border: "1px solid #eae6dd",
                        borderRadius: "4px",
                        fontSize: "1rem",
                        fontFamily: "'Source Serif Pro', serif",
                        color: "#333333",
                        backgroundColor: "#f8f5f0",
                        transition: "border-color 0.3s ease",
                        resize: "vertical",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#b8860b";
                        e.target.style.outline = "none";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#eae6dd";
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                    padding: "15px",
                    backgroundColor: "#1a472a",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    fontFamily: "'Source Serif Pro', serif",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
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
                  <Send size={20} />
                  {t.contact.submitButton}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <SectionTitle title={t.contact.contactInfoTitle} center={false} />

              <div
                style={{
                  backgroundColor: "#fffefc",
                  padding: "40px",
                  borderRadius: "8px",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
                  marginBottom: "30px",
                }}
              >
                <div style={{ marginBottom: "25px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "20px",
                    }}
                  >
                    <MapPin
                      size={24}
                      color="#b8860b"
                      style={{ marginRight: "15px", flexShrink: 0 }}
                    />
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
                        {language === "fr" ? "Adresse" : "Address"}
                      </h4>
                      <p
                        style={{ color: "#666666", margin: 0, lineHeight: 1.6 }}
                      >
                        {t.footer.contact.address}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Phone
                      size={24}
                      color="#b8860b"
                      style={{ marginRight: "15px", flexShrink: 0 }}
                    />
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
                        {language === "fr" ? "Téléphone" : "Phone"}
                      </h4>
                      <p style={{ color: "#666666", margin: 0 }}>
                        {t.footer.contact.phone}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Mail
                      size={24}
                      color="#b8860b"
                      style={{ marginRight: "15px", flexShrink: 0 }}
                    />
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
                        {language === "fr" ? "Email" : "Email"}
                      </h4>
                      <p style={{ color: "#666666", margin: 0 }}>
                        {t.footer.contact.email}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "20px",
                    }}
                  >
                    <Clock
                      size={24}
                      color="#b8860b"
                      style={{ marginRight: "15px", flexShrink: 0 }}
                    />
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
                        {t.contact.officeHoursTitle}
                      </h4>
                      <p
                        style={{
                          color: "#666666",
                          margin: 0,
                          whiteSpace: "pre-line",
                          lineHeight: 1.6,
                        }}
                      >
                        {t.contact.officeHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#f8f5f0",
                    padding: "20px",
                    borderRadius: "4px",
                    marginTop: "30px",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem",
                      color: "#0f2e1c",
                      margin: "0 0 10px 0",
                      fontWeight: 700,
                    }}
                  >
                    {t.contact.emergencyTitle}
                  </h4>
                  <p style={{ color: "#666666", margin: 0 }}>
                    {t.contact.emergencyText}
                  </p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div style={{ textAlign: "center" }}>
                <WhatsAppButton
                  text={
                    language === "fr" ? "Message WhatsApp" : "WhatsApp Message"
                  }
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8f5f0" }}>
        <Container>
          <SectionTitle
            title={language === "fr" ? "Localisation" : "Location"}
            center={true}
          />

          <div
            style={{
              backgroundColor: "#fffefc",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
              height: "400px",
            }}
          >
            {/* Placeholder for Google Map */}
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#eae6dd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666666",
                fontSize: "1.2rem",
              }}
            >
              {language === "fr" ? "Carte Google Maps" : "Google Maps"}
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
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .form-container,
          .info-container {
            padding: 30px !important;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 2rem !important;
          }
          input,
          select,
          textarea {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
