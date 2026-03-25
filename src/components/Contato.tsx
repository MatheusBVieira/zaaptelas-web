import { depoimentos } from "@/data/depoimentos";

const WHATSAPP_URL =
  "https://wa.me/5548991330508?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

export function Contato() {
  return (
    <section id="contato" className="py-20 bg-escuro">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Depoimentos */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-creme sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {depoimentos.map((dep) => (
              <blockquote
                key={dep.id}
                className="border-l-2 border-dourado/40 pl-4"
              >
                <p className="text-sm italic text-creme/80">
                  &ldquo;{dep.texto}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-creme sm:text-4xl">
            Pronto para respirar ar limpo?
          </h2>
          <p className="mt-4 text-creme/60">
            Atendemos Campeche, Rio Tavares, Lagoa da Conceição, Armação e toda
            a região sul de Florianópolis.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-whatsapp px-8 py-4 text-base font-bold text-white transition-opacity hover:opacity-90"
            >
              (48) 99133-0508 · WhatsApp
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-creme/40">
            <span>Visa</span>
            <span>·</span>
            <span>Master</span>
            <span>·</span>
            <span>Elo</span>
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-16 border-t border-creme/10 pt-8 text-center text-xs text-creme/40">
          <p>
            Zaaptelas · CNPJ 20.885.812/0001-79 · Florianópolis, SC
          </p>
        </div>
      </div>
    </section>
  );
}
