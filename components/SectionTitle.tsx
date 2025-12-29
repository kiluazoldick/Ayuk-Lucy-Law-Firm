import React from "react";

interface SectionTitleProps {
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  title,
  description,
  center = true,
}: Readonly<SectionTitleProps>) {
  return (
    <div
      style={{
        textAlign: center ? "center" : "left",
        marginBottom: "60px",
        position: "relative",
      }}
    >
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2.5rem",
          marginBottom: "15px",
          color: "#0f2e1c",
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            color: "#666666",
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: center ? "0 auto" : "0",
          }}
        >
          {description}
        </p>
      )}
      <div
        style={{
          content: '""',
          position: "absolute",
          bottom: "-15px",
          left: center ? "50%" : "0",
          transform: center ? "translateX(-50%)" : "none",
          width: "80px",
          height: "3px",
          backgroundColor: "#b8860b",
        }}
      />
    </div>
  );
}
