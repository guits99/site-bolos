import whatsapp from "@/assets/whatsapp.png";

interface WhatsappButtonProps {
  productoName?: string;
}
export function WhatsappButton({ productoName }: WhatsappButtonProps) {
  const numberStore = "5592984640436";

  const handleOrder = () => {
    let messageText = "Olá! queria fazer alguns pedidos.";

    if (productoName) {
      messageText = `Olá! Gostaria de pedir esse bolo: ${productoName} `;
    }
    const messageFormatted = encodeURIComponent(messageText);
    const url = `https://wa.me/${numberStore}?text=${messageFormatted}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleOrder}
      className="flex items-center justify-center cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
    >
      Pedir pelo Whatsapp
      <img src={whatsapp} alt="WhatsApp" className="h-6 w-6 ml-3" />
    </button>
  );
}
