"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galeria } from "@/data/galeria";

export function Galeria() {
  const prefersReducedMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + galeria.length) % galeria.length : null
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galeria.length : null
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <>
      <section id="galeria" className="py-20 bg-creme">
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
              Galeria
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-2 text-oliva"
            >
              Trabalhos realizados pela Zaap Telas.
            </motion.p>
          </motion.div>
          <motion.div
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.08 }}
          >
            {galeria.map((foto, index) => (
              <motion.div
                key={foto.id}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="cursor-pointer overflow-hidden border border-escuro/[0.08] transition-all duration-200 ease-out hover:border-dourado/40 hover:shadow-md"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={`Abrir foto: ${foto.alt}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    width={foto.width}
                    height={foto.height}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                  />
                </div>
                {foto.legenda && (
                  <p className="px-4 py-2 text-xs text-escuro/60">
                    {foto.legenda}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-escuro/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Lightbox da galeria"
          >
            <motion.div
              className="relative mx-4 flex max-h-[85vh] max-w-4xl flex-col items-center"
              initial={{ scale: prefersReducedMotion ? 1 : 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: prefersReducedMotion ? 1 : 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagem no lightbox */}
              <Image
                src={galeria[lightboxIndex].src}
                alt={galeria[lightboxIndex].alt}
                width={galeria[lightboxIndex].width}
                height={galeria[lightboxIndex].height}
                className="max-h-[75vh] w-auto object-contain"
                sizes="(max-width: 768px) 95vw, 80vw"
              />

              <p className="mt-3 text-sm text-creme/70">
                {galeria[lightboxIndex].legenda}
              </p>
              <p className="mt-1 text-xs text-creme/40">
                {lightboxIndex + 1} / {galeria.length}
              </p>
            </motion.div>

            {/* Controles */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-4 right-4 cursor-pointer rounded-full bg-escuro/50 p-2 text-creme/80 transition-colors duration-200 hover:bg-escuro/80 hover:text-creme"
              aria-label="Fechar lightbox"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-escuro/50 p-2 text-creme/80 transition-colors duration-200 hover:bg-escuro/80 hover:text-creme"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={28} strokeWidth={1.5} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-escuro/50 p-2 text-creme/80 transition-colors duration-200 hover:bg-escuro/80 hover:text-creme"
              aria-label="Próxima foto"
            >
              <ChevronRight size={28} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
