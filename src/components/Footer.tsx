import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { AcadimLogo } from './AcadimLogo';
import { InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';

export function Footer() {
  return (
    <footer id="contato" className="bg-[#0B132B] text-white border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <AcadimLogo light />
            <p className="text-slate-400 text-xs leading-relaxed">
              Associação Carioca de Distrofia Muscular. Há 28 anos oferecendo acolhimento, orientação e garantia de direitos.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#mascotes" className="hover:text-white transition-colors">Mascotes</a></li>
              <li><a href="#missao" className="hover:text-white transition-colors">Missão & Visão</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Canais Oficiais</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#E31B23]" />
                <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  @acadimrj
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38bdf8]" />
                <span>Atendimento Rio de Janeiro</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38bdf8]" />
                <span>contato@acadim.org.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E31B23] transition-colors">
                <InstagramIcon className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0066CC] transition-colors">
                <FacebookIcon className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">
                <YoutubeIcon className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer bottom social ribbon matching reference image */}
        <div className="bg-[#8ad6d2]/20 rounded-2xl p-6 text-center border border-[#8ad6d2]/30">
          <p className="font-display font-bold text-[#8ad6d2] text-sm uppercase tracking-wider mb-4">
            Siga-nos nas Redes sociais
          </p>
          <div className="flex justify-center items-center gap-4">
            <a href="https://www.instagram.com/acadimrj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <InstagramIcon className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <FacebookIcon className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <YoutubeIcon className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <LinkedinIcon className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 pt-4">
          © {new Date().getFullYear()} ACADIM — Associação Carioca de Distrofia Muscular. 28 anos de história e dedicação.
        </div>
      </div>
    </footer>
  );
}
