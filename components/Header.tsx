"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import { Scale, Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { language } = useLanguage();
  const t = content[language];
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "/", label: t.nav.home },
    { id: "/cabinet", label: t.nav.cabinet },
    { id: "/expertise", label: t.nav.expertise },
    { id: "/pour-quoi-nous-choisir", label: t.nav.why },
    { id: "/nos-avocats", label: t.nav.team },
    { id: "/contact", label: t.nav.contact },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#fffefc",
        boxShadow: scrolled
          ? "0 5px 15px rgba(0, 0, 0, 0.1)"
          : "0 2px 10px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        padding: scrolled ? "5px 0" : "0",
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <div>
              <Scale size={32} color="#1a472a" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "12px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#1a472a",
                  lineHeight: 1.2,
                }}
              >
                {t.header.firmName}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#b8860b",
                  letterSpacing: "1px",
                }}
              >
                {t.header.tagline}
              </div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              color: "#1a472a",
              cursor: "pointer",
              zIndex: 1001,
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav style={{ display: "block" }}>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                alignItems: "center",
                margin: 0,
                padding: 0,
              }}
            >
              {navItems.map((item) => (
                <li key={item.id} style={{ marginLeft: "30px" }}>
                  <Link
                    href={item.id}
                    style={{
                      textDecoration: "none",
                      color: isActive(item.id) ? "#b8860b" : "#1a472a",
                      fontWeight: 600,
                      fontSize: "1rem",
                      transition: "color 0.3s ease",
                      position: "relative",
                    }}
                    onMouseEnter={(e) =>
                      !isActive(item.id) &&
                      (e.currentTarget.style.color = "#b8860b")
                    }
                    onMouseLeave={(e) =>
                      !isActive(item.id) &&
                      (e.currentTarget.style.color = "#1a472a")
                    }
                  >
                    {item.label}
                    {isActive(item.id) && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "-5px",
                          left: 0,
                          width: "100%",
                          height: "2px",
                          backgroundColor: "#b8860b",
                        }}
                      />
                    )}
                  </Link>
                </li>
              ))}
              <li style={{ marginLeft: "30px" }}>
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            style={{
              display: "block",
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              backgroundColor: "#fffefc",
              padding: "20px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
            }}
          >
            {navItems.map((item) => (
              <div key={item.id} style={{ margin: "15px 0" }}>
                <Link
                  href={item.id}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: isActive(item.id) ? "#b8860b" : "#1a472a",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    display: "block",
                    padding: "10px 0",
                  }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div style={{ marginTop: "20px" }}>
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          nav ul {
            display: none !important;
          }
          button {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
