import type { Bolo } from "@/types/Bolo";

export function CardBolo({ bolo }: { bolo: Bolo }) {
  return (
    <div className="max-w-sm rounded-2xl border bg-white overflow-hidden shadow-lg p-4">
      <img
        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg mb-4 "
        src={bolo.imagem}
        alt={bolo.nome}
      ></img>
      <h2 className="text-xl border-l-indigo-400">{bolo.nome}</h2>
      <p>{bolo.descricao}</p>
      <span className="preco">R$ {bolo.preco.toFixed(2)}</span>
      <button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95">
        Adicionar ao carrinho
      </button>
    </div>
  );
}
