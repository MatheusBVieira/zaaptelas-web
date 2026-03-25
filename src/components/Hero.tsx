const WHATSAPP_URL =
  "https://wa.me/5548991330508?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-escuro pt-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-block rounded-full bg-dourado/20 px-3 py-1 text-xs font-medium text-dourado w-fit">
            +10 anos de experiência
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-creme sm:text-5xl lg:text-6xl">
            Ventilação livre.
            <br />
            Insetos fora.
          </h1>
          <p className="mt-4 max-w-md text-lg text-creme/70">
            Telas mosquiteiras em alumínio sob medida. Fabricação própria e
            instalação rápida na Grande Florianópolis.
          </p>
          <p className="mt-2 text-sm text-dourado">
            Grande Florianópolis · Sob medida · Alumínio
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-whatsapp px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#produtos"
              className="rounded-sm border border-creme/20 px-6 py-3 text-sm font-medium text-creme transition-colors hover:bg-creme/10"
            >
              Ver produtos
            </a>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="h-96 w-96 rounded-sm border border-creme/10 bg-creme/5" />
        </div>
      </div>
    </section>
  );
}
