const etapas = [
  {
    numero: "01",
    titulo: "Medição gratuita",
    descricao: "Visita sem compromisso para medir suas janelas e portas com precisão.",
  },
  {
    numero: "02",
    titulo: "Fabricação sob medida",
    descricao: "Cada tela é cortada e montada nas dimensões exatas do seu espaço.",
  },
  {
    numero: "03",
    titulo: "Instalação rápida",
    descricao: "Acabamento aprovado na hora, com limpeza total após o serviço.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-escuro">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-creme sm:text-4xl">
          Como Funciona
        </h2>
        <p className="mt-2 text-creme/60">
          Processo simples, resultado perfeito.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {etapas.map((etapa, i) => (
            <div key={etapa.numero} className="relative flex flex-col">
              <span className="font-display text-6xl font-bold text-dourado/30">
                {etapa.numero}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-creme">
                {etapa.titulo}
              </h3>
              <p className="mt-2 text-sm text-creme/70">{etapa.descricao}</p>
              {i < etapas.length - 1 && (
                <span className="absolute right-0 top-8 hidden text-2xl text-dourado/40 md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
