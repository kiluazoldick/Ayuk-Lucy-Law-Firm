import React from "react";
import {
  Briefcase,
  Gavel,
  Users,
  HardHat,
  Landmark,
  Globe,
} from "lucide-react";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
  };
  index: number;
}

const icons = [
  <Briefcase key="briefcase" size={28} />,
  <Gavel key="gavel" size={28} />,
  <Users key="users" size={28} />,
  <HardHat key="hardhat" size={28} />,
  <Landmark key="landmark" size={28} />,
  <Globe key="globe" size={28} />,
];

export default function ServiceCard({
  service,
  index,
}: Readonly<ServiceCardProps>) {
  return (
    <div
      style={{
        backgroundColor: "#fffefc",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        borderTop: "4px solid #b8860b",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.08)";
      }}
    >
      <div
        style={{
          backgroundColor: "#1a472a",
          color: "#ffffff",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "30px auto 20px",
          fontSize: "1.8rem",
        }}
      >
        {icons[index % icons.length]}
      </div>
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          textAlign: "center",
          marginBottom: "15px",
          padding: "0 20px",
          color: "#0f2e1c",
          fontWeight: 700,
          fontSize: "1.3rem",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          textAlign: "center",
          color: "#666666",
          padding: "0 20px 30px",
          lineHeight: 1.7,
        }}
      >
        {service.description}
      </p>
    </div>
  );
}
