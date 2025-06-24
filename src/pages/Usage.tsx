import React from 'react'
import { Play, Users, Calendar, BarChart3, Settings, CheckCircle } from 'lucide-react'

const Usage = () => {
  const features = [
    {
      icon: Users,
      title: 'Gestión de Pacientes',
      description: 'Registro y administración completa de pacientes',
      steps: [
        'Acceder al panel de pacientes desde el menú principal',
        'Hacer clic en "Nuevo Paciente" para registrar',
        'Completar formulario con datos personales y médicos',
        'Agregar enfermedades crónicas y vacunas si aplica',
        'Guardar y verificar en la lista de pacientes'
      ]
    },
    {
      icon: Calendar,
      title: 'Gestión de Visitas',
      description: 'Registro y seguimiento de visitas médicas',
      steps: [
        'Seleccionar "Gestión de Visitas" en el menú',
        'Elegir paciente de la lista disponible',
        'Registrar fecha, diagnóstico y tratamiento',
        'Agregar análisis médicos si son necesarios',
        'Especificar especialidades remitidas',
        'Guardar la visita en el historial'
      ]
    },
    {
      icon: BarChart3,
      title: 'Reportes y Estadísticas',
      description: 'Generación de reportes gráficos y estadísticas',
      steps: [
        'Acceder a la sección de reportes',
        'Seleccionar tipo de reporte deseado',
        'Configurar parámetros (fechas, filtros)',
        'Generar gráficos estadísticos',
        'Exportar reporte en formato HTML'
      ]
    }
  ]

  const workflows = [
    {
      title: 'Flujo de Registro de Nuevo Paciente',
      steps: [
        { action: 'Inicio de sesión', description: 'Médico o enfermera accede al sistema' },
        { action: 'Navegación', description: 'Acceder al módulo de gestión de pacientes' },
        { action: 'Formulario', description: 'Completar datos del nuevo paciente' },
        { action: 'Validación', description: 'Sistema valida CI y datos obligatorios' },
        { action: 'Almacenamiento', description: 'Paciente se guarda con historia clínica' },
        { action: 'Confirmación', description: 'Sistema confirma registro exitoso' }
      ]
    },
    {
      title: 'Flujo de Registro de Visita Médica',
      steps: [
        { action: 'Selección', description: 'Elegir paciente existente de la lista' },
        { action: 'Datos básicos', description: 'Ingresar fecha, diagnóstico y tratamiento' },
        { action: 'Análisis', description: 'Agregar análisis médicos requeridos' },
        { action: 'Especialidades', description: 'Especificar remisiones a especialistas' },
        { action: 'Registro', description: 'Guardar visita en historia clínica' },
        { action: 'Actualización', description: 'Actualizar estadísticas del sistema' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Play className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guía de Uso del Sistema
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprende a utilizar todas las funcionalidades del Sistema CMF paso a paso
          </p>
        </div>

        {/* Login Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Inicio de Sesión
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Credenciales por Defecto</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Médico</h4>
                    <p className="text-blue-800 text-sm">
                      <strong>Usuario:</strong> medico@cmf.com<br />
                      <strong>Contraseña:</strong> medico123
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Enfermera</h4>
                    <p className="text-green-800 text-sm">
                      <strong>Usuario:</strong> enfermera@cmf.com<br />
                      <strong>Contraseña:</strong> enfermera123
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Proceso de Autenticación</h3>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                    Al iniciar la aplicación, aparece la ventana de login
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                    Ingresar credenciales según tu rol
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                    El sistema carga la interfaz principal
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                    Acceso a funcionalidades según permisos
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Funcionalidades Principales
          </h2>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <div className="flex items-center">
                    <feature.icon className="h-6 w-6 text-primary-600 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Pasos a seguir:</h4>
                  <ol className="space-y-3">
                    {feature.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="bg-primary-100 text-primary-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflows */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Flujos de Trabajo Típicos
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {workflow.title}
                </h3>
                <div className="space-y-4">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        {stepIndex + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{step.action}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips and Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Consejos y Mejores Prácticas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-lg font-semibold text-green-900">Buenas Prácticas</h3>
              </div>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Verificar siempre los datos antes de guardar</li>
                <li>• Mantener actualizada la información de contacto</li>
                <li>• Registrar visitas inmediatamente después de la consulta</li>
                <li>• Revisar regularmente los análisis pendientes</li>
                <li>• Generar reportes periódicos para seguimiento</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Configuración</h3>
              </div>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• El sistema carga datos de prueba automáticamente</li>
                <li>• Los reportes se exportan en formato HTML</li>
                <li>• Las fechas se validan automáticamente</li>
                <li>• El CI se valida según formato cubano</li>
                <li>• Los datos se mantienen en memoria durante la sesión</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Management */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Gestión de Datos de Prueba
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Datos Incluidos</h3>
                <p className="text-gray-600 mb-4">
                  El sistema incluye un generador de datos de prueba que crea automáticamente:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pacientes con información realista</li>
                  <li>• Visitas médicas con diagnósticos</li>
                  <li>• Análisis médicos con resultados</li>
                  <li>• Historias clínicas completas</li>
                  <li>• Estadísticas demográficas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personalización</h3>
                <p className="text-gray-600 mb-4">
                  Puedes modificar los datos de prueba editando:
                </p>
                <div className="bg-gray-900 rounded p-3 mb-4">
                  <code className="text-green-400 text-sm">util.MockDataGenerator</code>
                </div>
                <p className="text-gray-600 text-sm">
                  Esta clase contiene métodos para generar pacientes, visitas y análisis 
                  con datos aleatorios pero realistas para facilitar las pruebas del sistema.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Usage