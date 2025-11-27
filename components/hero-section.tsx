import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#2a2d3a] overflow-hidden">
      {/* Circle pattern background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(16,1fr)] gap-3 p-6 opacity-15">
        {Array.from({ length: 160 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-full border-2 border-gray-400/40" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-3 text-balance tracking-tight">Hola, soy Fede</h1>
        <h2 className="text-5xl md:text-6xl font-bold text-[#3dbdb8] mb-10">Desarrollador IA</h2>
        <p className="text-xl md:text-2xl text-white/90 max-w-lg mx-auto leading-relaxed">
          Más de <span className="text-[#3dbdb8] font-medium">5 años de experiencia</span>
          <br />y apasionado de la <span className="text-[#3dbdb8] font-medium">aviación</span>
        </p>

        {/* Call to action */}
        <div className="mt-20 flex flex-col items-center gap-3">
          <span className="text-white/90 text-xl">Conoceme más</span>
          <ArrowDown className="w-10 h-10 text-[#3dbdb8] animate-bounce" />
        </div>
      </div>
    </section>
  )
}
