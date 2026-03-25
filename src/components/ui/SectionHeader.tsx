"use client";

import { motion } from "framer-motion";
import {
  useFadeUp,
  fadeUpTransition,
  staggerViewport,
  staggerChildren,
} from "@/lib/animations";

interface SectionHeaderProps {
  titulo: string;
  subtitulo: string;
  tema?: "claro" | "escuro";
}

export function SectionHeader({
  titulo,
  subtitulo,
  tema = "claro",
}: SectionHeaderProps) {
  const fadeUp = useFadeUp();

  const titleColor = tema === "escuro" ? "text-creme" : "text-escuro";
  const subtitleColor = tema === "escuro" ? "text-creme/60" : "text-oliva";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={staggerViewport}
      transition={staggerChildren()}
    >
      <motion.h2
        variants={fadeUp}
        transition={fadeUpTransition}
        className={`font-display text-3xl font-bold sm:text-4xl ${titleColor}`}
      >
        {titulo}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        transition={fadeUpTransition}
        className={`mt-2 ${subtitleColor}`}
      >
        {subtitulo}
      </motion.p>
    </motion.div>
  );
}
