import cart from "@/assets/cart.png";
import lupa from "@/assets/lupa.png";
import user from "@/assets/user.png";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-10">
      <img
        src={cart}
        alt="carrinho de supermercado"
        className="h-8 w-8 cursor-pointer hover:scale-125 transition-transform duration-200 "
      />
      <img
        src={lupa}
        alt="lupa de pesquisa"
        className="h-8 w-8 cursor-pointer hover:scale-125 transition-transform duration-200 "
      />
      <img
        src={user}
        alt="usuario"
        className="h-8 w-8 cursor-pointer hover:scale-125 transition-transform duration-200 "
      />
    </div>
  );
}
