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

// Posições calculadas a partir de coordenadas geográficas reais (OSM)
const locations: LocationPin[] = [
  { name: "Lagoa da Conceição", cx: 285, cy: 87, anchor: "end", dx: -14 },
  { name: "Canto da Lagoa", cx: 304, cy: 113, anchor: "start", dx: 14 },
  { name: "Porto da Lagoa", cx: 271, cy: 130, anchor: "end", dx: -14 },
  { name: "Rio Tavares", cx: 217, cy: 155, anchor: "end", dx: -14 },
  { name: "Campeche", cx: 275, cy: 205, anchor: "start", dx: 14 },
  { name: "Morro das Pedras", cx: 258, cy: 273, anchor: "start", dx: 14 },
  { name: "Armação", cx: 200, cy: 345, anchor: "start", dx: 14 },
  { name: "Pantano do Sul", cx: 171, cy: 396, anchor: "start", dx: 14 },
  { name: "Açores", cx: 146, cy: 441, anchor: "end", dx: -14 },
  { name: "Ribeirão da Ilha", cx: 81, cy: 290, anchor: "end", dx: -14 },
];

// Contorno real da ilha de Santa Catarina (metade sul) — dados OpenStreetMap, simplificados via Douglas-Peucker
const ISLAND_PATH =
  "M 20.9,368.8 L 37.9,377.8 L 37.8,384.4 L 33.8,388.6 L 34.8,396.4 L 42.7,402.7 L 43.9,410.7 L 61.7,413.7 L 66.1,419.5 L 50.9,434.6 L 52.9,439.8 L 62.6,444.1 L 67.5,453.5 L 53.8,464.4 L 53.4,471.8 L 48.0,475.7 L 44.4,484.7 L 42.4,492.6 L 45.0,493.9 L 51.8,489.9 L 60.5,490.4 L 66.1,492.9 L 66.4,498.5 L 98.5,483.4 L 106.6,468.3 L 107.7,457.0 L 117.8,445.4 L 114.7,438.8 L 120.9,433.6 L 118.6,427.3 L 131.5,413.0 L 145.1,404.7 L 157.5,401.1 L 172.0,401.8 L 177.5,405.0 L 174.6,414.8 L 176.8,417.7 L 194.8,424.1 L 218.5,415.6 L 227.2,404.9 L 216.3,394.2 L 228.0,381.7 L 238.7,384.7 L 242.2,382.9 L 238.8,376.3 L 240.1,370.8 L 222.3,365.3 L 216.9,357.2 L 200.0,361.1 L 190.8,350.3 L 195.7,344.2 L 189.6,348.9 L 178.4,343.3 L 175.5,334.6 L 175.8,316.5 L 185.6,298.3 L 185.6,291.6 L 205.2,266.6 L 230.6,249.3 L 241.7,210.6 L 262.8,179.2 L 292.2,149.8 L 300.0,145.0 L 307.3,145.9 L 307.7,136.4 L 320.0,129.8 L 319.2,125.5 L 335.2,123.0 L 333.7,116.7 L 330.7,118.3 L 326.6,115.1 L 327.2,106.8 L 337.5,94.9 L 342.9,95.0 L 340.6,90.0 L 346.2,84.2 L 360.7,83.7 L 363.9,77.0 L 360.1,67.7 L 375.4,55.1 L 375.8,50.2 L 368.0,47.8 L 357.6,52.3 L 356.0,49.0 L 352.8,51.8 L 347.6,50.3 L 340.8,40.6 L 340.0,20.4 L 162.9,20.4 L 152.7,30.0 L 142.3,30.2 L 155.9,41.2 L 157.9,45.8 L 154.6,51.7 L 138.0,51.8 L 135.6,48.8 L 131.3,50.2 L 113.1,44.8 L 112.6,48.7 L 100.5,55.4 L 96.6,67.1 L 60.9,78.1 L 57.8,84.8 L 64.0,88.8 L 63.5,93.0 L 80.7,99.8 L 89.2,108.2 L 86.4,110.3 L 89.5,111.9 L 86.4,113.6 L 87.0,117.3 L 93.2,118.1 L 97.5,123.9 L 111.1,114.4 L 112.8,118.0 L 127.3,122.3 L 125.1,124.1 L 130.4,126.3 L 127.9,127.5 L 131.8,132.3 L 129.6,134.7 L 134.5,139.9 L 131.6,145.6 L 137.3,161.9 L 136.1,172.8 L 142.2,174.4 L 140.1,180.0 L 116.6,176.7 L 115.5,173.7 L 108.4,173.8 L 104.5,170.3 L 82.9,177.9 L 78.1,176.4 L 55.6,212.4 L 40.9,218.4 L 51.2,229.4 L 45.5,232.5 L 41.0,240.5 L 51.2,246.5 L 52.8,254.3 L 58.4,256.9 L 69.6,254.6 L 79.8,259.4 L 82.3,265.0 L 66.4,278.6 L 56.1,294.8 L 61.4,328.1 L 68.8,335.5 L 64.8,350.8 L 45.3,363.6 Z";

// Lagoa da Conceição — formato simplificado baseado na geografia real
const LAGOA_PATH =
  "M 289,42 C 296,48 303,58 308,72 C 312,84 310,96 304,106 C 298,114 290,116 282,114 C 276,112 272,104 270,94 C 268,80 272,62 278,50 C 282,44 286,40 289,42 Z";

function MapaSulIlha() {
  return (
    <svg
      viewBox="0 0 400 520"
      className="h-full w-full"
      role="img"
      aria-label="Mapa do sul da ilha de Florianópolis destacando as áreas de atendimento da Zaap Telas"
    >
      {/* Contorno real da ilha */}
      <path
        d={ISLAND_PATH}
        fill="rgba(245,242,236,0.04)"
        stroke="rgba(184,160,112,0.22)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Lagoa da Conceição */}
      <path
        d={LAGOA_PATH}
        fill="rgba(184,160,112,0.06)"
        stroke="rgba(184,160,112,0.15)"
        strokeWidth="0.6"
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
            <div className="h-[420px] w-full max-w-[330px]">
              <MapaSulIlha />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
