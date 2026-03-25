"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useFadeUp, fadeUpTransition, staggerViewport } from "@/lib/animations";

export function Hero() {
  const fadeUp = useFadeUp();

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
          viewport={staggerViewport}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.span
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mb-4 inline-block rounded-full bg-dourado/20 px-3 py-1 text-xs font-medium text-dourado w-fit"
          >
            +10 anos de experiência
          </motion.span>
          <motion.h1
            variants={fadeUp}
            transition={fadeUpTransition}
            className="font-display text-4xl font-bold leading-tight text-creme sm:text-5xl lg:text-6xl"
          >
            Ventilação livre.
            <br />
            Insetos fora.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mt-4 max-w-md text-lg text-creme/70"
          >
            Telas mosquiteiras em alumínio sob medida. Fabricação própria e
            instalação rápida na Grande Florianópolis.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mt-2 text-sm text-dourado"
          >
            Grande Florianópolis · Sob medida · Alumínio
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mt-8 flex flex-wrap gap-4"
          >
            <WhatsAppButton
              location="hero"
              className="px-6 py-3 text-sm"
            >
              Solicitar Orçamento
            </WhatsAppButton>
            <a
              href="#produtos"
              className="rounded-sm border border-creme/20 px-6 py-3 text-sm font-medium text-creme transition-colors duration-200 ease-out hover:bg-creme/10"
            >
              Ver produtos
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={staggerViewport}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Tela mosquiteira em alumínio instalada em janela de correr Florianópolis"
            width={1600}
            height={1200}
            priority
            className="rounded-sm border border-creme/10 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
