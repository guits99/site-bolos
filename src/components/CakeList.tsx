import { getCakes } from "@/data/cake";
import { CardBolo } from "./CardBolo";

export function CakeList() {
  const cakes = getCakes();

  return (
    <section>
      {cakes.map((cake) => (
        <CardBolo bolo={cake} key={cake.id} />
      ))}
    </section>
  );
}
