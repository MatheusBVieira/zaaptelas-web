"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { produtos } from "@/data/produtos";

export function Produtos() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="produtos" className="py-20 bg-creme">
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
            Nossos Produtos
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-2 text-oliva"
          >
            Telas mosquiteiras para todos os tipos de abertura.
          </motion.p>
        </motion.div>
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {produtos.map((produto) => (
            <motion.div
              key={produto.nome}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative cursor-pointer overflow-hidden border border-escuro/[0.08] transition-all duration-200 ease-out hover:border-dourado/40 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={produto.imagem}
                  alt={`Tela mosquiteira alumínio ${produto.nome.toLowerCase()} Florianópolis`}
                  width={produto.width}
                  height={produto.height}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-escuro">
                  {produto.nome}
                </h3>
                <p className="mt-2 text-sm text-escuro/70">
                  {produto.descricao}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-escuro/70 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100">
                <span className="rounded-sm border border-dourado/60 px-4 py-2 text-sm font-medium text-dourado">
                  Ver detalhes
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
