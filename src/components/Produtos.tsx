"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { buildProductWhatsAppURL } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  useFadeUp,
  fadeUpTransition,
  staggerViewportLoose,
  staggerChildren,
} from "@/lib/animations";
import { produtos } from "@/data/produtos";

export function Produtos() {
  const fadeUp = useFadeUp();

  return (
    <section id="produtos" className="py-20 bg-creme">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titulo="Nossos Produtos"
          subtitulo="Telas mosquiteiras para todos os tipos de abertura."
        />
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={staggerViewportLoose}
          transition={staggerChildren(0.12)}
        >
          {produtos.map((produto) => (
            <motion.div
              key={produto.nome}
              variants={fadeUp}
              transition={fadeUpTransition}
              className="group overflow-hidden border border-escuro/[0.08] transition-all duration-200 ease-out hover:border-dourado/40 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={produto.imagem}
                  alt={`Tela mosquiteira alumínio ${produto.nome.toLowerCase()} Florianópolis`}
                  width={produto.width}
                  height={produto.height}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-escuro">
                  {produto.nome}
                </h3>
                <p className="mt-2 text-sm text-escuro/70">
                  {produto.descricao}
                </p>
                <a
                  href={buildProductWhatsAppURL(produto.nome)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "produto", produto: produto.nome })}
                  aria-label={`Solicitar orçamento de ${produto.nome} pelo WhatsApp`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-oliva transition-colors duration-200 hover:text-dourado"
                >
                  <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />
                  Solicitar orçamento
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
