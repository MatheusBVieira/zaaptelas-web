"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const etapas = [
  {
    numero: "01",
    titulo: "Medição gratuita",
    descricao: "Visita sem compromisso para medir suas janelas e portas com precisão.",
  },
  {
    numero: "02",
    titulo: "Fabricação sob medida",
    descricao: "Cada tela é cortada e montada nas dimensões exatas do seu espaço.",
  },
  {
    numero: "03",
    titulo: "Instalação rápida",
    descricao: "Acabamento aprovado na hora, com limpeza total após o serviço.",
  },
];

export function ComoFunciona() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="como-funciona" className="py-20 bg-escuro">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-display text-3xl font-bold text-creme sm:text-4xl"
          >
            Como Funciona
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-2 text-creme/60"
          >
            Processo simples, resultado perfeito.
          </motion.p>
        </motion.div>
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {etapas.map((etapa, i) => (
            <motion.div
              key={etapa.numero}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex flex-col"
            >
              <span className="font-display text-6xl font-bold text-dourado/30">
                {etapa.numero}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-creme">
                {etapa.titulo}
              </h3>
              <p className="mt-2 text-sm text-creme/70">{etapa.descricao}</p>
              {i < etapas.length - 1 && (
                <ChevronRight
                  className="absolute right-0 top-8 hidden text-dourado/40 md:block"
                  size={28}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
