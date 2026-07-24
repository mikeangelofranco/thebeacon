import { SectionDivider } from "@/components/ui/section-divider";
import { CATEGORIES } from "@/components/constants";

export function Mission() {
  return (
    <section className="relative bg-[#0a1929] py-24 sm:py-32 px-6">
      <SectionDivider />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-gold tracking-[0.2em] text-xs sm:text-sm uppercase mb-8">
              Our Purpose
            </h2>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-ivory/80">
              <p className="text-ivory font-light text-xl sm:text-2xl leading-snug">
                The story behind the story.
              </p>
              <p>
                The Beacon is a Philippine-based page focused on meaningful
                conversations around current events, society, culture, history,
                technology, and the people behind the headlines.
              </p>
              <p>
                We exist to help Filipinos understand why something matters
                &mdash; without unnecessary drama, political bias, or
                sensationalism.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-gold tracking-[0.2em] text-xs sm:text-sm uppercase mb-8">
              What We Cover
            </h2>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {CATEGORIES.map((category) => (
                <p
                  key={category}
                  className="text-slate text-sm sm:text-base border-l border-gold/20 pl-4 py-1"
                >
                  {category}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gold/10">
              <p className="text-slate text-sm leading-relaxed">
                Calm. Intelligent. Respectful. Objective. <br />
                A source of clarity in a noisy information landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
