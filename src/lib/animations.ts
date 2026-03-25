"use client";

import { useReducedMotion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

export function useFadeUp(): Variants {
  const prefersReducedMotion = useReducedMotion();

  return {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };
}

export const fadeUpTransition: Transition = {
  duration: 0.5,
  ease: "easeOut",
};

export const staggerViewport = {
  once: true,
  amount: 0.3,
} as const;

export const staggerViewportLoose = {
  once: true,
  amount: 0.2,
} as const;

export function staggerChildren(delay = 0.1) {
  return { staggerChildren: delay };
}
