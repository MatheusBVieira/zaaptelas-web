"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  useFadeUp,
  fadeUpTransition,
  staggerViewportLoose,
  staggerChildren,
} from "@/lib/animations";

const areas = [
  "Campeche",
  "Rio Tavares",
  "Canto da Lagoa",
  "Porto da Lagoa",
  "Lagoa da Conceição",
  "Morro das Pedras",
  "Armação",
  "Pantano do Sul",
  "Açores",
  "Ribeirão da Ilha",
];

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Campeche+Florian%C3%B3polis+SC&z=12&hl=pt-BR&output=embed";

export function AreasAtendimento() {
  const fadeUp = useFadeUp();

  return (
    <section id="areas" className="py-20 bg-escuro">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titulo="Áreas de Atendimento"
          subtitulo="Atendemos toda a região sul da ilha de Florianópolis."
          tema="escuro"
        />
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={staggerViewportLoose}
          transition={staggerChildren(0.1)}
        >
          {/* Lista de bairros */}
          <motion.div
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 border border-creme/10 px-4 py-3 text-sm text-creme/80 transition-colors duration-200 hover:border-dourado/30 hover:text-creme"
                >
                  <MapPin
                    size={14}
                    strokeWidth={1.5}
                    className="shrink-0 text-dourado"
                    aria-hidden="true"
                  />
                  {area}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-creme/50">
              Consulte disponibilidade para outros bairros via WhatsApp.
            </p>
          </motion.div>

          {/* Mapa */}
          <motion.div
            variants={fadeUp}
            transition={fadeUpTransition}
            className="overflow-hidden border border-creme/10"
          >
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de áreas de atendimento Zaap Telas em Florianópolis"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
