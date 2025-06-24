import React from 'react'
import { Heart, Github, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-medical-800 text-white">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">CMF System</span>
            </div>
            <p className="text-medical-300 leading-relaxed">
              Sistema de Gestión de Consultorio Médico Familiar diseñado para optimizar 
              la administración de pacientes, visitas médicas y registros históricos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-medical-300">
              <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guía de Instalación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ejemplos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-medical-300">
                <Github className="h-5 w-5" />
                <a href="https://github.com/dnielpy/tarea-final" className="hover:text-white transition-colors">GitHub Repository</a>
              </div>
              <div className="flex items-center space-x-2 text-medical-300">
                <Mail className="h-5 w-5" />
                <span>dnielquesada@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-medical-700 mt-8 pt-8 text-center text-medical-400">
          <p>&copy; 2025 Sistema CMF. Desarrollado para la gestión médica moderna.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer