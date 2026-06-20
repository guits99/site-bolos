import { Logo } from "@/components/Header/Logo";
import { HeaderActions } from "@/components/Header/HeaderActions";

export function Header({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between gap-3 px-6 py-4 bg-rose-400 text-white mb-6 ">
      <Logo title={title} />
      <HeaderActions />
    </header>
  );
}
