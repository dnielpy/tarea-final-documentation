import React from 'react'
import { Download, Terminal, Play, CheckCircle, AlertCircle } from 'lucide-react'

const Installation = () => {
  const requirements = [
    {
      name: 'Java Development Kit (JDK)',
      version: '8 o superior',
      description: 'Requerido para compilar y ejecutar la aplicación',
      links: ['Oracle JDK', 'OpenJDK']
    },
    {
      name: 'IDE Recomendado',
      version: 'Cualquier versión reciente',
      description: 'Eclipse, IntelliJ IDEA, o Visual Studio Code con extensiones Java',
      links: ['Eclipse', 'IntelliJ IDEA', 'VS Code']
    },
    {
      name: 'Sistema Operativo',
      version: 'Cualquiera',
      description: 'Compatible con Windows, macOS y Linux',
      links: []
    }
  ]

  const steps = [
    {
      title: 'Verificar Instalación de Java',
      description: 'Asegúrate de tener JDK 8 o superior instalado',
      code: 'java -version\njavac -version',
      note: 'Ambos comandos deben mostrar la versión de Java instalada'
    },
    {
      title: 'Clonar el Repositorio',
      description: 'Descarga el código fuente del proyecto',
      code: 'git clone https://github.com/dnielpy/tarea-final',
    },
    {
      title: 'Abrir en tu IDE',
      description: 'Importa el proyecto en tu entorno de desarrollo',
      code: '# Para IntelliJ IDEA:\n# File -> Open -> Seleccionar carpeta del proyecto\n\n# Para Eclipse:\n# File -> Import -> Existing Projects into Workspace',
      note: 'Configura el JDK en las preferencias del proyecto'
    },
    {
      title: 'Compilar el Proyecto',
      description: 'Verifica que no hay errores de compilación',
      code: '# En tu IDE:\n# Build -> Build Project\n\n# O desde línea de comandos:\njavac -cp . entidades/*.java frontend/*.java',
      note: 'Resuelve cualquier error de compilación antes de continuar'
    },
    {
      title: 'Ejecutar la Aplicación',
      description: 'Inicia el sistema CMF',
      code: '# Desde tu IDE:\n# Ejecutar main.Main\n\n# O desde línea de comandos:\njava main.Main',
      note: 'La ventana principal del sistema debería aparecer'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Download className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guía de Instalación
          </h1>
          <p className="text-xl text-gray-600">
            Sigue estos pasos para instalar y configurar el Sistema CMF
          </p>
        </div>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
            Requisitos Previos
          </h2>
          
          <div className="space-y-4">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{req.name}</h3>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {req.version}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{req.description}</p>
                {req.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {req.links.map((link, linkIndex) => (
                      <span key={linkIndex} className="text-primary-600 hover:text-primary-800 text-sm font-medium cursor-pointer">
                        {link}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Installation Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Terminal className="h-6 w-6 text-blue-500 mr-2" />
            Pasos de Instalación
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>

                  {step.note && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-blue-800 text-sm">{step.note}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Message */}
        <section className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
            <h3 className="text-lg font-semibold text-green-900">
              ¡Instalación Completada!
            </h3>
          </div>
          <p className="text-green-800 mb-4">
            Si has seguido todos los pasos correctamente, el Sistema CMF debería estar funcionando. 
            La ventana principal mostrará las opciones para gestionar pacientes, visitas y reportes.
          </p>
          
        </section>
      </div>
    </div>
  )
}

export default Installation