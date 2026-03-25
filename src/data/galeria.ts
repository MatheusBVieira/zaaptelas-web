export interface FotoGaleria {
  id: string;
  src: string;
  alt: string;
  legenda?: string;
  width: number;
  height: number;
}

export const galeria: FotoGaleria[] = [
  {
    id: "1",
    src: "/images/galeria-01.jpg",
    alt: "Tela mosquiteira alumínio em porta de madeira com vidro Florianópolis",
    legenda: "Porta com vidro · Lagoa da Conceição",
    width: 1600,
    height: 1200,
  },
  {
    id: "2",
    src: "/images/galeria-02.jpg",
    alt: "Tela mosquiteira janela de correr residência Campeche Florianópolis",
    legenda: "Janela de correr · Campeche",
    width: 900,
    height: 1600,
  },
  {
    id: "3",
    src: "/images/galeria-03.jpg",
    alt: "Tela mosquiteira janela arco veneziana madeira Rio Tavares",
    legenda: "Janela em arco · Rio Tavares",
    width: 1600,
    height: 900,
  },
  {
    id: "4",
    src: "/images/galeria-04.jpg",
    alt: "Tela mosquiteira janela com basculante alumínio Armação Florianópolis",
    legenda: "Janela com basculante · Armação",
    width: 1600,
    height: 1200,
  },
  {
    id: "5",
    src: "/images/galeria-05.jpg",
    alt: "Tela mosquiteira janela de correr com persiana Morro das Pedras",
    legenda: "Janela de correr · Morro das Pedras",
    width: 1600,
    height: 1200,
  },
  {
    id: "6",
    src: "/images/galeria-06.jpg",
    alt: "Tela mosquiteira janela veneziana arco alumínio Ribeirão da Ilha",
    legenda: "Janela veneziana · Ribeirão da Ilha",
    width: 1599,
    height: 899,
  },
  {
    id: "7",
    src: "/images/galeria-07.jpg",
    alt: "Tela mosquiteira fixa janela alumínio branco Pantano do Sul",
    legenda: "Janela fixa · Pantano do Sul",
    width: 900,
    height: 1600,
  },
  {
    id: "8",
    src: "/images/galeria-08.jpg",
    alt: "Tela mosquiteira janela grande cobogó alumínio Açores Florianópolis",
    legenda: "Janela com cobogó · Açores",
    width: 1600,
    height: 1200,
  },
  {
    id: "9",
    src: "/images/galeria-09.jpg",
    alt: "Tela mosquiteira janela de correr alumínio branco Porto da Lagoa",
    legenda: "Janela de correr · Porto da Lagoa",
    width: 1079,
    height: 964,
  },
];
