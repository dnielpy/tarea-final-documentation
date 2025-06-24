import React from 'react'
import { Code, Database, Users, Calendar, FileText, BarChart3 } from 'lucide-react'

const API = () => {
  const classes = [
    {
      name: 'CMF',
      icon: Database,
      description: 'Clase principal del sistema (Singleton)',
      methods: [
        {
          name: 'getInstance()',
          returns: 'CMF',
          description: 'Obtiene la instancia única del sistema',
          example: 'CMF cmf = CMF.getInstance();'
        },
        {
          name: 'agregarPaciente(...)',
          returns: 'boolean',
          description: 'Registra un nuevo paciente en el sistema',
          params: 'String nombre, String primerApellido, String segundoApellido, List<String> enfermedades, List<String> vacunas, String CI, boolean embarazada, LocalDate fechaRevision, String direccion',
          example: 'cmf.agregarPaciente("Juan", "Pérez", "García", enfermedades, vacunas, "85010112345", false, LocalDate.now(), "Calle 23 #456");'
        },
        {
          name: 'eliminarPaciente(int id)',
          returns: 'boolean',
          description: 'Elimina un paciente y limpia todas sus referencias',
          example: 'boolean eliminado = cmf.eliminarPaciente(1);'
        },
        {
          name: 'agregarVisita(Visita visita)',
          returns: 'void',
          description: 'Registra una nueva visita médica',
          example: 'cmf.agregarVisita(nuevaVisita);'
        },
        {
          name: 'obtenerVisitasDeUnDia(LocalDate fecha)',
          returns: 'List<Visita>',
          description: 'Obtiene todas las visitas de una fecha específica',
          example: 'List<Visita> visitas = cmf.obtenerVisitasDeUnDia(LocalDate.now());'
        }
      ]
    },
    {
      name: 'Paciente',
      icon: Users,
      description: 'Representa un paciente del consultorio',
      methods: [
        {
          name: 'getEdad()',
          returns: 'int',
          description: 'Calcula la edad basada en el CI',
          example: 'int edad = paciente.getEdad();'
        },
        {
          name: 'getGenero()',
          returns: 'String',
          description: 'Determina el género basado en el CI',
          example: 'String genero = paciente.getGenero();'
        },
        {
          name: 'agregarEnfermedadCronica(String enfermedad)',
          returns: 'void',
          description: 'Agrega una enfermedad crónica al paciente',
          example: 'paciente.agregarEnfermedadCronica("Diabetes");'
        },
        {
          name: 'estaEnRiesgo()',
          returns: 'boolean',
          description: 'Determina si el paciente está en riesgo (3+ enfermedades crónicas)',
          example: 'boolean enRiesgo = paciente.estaEnRiesgo();'
        }
      ]
    },
    {
      name: 'Visita',
      icon: Calendar,
      description: 'Representa una visita médica',
      methods: [
        {
          name: 'setDiagnostico(String diagnostico)',
          returns: 'void',
          description: 'Establece el diagnóstico de la visita',
          example: 'visita.setDiagnostico("Hipertensión arterial");'
        },
        {
          name: 'setTratamiento(String tratamiento)',
          returns: 'void',
          description: 'Establece el tratamiento prescrito',
          example: 'visita.setTratamiento("Enalapril 10mg cada 12 horas");'
        },
        {
          name: 'agregarEspecialidad(String especialidad)',
          returns: 'void',
          description: 'Agrega una especialidad remitida',
          example: 'visita.agregarEspecialidad("Cardiología");'
        },
        {
          name: 'getResumenAnalisis()',
          returns: 'String',
          description: 'Obtiene un resumen de los análisis realizados',
          example: 'String resumen = visita.getResumenAnalisis();'
        }
      ]
    },
    {
      name: 'Analisis',
      icon: FileText,
      description: 'Representa un análisis médico',
      methods: [
        {
          name: 'setFechaResultado(LocalDate fecha)',
          returns: 'void',
          description: 'Establece la fecha del resultado',
          example: 'analisis.setFechaResultado(LocalDate.now());'
        },
        {
          name: 'setResultados(String resultados)',
          returns: 'void',
          description: 'Establece los resultados del análisis',
          example: 'analisis.setResultados("Valores normales");'
        },
        {
          name: 'estaPendienteDeResultado()',
          returns: 'boolean',
          description: 'Verifica si el análisis está pendiente de resultado',
          example: 'boolean pendiente = analisis.estaPendienteDeResultado();'
        }
      ]
    }
  ]

  const validations = [
    {
      method: 'isValidCI(String ci)',
      description: 'Valida formato de Carnet de Identidad cubano',
      example: 'boolean valido = Validations.isValidCI("85010112345");'
    },
    {
      method: 'isFemale(String ci)',
      description: 'Determina si el CI corresponde a una mujer',
      example: 'boolean esMujer = Validations.isFemale("85010112345");'
    },
    {
      method: 'getAgeFromCI(String ci)',
      description: 'Calcula la edad basada en el CI',
      example: 'int edad = Validations.getAgeFromCI("85010112345");'
    },
    {
      method: 'validateName(String name)',
      description: 'Valida formato de nombres y apellidos',
      example: 'boolean valido = Validations.validateName("Juan Carlos");'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Code className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Referencia de API
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Documentación completa de las clases y métodos principales del Sistema CMF
          </p>
        </div>

        {/* Main Classes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Clases Principales
          </h2>
          <div className="space-y-8">
            {classes.map((cls, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <div className="flex items-center">
                    <cls.icon className="h-6 w-6 text-primary-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {cls.name}
                      </h3>
                      <p className="text-gray-600">{cls.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {cls.methods.map((method, methodIndex) => (
                      <div key={methodIndex} className="border-l-4 border-primary-200 pl-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-mono text-lg font-semibold text-gray-900">
                            {method.name}
                          </h4>
                          <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm font-medium">
                            {method.returns}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{method.description}</p>
                        {method.params && (
                          <div className="mb-3">
                            <h5 className="font-semibold text-gray-900 mb-1">Parámetros:</h5>
                            <p className="text-sm text-gray-600 font-mono bg-gray-50 p-2 rounded">
                              {method.params}
                            </p>
                          </div>
                        )}
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Ejemplo:</h5>
                          <div className="bg-gray-900 rounded p-3">
                            <code className="text-green-400 text-sm">{method.example}</code>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Validation Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Métodos de Validación
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Clase: service.Validations
              </h3>
              <p className="text-gray-600">
                Contiene métodos estáticos para validar datos de entrada del sistema
              </p>
            </div>
            <div className="space-y-6">
              {validations.map((validation, index) => (
                <div key={index} className="border-l-4 border-green-200 pl-4">
                  <h4 className="font-mono text-lg font-semibold text-gray-900 mb-2">
                    {validation.method}
                  </h4>
                  <p className="text-gray-600 mb-3">{validation.description}</p>
                  <div className="bg-gray-900 rounded p-3">
                    <code className="text-green-400 text-sm">{validation.example}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Constants */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Constantes del Sistema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ConstantesAnalisis
              </h3>
              <p className="text-gray-600 mb-4">
                Define los tipos de análisis médicos disponibles
              </p>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">
                  TIPOS_ANALISIS = [<br />
                  &nbsp;&nbsp;"Hemograma completo",<br />
                  &nbsp;&nbsp;"Glucemia",<br />
                  &nbsp;&nbsp;"Colesterol",<br />
                  &nbsp;&nbsp;"Orina simple",<br />
                  &nbsp;&nbsp;"Electrocardiograma"<br />
                  ]
                </code>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ConstantesEspecialidades
              </h3>
              <p className="text-gray-600 mb-4">
                Define las especialidades médicas para remisión
              </p>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-green-400 text-sm">
                  ESPECIALIDADES_REMITIDAS = [<br />
                  &nbsp;&nbsp;"Cardiología",<br />
                  &nbsp;&nbsp;"Endocrinología",<br />
                  &nbsp;&nbsp;"Neurología",<br />
                  &nbsp;&nbsp;"Ginecología",<br />
                  &nbsp;&nbsp;"Dermatología"<br />
                  ]
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Ejemplos de Uso Completos
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Registrar un Nuevo Paciente
              </h3>
              <div className="bg-gray-900 rounded p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`// Obtener instancia del sistema
CMF cmf = CMF.getInstance();

// Preparar datos del paciente
List<String> enfermedades = Arrays.asList("Diabetes", "Hipertensión");
List<String> vacunas = Arrays.asList("Antigripal: 15/03/2023");

// Registrar paciente
boolean registrado = cmf.agregarPaciente(
    "María", "González", "Pérez",
    enfermedades, vacunas,
    "85010112345", true,
    LocalDate.of(2023, 1, 15),
    "Calle 23 #456, Plaza, La Habana"
);

if (registrado) {
    System.out.println("Paciente registrado exitosamente");
}`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Crear y Registrar una Visita
              </h3>
              <div className="bg-gray-900 rounded p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`// Crear análisis para la visita
List<Analisis> analisis = new ArrayList<>();
Analisis hemograma = new Analisis(1, "Hemograma completo", 
    LocalDate.now(), 1, 1);
analisis.add(hemograma);

// Especialidades remitidas
List<String> especialidades = Arrays.asList("Cardiología");

// Crear visita
Visita visita = new Visita(
    1, 1, LocalDate.now(),
    "Hipertensión arterial leve",
    "Enalapril 10mg cada 12 horas",
    analisis, especialidades,
    "Calle 23 #456, Plaza, La Habana"
);

// Registrar visita
cmf.agregarVisita(visita);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default API