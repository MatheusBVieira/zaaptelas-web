"use client";

import { type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { depoimentos } from "@/data/depoimentos";

const WHATSAPP_NUMBER = "5548991330508";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento`;

const tipoLabels: Record<string, string> = {
  "janela-correr": "Janela de correr",
  porta: "Porta",
  basculante: "Basculante",
  outro: "Outro",
};

function buildWhatsAppURL(data: {
  nome: string;
  telefone: string;
  tipo: string;
  mensagem: string;
}) {
  const lines = [
    `Olá! Gostaria de solicitar um orçamento.`,
    ``,
    `*Nome:* ${data.nome}`,
    `*Telefone:* ${data.telefone}`,
    `*Tipo de tela:* ${tipoLabels[data.tipo] || data.tipo}`,
  ];
  if (data.mensagem.trim()) {
    lines.push(`*Mensagem:* ${data.mensagem.trim()}`);
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function Contato() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get("nome") as string,
      telefone: formData.get("telefone") as string,
      tipo: formData.get("tipo") as string,
      mensagem: formData.get("mensagem") as string,
    };

    trackEvent("form_submit", { form_name: "orcamento", tipo: data.tipo });
    window.open(buildWhatsAppURL(data), "_blank", "noopener,noreferrer");
  }

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

        {/* CTA + Formulário */}
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {/* Lado esquerdo: CTA WhatsApp */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-3xl font-bold text-creme sm:text-4xl">
              Pronto para respirar ar limpo?
            </h2>
            <p className="mt-4 text-creme/60">
              Atendemos Campeche, Rio Tavares, Lagoa da Conceição, Armação e toda
              a região sul de Florianópolis.
            </p>
            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "contato" })}
                className="inline-block cursor-pointer rounded-sm bg-whatsapp px-8 py-4 text-base font-bold text-white transition-colors duration-200 ease-out hover:bg-whatsapp/85"
              >
                (48) 99133-0508 · WhatsApp
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-creme/40">
              <span>Visa</span>
              <span>·</span>
              <span>Master</span>
              <span>·</span>
              <span>Elo</span>
            </div>
          </motion.div>

          {/* Lado direito: Formulário → WhatsApp */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="font-display text-xl font-semibold text-creme">
              Monte seu orçamento
            </h3>
            <p className="mt-1 text-sm text-creme/50">
              Preencha e envie direto pelo WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm text-creme/70">
                  Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="mt-1 w-full border border-creme/10 bg-creme/5 px-4 py-2.5 text-sm text-creme placeholder-creme/30 transition-colors duration-200 focus:border-dourado/60 focus:outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm text-creme/70">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  className="mt-1 w-full border border-creme/10 bg-creme/5 px-4 py-2.5 text-sm text-creme placeholder-creme/30 transition-colors duration-200 focus:border-dourado/60 focus:outline-none"
                  placeholder="(48) 99999-9999"
                />
              </div>
              <div>
                <label htmlFor="tipo" className="block text-sm text-creme/70">
                  Tipo de tela *
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  required
                  defaultValue=""
                  className="mt-1 w-full cursor-pointer border border-creme/10 bg-creme/5 px-4 py-2.5 text-sm text-creme transition-colors duration-200 focus:border-dourado/60 focus:outline-none"
                >
                  <option value="" disabled className="text-escuro">
                    Selecione o tipo
                  </option>
                  <option value="janela-correr" className="text-escuro">
                    Janela de correr
                  </option>
                  <option value="porta" className="text-escuro">
                    Porta
                  </option>
                  <option value="basculante" className="text-escuro">
                    Basculante
                  </option>
                  <option value="outro" className="text-escuro">
                    Outro
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm text-creme/70">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={3}
                  className="mt-1 w-full resize-none border border-creme/10 bg-creme/5 px-4 py-2.5 text-sm text-creme placeholder-creme/30 transition-colors duration-200 focus:border-dourado/60 focus:outline-none"
                  placeholder="Descreva o que precisa (opcional)"
                />
              </div>
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-whatsapp px-6 py-3 text-sm font-bold text-white transition-colors duration-200 ease-out hover:bg-whatsapp/85"
              >
                <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />
                Enviar pelo WhatsApp
              </button>
            </form>
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
