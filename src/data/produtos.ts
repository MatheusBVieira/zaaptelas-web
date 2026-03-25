export interface Produto {
  nome: string;
  descricao: string;
  imagem: string;
  width: number;
  height: number;
}

export const produtos: Produto[] = [
  {
    nome: "Janelas de correr",
    descricao:
      "Tela mosquiteira com aro de alumínio para janelas de correr. Remoção fácil para limpeza.",
    imagem: "/images/produto-janela-correr.jpg",
    width: 1600,
    height: 900,
  },
  {
    nome: "Portas",
    descricao:
      "Tela para portas de correr e portas de abrir. Sob medida, com acabamento perfeito.",
    imagem: "/images/produto-porta.jpg",
    width: 1599,
    height: 1200,
  },
  {
    nome: "Basculantes",
    descricao:
      "Tela fixa para janelas basculantes. Vedação total contra insetos.",
    imagem: "/images/produto-basculante.jpg",
    width: 1599,
    height: 1200,
  },
];
