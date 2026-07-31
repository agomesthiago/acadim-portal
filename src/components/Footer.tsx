import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { AcadimLogo } from './AcadimLogo';
import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  YoutubeIcon,
} from './SocialIcons';
import type { ContactInfo, TransparencyInfo } from '../lib/data';

type Props = { contact: ContactInfo; transparency: TransparencyInfo };

export function Footer({ contact, transparency }: Props) {
  return (
    <footer id="contato" className="bg-[#0B132B] text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <AcadimLogo light />
            <p className="text-slate-400 text-xs leading-relaxed">
              Associação Carioca de Distrofia Muscular. Desde 1998, acolhimento,
              informação e defesa de direitos para pessoas com distrofia
              muscular e suas famílias.
            </p>
            <p className="text-slate-500 text-[11px] font-mono">
              CNPJ: {transparency.cnpj}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Como Ajudamos</a></li>
              <li><a href="#impacto" className="hover:text-white transition-colors">Nossos Números</a></li>
              <li><a href="#participe" className="hover:text-white transition-colors">Participe</a></li>
              <li><a href="#doar" className="hover:text-white transition-colors">Doar</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Canais de contato
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#38bdf8] flex-shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38bdf8]" />
                <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <WhatsappIcon className="w-4 h-4 text-green-400" />
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: {contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38bdf8]" />
                <a href={`mailto:${contact.email}`} className="hover:text-white break-all">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Siga nossas redes
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da ACADIM"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 transition-all"
              >
                <InstagramIcon className="w-5 h-5 text-white" />
              </a>
              <a
                href={contact.facebook}
                aria-label="Facebook da ACADIM"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors"
              >
                <FacebookIcon className="w-5 h-5 text-white" />
              </a>
              <a
                href={contact.youtube}
                aria-label="YouTube da ACADIM"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-colors"
              >
                <YoutubeIcon className="w-5 h-5 text-white" />
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-display font-bold text-sm text-white mb-3 uppercase tracking-wider">
                Transparência
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {transparency.items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href} className="hover:text-white transition-colors">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>
            © {new Date().getFullYear()} ACADIM — Associação Carioca de Distrofia Muscular.
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-[#E31B23]" fill="currentColor" /> para todas as famílias.
          </span>
        </div>
      </div>
    </footer>
  );
}
