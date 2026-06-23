import { HeaderLogo } from "@/components/Header/HeaderLogo";
import { HeaderActions } from "@/components/Header/HeaderActions";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-3 px-6 py-4 bg-rose-400 text-white mb-6 ">
      <HeaderLogo title={title} />
      <HeaderActions />
    </header>
  );
}
