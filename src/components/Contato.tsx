"use client";

import { motion, useReducedMotion } from "framer-motion";
import { depoimentos } from "@/data/depoimentos";

const WHATSAPP_URL =
  "https://wa.me/5548991330508?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

export function Contato() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contato" className="py-20 bg-escuro">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Depoimentos */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-display text-3xl font-bold text-creme sm:text-4xl"
          >
            O que nossos clientes dizem
          </motion.h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {depoimentos.map((dep) => (
              <motion.blockquote
                key={dep.id}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="border-l-2 border-dourado/40 pl-4"
              >
                <p className="text-sm italic text-creme/80">
                  &ldquo;{dep.texto}&rdquo;
                </p>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-display text-3xl font-bold text-creme sm:text-4xl"
          >
            Pronto para respirar ar limpo?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4 text-creme/60"
          >
            Atendemos Campeche, Rio Tavares, Lagoa da Conceição, Armação e toda
            a região sul de Florianópolis.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-sm bg-whatsapp px-8 py-4 text-base font-bold text-white transition-colors duration-200 ease-out hover:bg-whatsapp/85"
            >
              (48) 99133-0508 · WhatsApp
            </a>
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6 flex items-center justify-center gap-4 text-xs text-creme/40"
          >
            <span>Visa</span>
            <span>·</span>
            <span>Master</span>
            <span>·</span>
            <span>Elo</span>
          </motion.div>
        </motion.div>

        {/* Rodapé */}
        <div className="mt-16 border-t border-creme/10 pt-8 text-center text-xs text-creme/40">
          <p>
            Zaaptelas · CNPJ 20.885.812/0001-79 · Florianópolis, SC
          </p>
        </div>
      </div>
    </section>
  );
}
