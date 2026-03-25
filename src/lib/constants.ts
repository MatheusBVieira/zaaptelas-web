export const WHATSAPP_NUMBER = "5548991330508";
export const WHATSAPP_DISPLAY = "(48) 99133-0508";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá, gostaria de solicitar um orçamento"
)}`;

export function buildWhatsAppURL(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildProductWhatsAppURL(produtoNome: string) {
  return buildWhatsAppURL(
    `Olá! Gostaria de saber mais sobre *${produtoNome}*. Pode me passar um orçamento?`
  );
}
