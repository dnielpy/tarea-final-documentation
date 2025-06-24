import React from 'react'
import { Package, Database, Users, FileText, Settings, Layers } from 'lucide-react'

const Architecture = () => {
  const packages = [
    {
      name: 'entidades',
      icon: Package,
      description: 'Clases principales del dominio',
      classes: [
        { name: 'CMF', description: 'Clase principal del sistema (Singleton)' },
        { name: 'Paciente', description: 'Información básica de pacientes' },
        { name: 'Mujer', description: 'Extensión para pacientes femeninas' },
        { name: 'Medico', description: 'Información del médico del consultorio' },
        { name: 'Enfermera', description: 'Información de la enfermera' },
        { name: 'Visita', description: 'Registro de visitas médicas' },
        { name: 'Analisis', description: 'Análisis médicos realizados' },
        { name: 'HistoriaClinica', description: 'Historia clínica de pacientes' }
      ]
    },
    {
      name: 'frontend',
      icon: Users,
      description: 'Componentes de interfaz gráfica',
      classes: [
        { name: 'Principal', description: 'Ventana principal del sistema' },
        { name: 'PanelPacientes', description: 'Gestión de pacientes' },
        { name: 'PanelVisitas', description: 'Gestión de visitas médicas' },
        { name: 'PanelReportes', description: 'Generación de reportes' },
        { name: 'FormularioPaciente', description: 'Formulario para pacientes' },
        { name: 'FormularioVisita', description: 'Formulario para visitas' }
      ]
    },
    {
      name: 'util',
      icon: Settings,
      description: 'Clases de utilidad y constantes',
      classes: [
        { name: 'MockDataGenerator', description: 'Generador de datos de prueba' },
        { name: 'ConstantesAnalisis', description: 'Tipos de análisis disponibles' },
        { name: 'ConstantesEspecialidades', description: 'Especialidades médicas' },
        { name: 'Validations', description: 'Validaciones de datos' }
      ]
    }
  ]

  const patterns = [
    {
      name: 'Singleton',
      description: 'La clase CMF implementa el patrón Singleton para garantizar una única instancia del sistema.',
      example: 'CMF.getInstance()'
    },
    {
      name: 'Factory Method',
      description: 'Creación de diferentes tipos de pacientes (Paciente, Mujer) según el género.',
      example: 'Creación automática basada en CI'
    },
    {
      name: 'Observer',
      description: 'Actualización automática de historias clínicas cuando se agregan visitas.',
      example: 'actualizarVisitaHistoriaClinica()'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Layers className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Arquitectura del Sistema
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprende la estructura modular y los patrones de diseño utilizados en el Sistema CMF
          </p>
        </div>

        {/* System Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Visión General del Sistema
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-8 border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Características Principales</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Arquitectura modular y escalable
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Separación clara de responsabilidades
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Interfaz gráfica con Swing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Gestión de datos en memoria
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tecnologías Utilizadas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="font-medium text-gray-900">Java 8+</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="font-medium text-gray-900">Swing UI</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="font-medium text-gray-900">JTable</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="font-medium text-gray-900">LocalDate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Package Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Estructura de Paquetes
          </h2>
          <div className="space-y-6">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <div className="flex items-center">
                    <pkg.icon className="h-6 w-6 text-primary-600 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-600">{pkg.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.classes.map((cls, clsIndex) => (
                      <div key={clsIndex} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{cls.name}</h4>
                        <p className="text-sm text-gray-600">{cls.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Patrones de Diseño Implementados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patterns.map((pattern, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {pattern.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {pattern.description}
                </p>
                <div className="bg-gray-900 rounded p-3">
                  <code className="text-green-400 text-xs">{pattern.example}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Flow */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Flujo de Datos
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="bg-blue-100 p-4 rounded-lg text-center flex-1 mx-2">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-blue-900">Frontend</h4>
                  <p className="text-sm text-blue-700">Interfaz de Usuario</p>
                </div>
                <div className="text-gray-400">→</div>
                <div className="bg-green-100 p-4 rounded-lg text-center flex-1 mx-2">
                  <Package className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-green-900">Entidades</h4>
                  <p className="text-sm text-green-700">Lógica de Negocio</p>
                </div>
                <div className="text-gray-400">→</div>
                <div className="bg-purple-100 p-4 rounded-lg text-center flex-1 mx-2">
                  <Database className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-purple-900">Datos</h4>
                  <p className="text-sm text-purple-700">Almacenamiento</p>
                </div>
              </div>
              <div className="text-center text-gray-600 text-sm">
                Los datos fluyen desde la interfaz de usuario hacia las entidades de negocio, 
                donde se procesan y almacenan en estructuras de datos en memoria.
              </div>
            </div>
          </div>
        </section>

        {/* Key Classes */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Clases Principales
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CMF (Singleton)</h3>
                <p className="text-gray-600 mb-3">
                  Clase central del sistema que gestiona todas las operaciones principales. 
                  Mantiene las listas de pacientes, visitas, y coordina las operaciones entre diferentes módulos.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <strong>Responsabilidades:</strong> Gestión de pacientes, visitas, reportes, autenticación
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Paciente / Mujer</h3>
                <p className="text-gray-600 mb-3">
                  Jerarquía de clases que representa a los pacientes del consultorio. 
                  La clase Mujer extiende Paciente con funcionalidades específicas como embarazo.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <strong>Características:</strong> Historia clínica, enfermedades crónicas, vacunación
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">PersonalSanitario</h3>
                <p className="text-gray-600 mb-3">
                  Clase abstracta base para Médico y Enfermera. Incluye sistema de autenticación 
                  y información común del personal sanitario.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <strong>Subclases:</strong> Medico, Enfermera con roles y permisos específicos
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Architecture