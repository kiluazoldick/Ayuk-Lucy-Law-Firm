import React from "react";
import Image from "next/image";

interface LawyerCardProps {
  member: {
    name: string;
    position: string;
    description: string;
  };
  index: number;
}

const photos = [
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
];

export default function LawyerCard({
  member,
  index,
}: Readonly<LawyerCardProps>) {
  return (
    <div
      style={{
        backgroundColor: "#fffefc",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.3s ease",
        height: "100%",
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
          height: "250px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={photos[index % photos.length]}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          style={{
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          }}
        />
      </div>
      <div style={{ padding: "25px" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            marginBottom: "5px",
            color: "#0f2e1c",
            fontWeight: 700,
            fontSize: "1.5rem",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            color: "#b8860b",
            fontWeight: 600,
            marginBottom: "15px",
            fontSize: "0.95rem",
          }}
        >
          {member.position}
        </p>
        <p style={{ color: "#666666", lineHeight: 1.7 }}>
          {member.description}
        </p>
      </div>
    </div>
  );
}
