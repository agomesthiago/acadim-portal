import { Reveal } from '../components/Reveal';
import type { About as AboutData } from '../lib/data';

export function About({ data }: { data: AboutData }) {
  return (
    <section
      id="sobre"
      className="relative py-20 lg:py-28 bg-white border-y border-slate-100"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <Reveal>
          <div className="inline-block bg-[#E31B23] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm mb-3">
            {data.eyebrow}
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0f172a] leading-tight">
            {data.title.split(' e ').map((part, i, arr) => (
              <span key={i}>
                {i === 1 ? <span className="text-[#0066CC]"> </span> : ''}
                {part}
                {i < arr.length - 1 ? <span className="text-[#E31B23]"> e </span> : ''}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 text-left sm:text-center space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <blockquote className="border-l-4 border-[#E31B23] pl-4 italic font-serif text-slate-600 text-base sm:text-lg text-left sm:text-center sm:border-l-0 sm:pl-0 sm:pt-4">
              {data.quote}
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
