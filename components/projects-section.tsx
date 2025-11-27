import Image from "next/image"

export function ProjectsSection() {
  return (
    <section className="w-full">
      <div className="bg-[#2a2d3a] py-10 px-8 md:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Algunos de mis desarrollos</h2>
          {/* Decorative dots */}
          <div className="hidden md:grid grid-cols-12 gap-1 opacity-40">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FF7A00] py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              {/* SignAI Logo */}
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/images/signai-20logos.png"
                  alt="SignAI Logo"
                  width={180}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-white text-lg mb-2">Tu traductor de lengua de señas gratuito, impulsado por IA</p>
              <p className="text-white font-bold text-lg mb-8">Desarrollador IA (2025 - Actual)</p>

              {/* News Card - iProUP */}
              <div className="relative max-w-md">
                <div className="relative rounded-2xl overflow-hidden border-4 border-[#5DBBFF] shadow-lg">
                  <Image
                    src="/images/frame-20106.png"
                    alt="SignAI en las noticias - iProUP"
                    width={500}
                    height={375}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="text-white">
              <p className="text-lg mb-6 leading-relaxed">
                Traductor de Lengua de Señas Continuo (CSLR) desarrollado en PyTorch
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Implementé con éxito distintos modelos de reconocimiento de lengua de señas, junto con una interfaz de
                comunicación con el Back End
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Además, desarrollé una app de iOS basada en Swift y asistí con el diseño UX/UI en el proyecto
              </p>

              {/* News Card - CLAYSS */}
              <div className="max-w-lg">
                <div className="relative rounded-2xl overflow-hidden border-4 border-[#D4A948] shadow-lg">
                  <Image
                    src="/images/frame-20107.png"
                    alt="SignAI en CLAYSS"
                    width={600}
                    height={250}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#C5B800] py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-3">Freelance Dev</h3>
              <p className="text-white text-xl font-medium">(2023 - Actual)</p>
            </div>
            <div className="text-white">
              <p className="text-lg mb-6">Desarrollo a pedido de distintos tipos:</p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1.5">•</span>
                  <span>Código de hardware estilo arduino (C++)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1.5">•</span>
                  <span>Implementación de sistemas de control PID</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1.5">•</span>
                  <span>Desarrollo de Bots de Discord</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1.5">•</span>
                  <span>Diseño de placas PCB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#193F00] py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-3">DolarBot</h3>
              <p className="text-white text-xl font-medium">Desarrollador (2024 - LTS)</p>
            </div>
            <div className="text-white">
              <p className="text-lg leading-relaxed">
                Bot de monitoreo activo de tasas de cambio del Dólar en Argentina, Usando APIs externas. Desarrollado en
                NodeJS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#01111D] py-16 px-8 md:px-16 relative overflow-hidden">
        {/* Gradient overlay at 20% opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00EEA6] to-[#0092FF] opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <Image
                src="/images/fo-cc-84rmai.png"
                alt="FōrmAI Logo"
                width={200}
                height={60}
                className="h-16 w-auto mb-4"
              />
              <p className="text-white font-bold text-xl">Desarrollador IA (2024 - 2025)</p>
            </div>
            <div className="text-white">
              <p className="text-lg leading-relaxed">
                Desarrollé redes neuronales (PyTorch, TensorFlow) para analizar y corregir la postura corporal en tiempo
                real usando computer vision.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#01111D] to-[#232D50] py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <Image src="/images/image-201.png" alt="LinX Logo" width={150} height={75} className="h-16 w-auto mb-4" />
              <p className="text-white font-bold text-xl">Desarrollador Hardware (2023)</p>
            </div>
            <div className="text-white">
              <p className="text-lg leading-relaxed">
                Proyecto de navegación semi-guiada para un vehículo, usando computer vision (OpenCV) y Arduino para
                seguimiento de líneas y evasión de obstáculos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
