import { WhatsappIcon } from './SocialIcons';

type Props = { whatsapp: string; whatsappDisplay: string };

export function WhatsAppFloat({ whatsapp, whatsappDisplay }: Props) {
  const href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    'Olá! Vim pelo site da ACADIM e gostaria de mais informações.',
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Fale pelo WhatsApp: ${whatsappDisplay}`}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500/50 blur-xl group-hover:blur-2xl transition-all animate-pulse-glow" />
      <span className="relative flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl pl-4 pr-5 py-3 transition-all group-hover:scale-105">
        <WhatsappIcon className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-bold">Fale no WhatsApp</span>
      </span>
    </a>
  );
}
