"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shield, Ruler, EyeOff, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Diferencial {
  titulo: string;
  descricao: string;
  Icone: LucideIcon;
}

const diferenciais: Diferencial[] = [
  {
    titulo: "Não enverga",
    descricao:
      "O alumínio mantém a forma original, vedando cantos sem folga mesmo após anos de uso.",
    Icone: Shield,
  },
  {
    titulo: "Sob medida e removível",
    descricao:
      "Instalação nas dimensões exatas da janela. Fácil de remover para limpeza, sem mofo.",
    Icone: Ruler,
  },
  {
    titulo: "Mais privacidade",
    descricao:
      "A tela impede a visão do interior do imóvel, mesmo com a janela aberta.",
    Icone: EyeOff,
  },
  {
    titulo: "Ecologicamente correto",
    descricao:
      "Material reciclável e durável. Alumínio com tecido de fibra de vidro revestida com PVC.",
    Icone: Leaf,
  },
];

export function Diferenciais() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="diferenciais" className="py-20 bg-creme">
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
            className="font-display text-3xl font-bold text-escuro sm:text-4xl"
          >
            Por que alumínio?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-2 text-oliva"
          >
            Diferenciais que fazem a diferença no dia a dia.
          </motion.p>
        </motion.div>
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {diferenciais.map((item) => (
            <motion.div
              key={item.titulo}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="cursor-pointer border border-escuro/[0.08] p-6 transition-all duration-200 ease-out hover:border-dourado/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <item.Icone
                className="text-dourado"
                size={28}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-4 font-display text-lg font-semibold text-escuro">
                {item.titulo}
              </h3>
              <p className="mt-2 text-sm text-escuro/70">{item.descricao}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
