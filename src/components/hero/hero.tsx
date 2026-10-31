import { ScrollIndicator } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-navy" />

      <div className="light-beam animate-beam" />
      <div className="light-beam-wide animate-beam-pulse" />
      <div className="vignette" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(201,164,91,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <p className="text-gold tracking-[0.3em] text-xs sm:text-sm uppercase mb-6 animate-fade-up">
          The Beacon
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight mb-6 animate-fade-up animate-delay-200">
          Clarity in a
          <br />
          <span className="text-gold">Noisy World</span>
        </h1>

        <p className="text-slate text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up animate-delay-400">
          Independent perspectives on Philippine news, politics, and public affairs.
          Seeking truth. Questioning power. Encouraging informed opinions.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-up animate-delay-800">
        <div className="flex flex-col items-center gap-2 text-slate/50 text-xs tracking-widest uppercase">
          <span>Discover</span>
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}


