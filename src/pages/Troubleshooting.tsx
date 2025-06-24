import React from 'react'
import { AlertTriangle, HelpCircle, CheckCircle, XCircle, Info } from 'lucide-react'

const Troubleshooting = () => {
  const commonIssues = [
    {
      problem: 'Error al cargar imágenes',
      symptoms: [
        'Iconos o imágenes no se muestran correctamente',
        'Errores de FileNotFoundException',
        'Interfaz se ve incompleta'
      ],
      solutions: [
        'Verificar que la carpeta "fotos" esté en el directorio de recursos',
        'Comprobar permisos de lectura en el directorio del proyecto',
        'Asegurar que las rutas de imágenes sean correctas',
        'Reinstalar el proyecto desde el repositorio'
      ],
      severity: 'medium'
    },
    {
      problem: 'Problemas con la generación de reportes HTML',
      symptoms: [
        'Error al generar reporte_cmf.html',
        'Archivo HTML vacío o corrupto',
        'Excepción de permisos de escritura'
      ],
      solutions: [
        'Verificar permisos de escritura en el directorio actual',
        'Ejecutar la aplicación como administrador si es necesario',
        'Comprobar espacio disponible en disco',
        'Verificar que no haya antivirus bloqueando la escritura'
      ],
      severity: 'high'
    },
    {
      problem: 'Errores de compilación',
      symptoms: [
        'Clases no encontradas',
        'Errores de sintaxis inesperados',
        'Problemas con imports'
      ],
      solutions: [
        'Verificar que el JDK esté correctamente configurado',
        'Comprobar que todas las clases estén en sus paquetes correctos',
        'Limpiar y reconstruir el proyecto',
        'Verificar la estructura de directorios del proyecto'
      ],
      severity: 'high'
    },
    {
      problem: 'Interfaz gráfica no responde',
      symptoms: [
        'Ventanas se congelan',
        'Botones no responden a clics',
        'Aplicación se cierra inesperadamente'
      ],
      solutions: [
        'Verificar que no haya bucles infinitos en el código',
        'Comprobar la memoria disponible (aumentar heap size si es necesario)',
        'Revisar logs de errores en la consola',
        'Reiniciar la aplicación'
      ],
      severity: 'high'
    },
    {
      problem: 'Datos no se guardan correctamente',
      symptoms: [
        'Pacientes o visitas desaparecen al reiniciar',
        'Cambios no se reflejan en la interfaz',
        'Errores de validación inesperados'
      ],
      solutions: [
        'Recordar que los datos se almacenan en memoria (no persisten)',
        'Verificar que los datos cumplan las validaciones',
        'Comprobar que no haya caracteres especiales en los campos',
        'Revisar formato de fechas y CI'
      ],
      severity: 'medium'
    }
  ]

  const systemRequirements = [
    { requirement: 'Java JDK', minimum: '8', recommended: '11 o superior' },
    { requirement: 'RAM', minimum: '512 MB', recommended: '1 GB o más' },
    { requirement: 'Espacio en disco', minimum: '50 MB', recommended: '100 MB' },
    { requirement: 'Resolución de pantalla', minimum: '1024x768', recommended: '1280x720 o superior' }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'low': return 'text-green-600 bg-green-50 border-green-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <XCircle className="h-5 w-5" />
      case 'medium': return <AlertTriangle className="h-5 w-5" />
      case 'low': return <Info className="h-5 w-5" />
      default: return <HelpCircle className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <HelpCircle className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solución de Problemas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra soluciones a los problemas más comunes del Sistema CMF
          </p>
        </div>

        {/* System Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Requisitos del Sistema
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <p className="text-gray-600 mb-6">
              Antes de reportar un problema, verifica que tu sistema cumple con los requisitos mínimos:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Componente</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Mínimo</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Recomendado</th>
                  </tr>
                </thead>
                <tbody>
                  {systemRequirements.map((req, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">{req.requirement}</td>
                      <td className="py-3 px-4 text-gray-600">{req.minimum}</td>
                      <td className="py-3 px-4 text-gray-600">{req.recommended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Problemas Comunes y Soluciones
          </h2>
          <div className="space-y-6">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className={`px-6 py-4 border-b ${getSeverityColor(issue.severity)}`}>
                  <div className="flex items-center">
                    {getSeverityIcon(issue.severity)}
                    <h3 className="text-lg font-semibold ml-2">
                      {issue.problem}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Síntomas:</h4>
                      <ul className="space-y-2">
                        {issue.symptoms.map((symptom, symptomIndex) => (
                          <li key={symptomIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Soluciones:</h4>
                      <ol className="space-y-2">
                        {issue.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <span className="bg-primary-100 text-primary-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                              {solutionIndex + 1}
                            </span>
                            <span className="text-gray-600">{solution}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Fixes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Soluciones Rápidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Verificación Rápida</h3>
              </div>
              <div className="space-y-3 text-blue-800 text-sm">
                <div className="bg-blue-900 rounded p-3">
                  <code className="text-blue-100">java -version</code>
                </div>
                <p>Verifica que Java esté instalado y sea versión 8 o superior</p>
                <div className="bg-blue-900 rounded p-3">
                  <code className="text-blue-100">javac -version</code>
                </div>
                <p>Confirma que el compilador Java esté disponible</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-lg font-semibold text-green-900">Reinicio Limpio</h3>
              </div>
              <ol className="space-y-2 text-green-800 text-sm">
                <li>1. Cerrar completamente la aplicación</li>
                <li>2. Limpiar y recompilar el proyecto</li>
                <li>3. Verificar que no hay procesos Java colgados</li>
                <li>4. Reiniciar la aplicación</li>
                <li>5. Verificar que los datos de prueba se cargan</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Debug Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Información de Depuración
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Logs del Sistema</h3>
                <p className="text-gray-600 mb-4">
                  Para obtener información detallada sobre errores:
                </p>
                <div className="bg-gray-900 rounded p-3 mb-4">
                  <code className="text-green-400 text-sm">
                    java -Djava.util.logging.level=ALL frontend.Principal
                  </code>
                </div>
                <p className="text-gray-600 text-sm">
                  Esto habilitará logging detallado que puede ayudar a identificar problemas.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Información del Entorno</h3>
                <p className="text-gray-600 mb-4">
                  Comandos útiles para diagnosticar el entorno:
                </p>
                <div className="space-y-2">
                  <div className="bg-gray-900 rounded p-2">
                    <code className="text-green-400 text-xs">echo $JAVA_HOME</code>
                  </div>
                  <div className="bg-gray-900 rounded p-2">
                    <code className="text-green-400 text-xs">java -XshowSettings:properties</code>
                  </div>
                  <div className="bg-gray-900 rounded p-2">
                    <code className="text-green-400 text-xs">java -XX:+PrintGCDetails</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  )
}

export default Troubleshooting