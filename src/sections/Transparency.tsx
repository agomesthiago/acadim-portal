import { ShieldCheck, FileText } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import type { TransparencyInfo } from '../lib/data';

export function Transparency({ info }: { info: TransparencyInfo }) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0066CC] text-white flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#0066CC] bg-blue-100 px-2.5 py-0.5 rounded-md mb-2">
                    <FileText className="w-3 h-3" />
                    {info.title}
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#0f172a] leading-tight">
                    Prestação de contas e documentos institucionais
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-xl">
                    Somos uma associação de utilidade pública (Lei nº {info.public_utility.split('Lei nº ')[1]?.split(',')[0] ?? '3.815/2004'}) e
                    temos o compromisso com a transparência.
                  </p>
                  <p className="text-xs font-mono text-slate-500 mt-2">
                    CNPJ: {info.cnpj}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
              {info.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-[#0066CC] hover:text-[#0066CC] text-slate-700 text-sm font-semibold rounded-xl px-4 py-3 transition-colors text-center"
                >
                  <FileText className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
