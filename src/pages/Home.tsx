import { CardBolo } from "@/components/CardBolo";
import { getBolos } from "@/data/bolos";

export function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center p-4 ">
      {getBolos().map((bolo) => (
        <CardBolo bolo={bolo} key={bolo.id} />
      ))}
    </div>
  );
}
