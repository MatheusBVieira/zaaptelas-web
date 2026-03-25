"use client";

import { trackEvent } from "@/lib/analytics";
import { WHATSAPP_URL } from "@/lib/constants";

interface WhatsAppButtonProps {
  href?: string;
  location: string;
  children: React.ReactNode;
  className?: string;
  analyticsExtras?: Record<string, string>;
}

export function WhatsAppButton({
  href,
  location,
  children,
  className = "",
  analyticsExtras,
}: WhatsAppButtonProps) {
  return (
    <a
      href={href ?? WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("whatsapp_click", { location, ...analyticsExtras })
      }
      aria-label="Solicitar orçamento pelo WhatsApp"
      className={`inline-flex cursor-pointer items-center justify-center rounded-sm bg-whatsapp font-bold text-white transition-colors duration-200 ease-out hover:bg-whatsapp/85 ${className}`}
    >
      {children}
    </a>
  );
}
