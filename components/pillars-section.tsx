export function PillarsSection() {
  return (
    <section className="relative bg-[#d9d9d9] py-20 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url("/images/dot-20grid.png")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-[#2a2a2a] text-right mb-20">02. Mis Pilares</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Software & AI */}
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-[#5b5bd6] italic mb-6">Software & AI</h3>
            <p className="text-[#2a2a2a] text-xl leading-relaxed max-w-md">
              Me especializo en construir soluciones tecnológicas completas. Disfruto tanto del desarrollo de
              aplicaciones, soluciones cloud e implementación de modelos de IA
            </p>
            {/* Decorative triangles */}
            <div className="absolute -right-8 top-0 flex flex-col gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5b5bd6" strokeWidth="2.5">
                <polygon points="12,2 22,22 2,22" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5b5bd6" strokeWidth="2.5">
                <polygon points="12,2 22,22 2,22" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5b5bd6" strokeWidth="2.5">
                <polygon points="12,2 22,22 2,22" />
              </svg>
            </div>
          </div>

          {/* Diseño UX/UI */}
          <div className="relative md:mt-32">
            <h3 className="text-3xl md:text-4xl font-bold text-[#5b5bd6] text-right mb-6">Diseño UX/UI</h3>
            <p className="text-[#2a2a2a] text-xl leading-relaxed text-right">
              Creo que la funcionalidad y la estética deben ir de la mano. Tengo un enfoque en crear experiencias
              minimalistas, intuitivas y funcionales que le hagan la vida más fácil al usuario.
            </p>
            {/* Decorative dots */}
            <div className="absolute right-0 top-full mt-4 grid grid-cols-12 gap-1">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#5b5bd6] rounded-full opacity-70" />
              ))}
            </div>
          </div>

          {/* Aviación */}
          <div className="relative mt-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#5b5bd6] italic mb-6">Aviación</h3>
            <p className="text-[#2a2a2a] text-xl leading-relaxed max-w-md">
              Mi formación como piloto me ha dado una gran conciencia situacional, capacidad para tomar decisiones bajo
              presión y un profundo respeto por la seguridad y los procedimientos.
            </p>
            {/* Decorative diagonal lines */}
            <div className="mt-6 flex gap-1.5">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="w-1.5 h-7 bg-[#5b5bd6] transform -skew-x-12" />
              ))}
            </div>
          </div>

          {/* Decorative plus signs */}
          <div className="relative flex items-end justify-center md:justify-end pb-12">
            <div className="flex items-end gap-3">
              <svg width="56" height="56" viewBox="0 0 48 48" fill="#5b5bd6">
                <rect x="20" y="0" width="8" height="48" />
                <rect x="0" y="20" width="48" height="8" />
              </svg>
              <svg width="38" height="38" viewBox="0 0 32 32" fill="#5b5bd6" className="opacity-70 -mb-3">
                <rect x="13" y="0" width="6" height="32" />
                <rect x="0" y="13" width="32" height="6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
