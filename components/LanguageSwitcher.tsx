"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      style={{
        background: "none",
        border: "1px solid #eae6dd",
        padding: "8px 16px",
        borderRadius: "4px",
        fontFamily: "'Source Serif Pro', serif",
        color: "#333333",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        transition: "all 0.3s ease",
        fontSize: "0.95rem",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f8f5f0";
        e.currentTarget.style.borderColor = "#b8860b";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.borderColor = "#eae6dd";
      }}
    >
      <Languages size={16} />
      {language === "fr" ? "FR" : "EN"}
    </button>
  );
}
