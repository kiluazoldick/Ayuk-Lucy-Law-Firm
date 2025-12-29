import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text: string;
}

export default function WhatsAppButton({
  text,
}: Readonly<WhatsAppButtonProps>) {
  const phoneNumber = "+237123456789"; // Numéro réel à remplacer
  const message = encodeURIComponent(
    "Bonjour, je souhaite prendre rendez-vous pour une consultation."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
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
        backgroundColor: "#25D366",
        color: "#ffffff",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#128C7E";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#25D366";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <MessageCircle size={18} />
      {text}
    </a>
  );
}
