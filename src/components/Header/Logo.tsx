import iconeBolo from "@/assets/iconeBolo.png";

type LogoProps = {
  title: string;
};

export function Logo({ title }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <img src={iconeBolo} alt="Ícone de bolo" className="h-16 w-16" />
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
