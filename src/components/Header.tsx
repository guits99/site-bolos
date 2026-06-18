import iconeBolo from "@/assets/iconeBolo.png";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex items-center justify-center gap-3 px-6 py-4">
      <img src={iconeBolo} alt="Ícone de bolo" className="h-16 w-16" />
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}
