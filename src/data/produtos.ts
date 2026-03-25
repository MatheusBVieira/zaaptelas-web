export interface Produto {
  nome: string;
  descricao: string;
  imagem?: string;
}

export const produtos: Produto[] = [
  {
    nome: "Janelas de correr",
    descricao:
      "Tela mosquiteira com aro de alumínio para janelas de correr. Remoção fácil para limpeza.",
  },
  {
    nome: "Portas",
    descricao:
      "Tela para portas de correr e portas de abrir. Sob medida, com acabamento perfeito.",
  },
  {
    nome: "Basculantes",
    descricao:
      "Tela fixa para janelas basculantes. Vedação total contra insetos.",
  },
];
