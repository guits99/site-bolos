import type { Cake } from "@/types/Cake";
import { WhatsappButton } from "./WhatsappButton";

type CardBoloProps = {
  bolo: Cake;
};

export function CardBolo({ bolo }: CardBoloProps) {
  return (
    <div className="max-w-sm rounded-2xl border flex flex-col bg-white overflow-hidden shadow-lg p-4">
      <img
        className="w-60 h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg mb-4 "
        src={bolo.imagem}
        alt={bolo.nome}
      ></img>
      <h2 className="text-xl text-center border-l-indigo-400">{bolo.nome}</h2>
      <span className="text-lg text-center font-bold text-gray-800 mb-4 block ">
        Preço: R$ {bolo.preco.toFixed(2)}
      </span>
      <WhatsappButton productoName={bolo.nome} />
    </div>
  );
}
