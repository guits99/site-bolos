import { CardBolo } from "@/components/CardBolo";
import { getCakes } from "@/data/cake";

export function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center p-4 ">
      {getCakes().map((bolo) => (
        <CardBolo bolo={bolo} key={bolo.id} />
      ))}
    </div>
  );
}
