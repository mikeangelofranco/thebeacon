import { SectionDivider } from "@/components/ui/section-divider";
import { EmailIcon, FacebookIcon } from "@/components/ui/icons";

export function Connect() {
  return (
    <section className="relative bg-navy-light py-24 sm:py-32 px-6">
      <SectionDivider />

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-gold tracking-[0.2em] text-xs sm:text-sm uppercase mb-6">
          Connect
        </h2>

        <p className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug mb-6">
          Let&rsquo;s find the signal
          <br />
          <span className="text-gold">through the noise.</span>
        </p>

        <p className="text-slate text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Follow The Beacon for thoughtful discussions that help you understand
          the world around you &mdash; with context, not clickbait.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="mailto:plughubgadgets@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gold/30 rounded-full text-gold hover:bg-gold/10 transition-colors text-sm tracking-wide"
          >
            <EmailIcon />
            plughubgadgets@gmail.com
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61592011270464"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gold/10 rounded-full text-slate hover:border-gold/30 hover:text-gold transition-colors text-sm tracking-wide"
          >
            <FacebookIcon />
            Facebook
          </a>
        </div>

        <div className="flex flex-col items-center gap-3 pt-12 border-t border-gold/10">
          <p className="text-gold/60 text-xs tracking-[0.3em] uppercase">
            The Beacon
          </p>
          <p className="text-slate/40 text-xs">
            &copy; {new Date().getFullYear()} &mdash; Guiding through the noise
          </p>
        </div>
      </div>
    </section>
  );
}
