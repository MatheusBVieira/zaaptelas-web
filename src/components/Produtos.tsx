import { produtos } from "@/data/produtos";

export function Produtos() {
  return (
    <section id="produtos" className="py-20 bg-creme">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-escuro sm:text-4xl">
          Nossos Produtos
        </h2>
        <p className="mt-2 text-oliva">
          Telas mosquiteiras para todos os tipos de abertura.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (
            <div
              key={produto.nome}
              className="group relative overflow-hidden border border-escuro/[0.08]"
            >
              <div className="aspect-[4/3] bg-escuro/5" />
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-escuro">
                  {produto.nome}
                </h3>
                <p className="mt-2 text-sm text-escuro/70">
                  {produto.descricao}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-escuro/60 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium text-dourado">
                  Ver detalhes
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
