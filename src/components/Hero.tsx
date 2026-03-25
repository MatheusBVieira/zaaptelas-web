"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_URL =
  "https://wa.me/5548991330508?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-escuro pt-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4 inline-block rounded-full bg-dourado/20 px-3 py-1 text-xs font-medium text-dourado w-fit"
          >
            +10 anos de experiência
          </motion.span>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-display text-4xl font-bold leading-tight text-creme sm:text-5xl lg:text-6xl"
          >
            Ventilação livre.
            <br />
            Insetos fora.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4 max-w-md text-lg text-creme/70"
          >
            Telas mosquiteiras em alumínio sob medida. Fabricação própria e
            instalação rápida na Grande Florianópolis.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-2 text-sm text-dourado"
          >
            Grande Florianópolis · Sob medida · Alumínio
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
              aria-label="Solicitar orçamento pelo WhatsApp"
              className="cursor-pointer rounded-sm bg-whatsapp px-6 py-3 text-sm font-bold text-white transition-colors duration-200 ease-out hover:bg-whatsapp/85"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#produtos"
              className="cursor-pointer rounded-sm border border-creme/20 px-6 py-3 text-sm font-medium text-creme transition-colors duration-200 ease-out hover:bg-creme/10"
            >
              Ver produtos
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <div className="h-96 w-96 rounded-sm border border-creme/10 bg-creme/5" />
        </motion.div>
      </div>
    </section>
  );
}
