"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="bg-[#2a2d3a] py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left side - Text */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Hablemos</h2>
            <p className="text-white text-lg leading-relaxed">
              Siempre estoy abierto a nuevos desafíos y oportunidades para colaborar. Si tenés un proyecto en mente o
              simplemente querés conectar, no dudes en escribirme.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="bg-[#3d4a6a] rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Nombre y Apellido"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 rounded-lg bg-[#d9d9d9] text-[#2a2d3a] placeholder-[#6b7280] text-base focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 rounded-lg bg-[#d9d9d9] text-[#2a2d3a] placeholder-[#6b7280] text-base focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
              />
              <textarea
                placeholder="Mensaje"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 rounded-lg bg-[#d9d9d9] text-[#2a2d3a] placeholder-[#6b7280] text-base focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-[#0ea5e9] text-white text-lg font-semibold hover:bg-[#0284c7] transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#2a2d3a] py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-12 mb-8">
          <a href="mailto:fdiaznem@signai.ar" className="text-white hover:text-gray-300 transition-colors">
            <Mail className="w-10 h-10" />
          </a>
          <a
            href="https://linkedin.com/in/fdiaznem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Linkedin className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/Defeeeee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Github className="w-10 h-10" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-8 max-w-2xl mx-auto" />

        {/* Copyright */}
        <p className="text-center text-gray-300 text-base">
          © 2025 Federico Diaz Nemeth. Diseñado y construido en Buenos Aires, Argentina.
        </p>
      </div>
    </footer>
  )
}
