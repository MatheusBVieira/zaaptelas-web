"use client";

import { useState } from "react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-creme/90 backdrop-blur-sm border-b border-escuro/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="#inicio" className="font-display text-2xl font-bold">
            <span className="text-escuro">Zaap</span>
            <span className="text-oliva">Telas</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-escuro/70 hover:text-escuro transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton
              location="navbar"
              className="px-4 py-2 text-sm"
            >
              Orçamento
            </WhatsAppButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-escuro transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-escuro transition-opacity ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-escuro transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-escuro/[0.08] bg-creme">
          <div className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-escuro/70 hover:text-escuro"
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton
              location="navbar_mobile"
              className="px-4 py-2 text-center text-sm"
            >
              Orçamento
            </WhatsAppButton>
          </div>
        </div>
      )}
    </nav>
  );
}
