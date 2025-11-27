import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen bg-[#d9d9d9] overflow-hidden py-20 px-8 md:px-16 lg:px-20">
      <img
        src="/images/line-203.svg"
        alt=""
        className="absolute top-0 right-0 w-full h-full object-cover pointer-events-none opacity-40"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-5xl md:text-6xl font-bold text-[#2a2a2a] mb-16">01. Sobre mí</h2>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left column - Work style */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold italic text-[#5b5bd6] mb-8">Forma de trabajo</h3>
            <ul className="space-y-4 text-[#2a2a2a] text-xl leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#2a2a2a] font-bold text-2xl leading-none mt-1">•</span>
                <span>Trabajo en equipo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2a2a2a] font-bold text-2xl leading-none mt-1">•</span>
                <span>División de roles en proyectos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2a2a2a] font-bold text-2xl leading-none mt-1">•</span>
                <span>Me adapto fácilmente a nuevas herramientas y/o entornos de trabajo</span>
              </li>
            </ul>

            <div className="mt-12 relative w-fit">
              {/* White offset border */}
              <div className="absolute -bottom-3 -left-3 w-48 h-56 border-4 border-white" />
              {/* Purple border */}
              <div className="relative w-48 h-56 border-[6px] border-[#5b5bd6] overflow-hidden bg-white">
                <Image src="/images/rectangle-204.png" alt="Fede - AI Developer" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Right column - Education */}
          <div className="md:mt-32">
            <h3 className="text-5xl md:text-6xl font-bold text-[#5b5bd6] mb-8">Formación</h3>
            <div className="space-y-6 text-[#2a2a2a] text-xl leading-relaxed">
              <p>
                Soy egresado con honores de <span className="text-[#5b5bd6] font-semibold">ORT Argentina</span> en la
                especialidad de <span className="text-[#5b5bd6] font-semibold">IT.</span>
              </p>
              <p>
                Cursé y completé el curso de{" "}
                <span className="text-[#5b5bd6] font-semibold italic">Piloto Privado de Avión</span> en el CIAC clase II
                Alef Aviación Patagónica durante 2025, requiriendo para conseguirla{" "}
                <span className="text-[#5b5bd6] font-semibold italic">40hs de vuelo</span> en aviones monomotor terrestre
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
