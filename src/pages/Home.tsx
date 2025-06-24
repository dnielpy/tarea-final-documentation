import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Users, 
  Calendar, 
  FileText, 
  BarChart3, 
  Shield,
  Download,
  Play,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Gestión de Pacientes',
      description: 'Registro completo de pacientes con historias clínicas detalladas, enfermedades crónicas y vacunación.'
    },
    {
      icon: Calendar,
      title: 'Control de Visitas',
      description: 'Programación y seguimiento de visitas médicas con diagnósticos, tratamientos y análisis.'
    },
    {
      icon: FileText,
      title: 'Registros Médicos',
      description: 'Mantenimiento de registros históricos y hojas de cargo diarias para un control completo.'
    },
    {
      icon: BarChart3,
      title: 'Reportes y Estadísticas',
      description: 'Generación de reportes gráficos sobre demografía, visitas y estadísticas de salud.'
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Sistema de autenticación con roles diferenciados para médicos y enfermeras.'
    }
  ]

  const technologies = [
    { name: 'Java', description: 'Lenguaje principal para la lógica del sistema' },
    { name: 'Swing', description: 'Interfaz gráfica de usuario moderna' },
    { name: 'JTable', description: 'Visualización y manipulación de datos tabulares' },
    { name: 'LocalDate', description: 'Gestión avanzada de fechas' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Heart className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Sistema de Gestión de Consultorio Médico Familiar
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Solución integral para la administración de pacientes, visitas médicas, personal sanitario 
            y registros históricos en consultorios médicos familiares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/installation"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Comenzar Instalación</span>
            </Link>
            <Link
              to="/usage"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Ver Guía de Uso</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un sistema completo diseñado para optimizar la gestión médica diaria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl card-hover">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tecnologías Utilizadas
            </h2>
            <p className="text-xl text-gray-600">
              Construido con tecnologías modernas y confiables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm card-hover text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                ¿Listo para comenzar?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Sigue nuestra guía paso a paso para instalar y configurar el sistema CMF
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                    1
                  </div>
                  <span className="text-gray-700">Instalar JDK 8+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                    2
                  </div>
                  <span className="text-gray-700">Clonar repositorio</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                    3
                  </div>
                  <span className="text-gray-700">Ejecutar aplicación</span>
                </div>
              </div>

              <Link
                to="/installation"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>Ver Guía Completa</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home