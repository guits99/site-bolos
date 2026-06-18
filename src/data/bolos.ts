import type { Bolo } from "@/types/Bolo";

export function getBolos(): Bolo[] {
  return [
    {
      id: 1,
      nome: "Bolo de Cenoura",
      descricao:
        "Bolo de cenoura fofinho e delicioso, coberto com uma camada generosa de chocolate.",
      preco: 15.0,
      imagem: "/bolo-cenoura.jpg",
    },
    {
      id: 2,
      nome: "Bolo de Chocolate",
      descricao:
        "Bolo de chocolate rico e delicioso, coberto com uma camada generosa de chocolate.",
      preco: 20.0,
      imagem: "/bolo-chocolate.jpg",
    },
    {
      id: 3,
      nome: "Bolo de Maracuja",
      descricao:
        "Bolo de maracuja suculento e saboroso,coberto com uma camada generosa de maracuja.",
      preco: 25.0,
      imagem: "/bolo-maracuja.jpg",
    },

    {
      id: 4,
      nome: "Bolo de Abacaxi",
      descricao:
        "Bolo de abacaxi rico e delicioso, coberto com uma camada generosa de abacaxi.",
      preco: 30.0,
      imagem: "/bolo-abacaxi.jpg",
    },
  ];
}
