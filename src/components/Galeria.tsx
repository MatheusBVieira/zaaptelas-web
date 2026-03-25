import { galeria } from "@/data/galeria";

export function Galeria() {
  return (
    <section id="galeria" className="py-20 bg-creme">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-escuro sm:text-4xl">
          Galeria
        </h2>
        <p className="mt-2 text-oliva">Trabalhos realizados pela Zaap Telas.</p>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galeria.map((foto) => (
            <div
              key={foto.id}
              className="mb-4 break-inside-avoid overflow-hidden border border-escuro/[0.08]"
            >
              <div className="aspect-[4/3] bg-escuro/5" />
              {foto.legenda && (
                <p className="px-4 py-2 text-xs text-escuro/60">
                  {foto.legenda}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
