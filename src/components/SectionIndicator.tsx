"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "inicio", label: "Início" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "produtos", label: "Produtos" },
  { id: "como-funciona", label: "Como Funciona" },
  { id: "galeria", label: "Galeria" },
  { id: "areas", label: "Áreas" },
  { id: "contato", label: "Contato" },
];

export function SectionIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((s) => s.id === entry.target.id);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const prev = sections[activeIndex - 1];
  const next = sections[activeIndex + 1];
  const current = sections[activeIndex];

  return (
    <div className="fixed bottom-8 left-1/2 z-40 -translate-x-1/2">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-3 rounded-full bg-escuro/80 px-4 py-2 text-xs text-creme backdrop-blur-sm"
        >
          {prev && (
            <a href={`#${prev.id}`} className="opacity-60 hover:opacity-100 transition-opacity">
              ← {prev.label}
            </a>
          )}
          <span className="font-medium text-dourado">{current.label}</span>
          {next && (
            <a href={`#${next.id}`} className="opacity-60 hover:opacity-100 transition-opacity">
              {next.label} →
            </a>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
