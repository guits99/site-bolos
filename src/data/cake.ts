import type { Cake } from "@/types/Cake";

export function getCakes(): Cake[] {
  return [
    {
      id: 1,
      nome: "Bolo de Cenoura",
      preco: 15.0,
      imagem: "/bolo-cenoura.jpg",
    },
    {
      id: 2,
      nome: "Bolo de Chocolate",
      preco: 20.0,
      imagem: "/bolo-chocolate.jpg",
    },
    {
      id: 3,
      nome: "Bolo de Maracuja",
      preco: 25.0,
      imagem: "/bolo-maracuja.jpg",
    },

    {
      id: 4,
      nome: "Bolo de Abacaxi",
      preco: 30.0,
      imagem: "/bolo-abacaxi.jpg",
    },
    {
      id: 5,
      nome: "Bolo de Banana",
      preco: 30.0,
      imagem: "/bolo-banana.jpg",
    },
    {
      id: 6,
      nome: "Bolo de Milho",
      preco: 30.0,
      imagem: "/bolo-milho.jpg",
    },
    {
      id: 7,
      nome: "Bolo de Formigueiro",
      preco: 30.0,
      imagem: "/bolo-formigueiro.jpg",
    },
    {
      id: 8,
      nome: "Bolo de Coco",
      preco: 30.0,
      imagem: "/bolo-coco.jpg",
    },
    {
      id: 9,
      nome: "Bolo de Laranja",
      preco: 30.0,
      imagem: "/bolo-laranja.jpg",
    },
    {
      id: 10,
      nome: "Bolo de Limão",
      preco: 30.0,
      imagem: "/bolo-limao.jpg",
    },
    {
      id: 11,
      nome: "Bolo de Queijo",
      preco: 30.0,
      imagem: "/bolo-queijo.jpg",
    },
  ];
}
