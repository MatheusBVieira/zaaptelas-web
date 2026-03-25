const diferenciais = [
  {
    titulo: "Não enverga",
    descricao:
      "O alumínio mantém a forma original, vedando cantos sem folga mesmo após anos de uso.",
    icone: "🔩",
  },
  {
    titulo: "Sob medida e removível",
    descricao:
      "Instalação nas dimensões exatas da janela. Fácil de remover para limpeza, sem mofo.",
    icone: "📐",
  },
  {
    titulo: "Mais privacidade",
    descricao:
      "A tela impede a visão do interior do imóvel, mesmo com a janela aberta.",
    icone: "🔒",
  },
  {
    titulo: "Ecologicamente correto",
    descricao:
      "Material reciclável e durável. Alumínio com tecido de fibra de vidro revestida com PVC.",
    icone: "♻️",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-creme">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-escuro sm:text-4xl">
          Por que alumínio?
        </h2>
        <p className="mt-2 text-oliva">
          Diferenciais que fazem a diferença no dia a dia.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item) => (
            <div
              key={item.titulo}
              className="border border-escuro/[0.08] p-6 transition-colors hover:border-dourado/40"
            >
              <span className="text-3xl">{item.icone}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-escuro">
                {item.titulo}
              </h3>
              <p className="mt-2 text-sm text-escuro/70">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
