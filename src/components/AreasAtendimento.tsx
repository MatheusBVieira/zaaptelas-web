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

interface LocationPin {
  name: string;
  cx: number;
  cy: number;
  anchor: "start" | "end";
  dx: number;
}

const locations: LocationPin[] = [
  { name: "Lagoa da Conceição", cx: 260, cy: 45, anchor: "end", dx: -14 },
  { name: "Canto da Lagoa", cx: 300, cy: 90, anchor: "start", dx: 14 },
  { name: "Porto da Lagoa", cx: 255, cy: 130, anchor: "end", dx: -14 },
  { name: "Rio Tavares", cx: 185, cy: 185, anchor: "end", dx: -14 },
  { name: "Campeche", cx: 295, cy: 225, anchor: "start", dx: 14 },
  { name: "Morro das Pedras", cx: 275, cy: 290, anchor: "start", dx: 14 },
  { name: "Armação", cx: 255, cy: 350, anchor: "start", dx: 14 },
  { name: "Pantano do Sul", cx: 235, cy: 410, anchor: "start", dx: 14 },
  { name: "Açores", cx: 190, cy: 445, anchor: "end", dx: -14 },
  { name: "Ribeirão da Ilha", cx: 105, cy: 325, anchor: "end", dx: -14 },
];

function MapaSulIlha() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="h-full w-full"
      role="img"
      aria-label="Mapa do sul da ilha de Florianópolis destacando as áreas de atendimento da Zaap Telas"
    >
      {/* Contorno da ilha - sul de Florianópolis */}
      <path
        d="M 135,12 C 175,2 235,0 285,12 C 315,22 328,42 332,68
           C 338,110 325,160 315,210 C 308,250 296,290 280,330
           C 265,370 250,410 232,440 C 215,465 195,475 178,465
           C 158,450 138,425 118,385 C 98,345 85,305 82,265
           C 78,225 82,180 92,138 C 102,95 118,52 135,12 Z"
        fill="rgba(245,242,236,0.04)"
        stroke="rgba(184,160,112,0.18)"
        strokeWidth="1"
      />

      {/* Lagoa da Conceição (lagoa) */}
      <path
        d="M 252,28 C 268,34 282,52 286,72 C 289,88 282,104 272,110
           C 262,115 252,108 246,95 C 240,80 240,58 245,42 C 247,36 250,30 252,28 Z"
        fill="rgba(184,160,112,0.06)"
        stroke="rgba(184,160,112,0.12)"
        strokeWidth="0.5"
      />

      {/* Pins e labels */}
      {locations.map((loc) => (
        <g key={loc.name}>
          <circle
            cx={loc.cx}
            cy={loc.cy}
            r="8"
            fill="rgba(184,160,112,0.12)"
          />
          <circle cx={loc.cx} cy={loc.cy} r="4" fill="#B8A070" />
          <text
            x={loc.cx + loc.dx}
            y={loc.cy + 4}
            textAnchor={loc.anchor}
            fill="rgba(245,242,236,0.65)"
            fontSize="11"
            fontFamily="var(--font-dm-sans), sans-serif"
          >
            {loc.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function AreasAtendimento() {
  const fadeUp = useFadeUp();

  return (
    <section id="areas" className="py-20 bg-escuro">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titulo="Áreas de Atendimento"
          subtitulo="Atendemos a região sul da ilha de Florianópolis."
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
            <div className="grid grid-cols-2 gap-3">
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

          {/* Mapa SVG */}
          <motion.div
            variants={fadeUp}
            transition={fadeUpTransition}
            className="flex items-center justify-center border border-creme/10 p-4"
          >
            <div className="h-[400px] w-full max-w-[320px]">
              <MapaSulIlha />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
