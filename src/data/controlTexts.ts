export const controlTexts = {
    "seccionA": {
    title: "Sección A. Profundizando en NIST SP 800-30",
    description: `Responda a estas preguntas antes de comenzar el perfil de riesgos para la empresa. Aunque le solicitamos el nombre de su empresa, esta información sólo se utilizará para mostrarla en el informe final. En ningún caso se revelará el nombre de su empresa a Microsoft.`,
    inputs: [
      {
        type: "subtitle",
        label: "A.1 Etapa de “Risk Framing”"
      },
      {
        type: "radio",
        label: "A.1.1 ¿Existe una estrategia de gestión de riesgos documentada que incluya roles y responsabilidades?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.1.2 ¿Se han definido y aprobado formalmente los niveles de tolerancia al riesgo (risk tolerance)?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.1.3 ¿Está documentado un plan de comunicación de riesgos para stakeholders internos y externos?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.1.4 ¿Se han identificado todos los activos críticos y se les ha asignado un valor o criticidad para el negocio?",
        options: ["0–20 activos", "21–100 activos", "Más de 100 activos", "No sé"]
      },
      {
        type: "radio",
        label: "A.1.5 ¿Se ha establecido un calendario de revisiones al marco de riesgos (p.ej., anual, semestral)?",
        options: ["Anual", "Semestral", "Bajo demanda", "No sé"]
      },
      {
        type: "subtitle",
        label: "A.2 Etapa de “Risk Assessment”"
      },
      {
        type: "radio",
        label: "A.2.1 ¿Se categorizan los orígenes de amenaza (adversarial, accidental, ambiental)?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.2.2 ¿Se emplean herramientas de escaneo y pruebas de penetración para identificar vulnerabilidades?",
        options: ["Sí, regularmente", "Sí, ocasionalmente", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.2.3 ¿Se utilizan escalas definidas de probabilidad e impacto (por ejemplo, 1–5) al evaluar cada riesgo?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.2.4 ¿Los resultados de vulnerabilidades se actualizan en la base de datos de riesgos tras cada hallazgo?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.2.5 ¿Se priorizan los riesgos usando índices de criticidad (por ejemplo, riesgo = probabilidad × impacto)?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "subtitle",
        label: "A.3 Etapa de “Risk Response”"
      },
      {
        type: "radio",
        label: "A.3.1 ¿Se evalúan opciones de tratamiento para cada riesgo (mitigar, transferir, aceptar, evitar)?",
        options: ["Sí", "Parcialmente", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.3.2 ¿Se realiza un análisis de coste-beneficio antes de implementar un control?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.3.3 ¿Cada plan de tratamiento de riesgo tiene un responsable y fecha de ejecución?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.3.4 ¿Se documentan los riesgos residuales y se comunican a la alta dirección?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.3.5 ¿Se monitoriza el progreso de los tratamientos de riesgo con indicadores (p.ej., % de controles implementados)?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "subtitle",
        label: "A.4 Etapa de “Risk Monitoring”"
      },
      {
        type: "radio",
        label: "A.4.1 ¿Se generan reportes periódicos de estado de riesgos (mensual, trimestral, semestral)?",
        options: ["Mensual", "Trimestral", "Semestral", "No sé"]
      },
      {
        type: "radio",
        label: "A.4.2 ¿Existen disparadores (triggers) que re-inicien la evaluación de riesgos tras un cambio significativo?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.4.3 ¿Los incidentes de seguridad retroalimentan el proceso de evaluación de riesgos?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.4.4 ¿Se revisa la efectividad de los controles de riesgo al menos una vez al año?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "A.4.5 ¿Se mantiene un historial de tendencias de niveles de riesgo a lo largo del tiempo?",
        options: ["Sí", "No", "No sé"]
      }
    ]
  },
  "seccionB": {
    title: "Sección B. Cláusula 4: Contexto de la organización",
    inputs: [
      {
        type: "subtitle",
        label: "B.4 Contexto de la organización"
      },
      {
        type: "radio",
        label: "B.4.1 ¿La organización ha identificado y documentado los factores internos que pueden afectar la seguridad de la información?",
        options: ["Sí", "Parcialmente", "No", "No sé"]
      },
      {
        type: "radio",
        label: "B.4.2 ¿Se han catalogado y evaluado los factores externos (regulatorios, de mercado, tecnológicos) que impactan la seguridad?",
        options: ["Sí", "Parcialmente", "No", "No sé"]
      },
      {
        type: "radio",
        label: "B.4.3 ¿Se ha elaborado una lista de las partes interesadas (clientes, proveedores, reguladores) y sus requisitos de seguridad?",
        options: ["Sí", "Parcialmente", "No", "No sé"]
      },
      {
        type: "radio",
        label: "B.4.4 ¿Está definido y aprobado por la dirección el alcance del SGSI (límites organizativos y tecnológicos)?",
        options: ["Sí", "Parcialmente", "No", "No sé"]
      },
      {
        type: "conditional",
        condition: "B.4.4 == 'Sí' || B.4.4 == 'Parcialmente'",
        inputs: [
          {
            type: "radio",
            label: "B.4.4.1 ¿El alcance incluye explícitamente servidores, estaciones de trabajo y activos en la nube?",
            options: ["Sí", "No", "No sé"]
          },
          {
            type: "radio",
            label: "B.4.4.2 ¿Se ha documentado la ubicación física/lógica de cada activo incluido?",
            options: ["Sí", "No", "No sé"]
          }
        ]
      },
      {
        type: "radio",
        label: "B.4.5 ¿Se han identificado e integrado los procesos de otras áreas (p.ej. continuidad, calidad) dentro del alcance del SGSI?",
        options: ["Sí", "Parcialmente", "No", "No sé"]
      }
    ]
  },
  "seccionC": {
    title: "Sección C. Cláusula 5: Liderazgo",
    inputs: [
      {
        type: "subtitle",
        label: "C.5 Liderazgo"
      },
      {
        type: "radio",
        label: "C.5.1 ¿La alta dirección revisa y firma la política de seguridad de la información al menos una vez al año?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "C.5.2 ¿Están establecidos y comunicados los roles y responsabilidades para el SGSI (propietarios de activos, responsables de incidentes)?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "C.5.3 ¿La política de seguridad de la información está documentada, aprobada y difundida a todo el personal?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "C.5.4 ¿Se alinean los objetivos del SGSI con los objetivos estratégicos de la organización?",
        options: ["Sí", "Parcialmente", "No", "No sé"]
      },
      {
        type: "radio",
        label: "C.5.5 ¿Existe un mecanismo formal para resolver conflictos entre requisitos de seguridad y otros objetivos de negocio?",
        options: ["Sí", "No", "No sé"]
      }
    ]
  },
  "seccionD": {
    title: "Sección D. Cláusula 6: Planificación",
    inputs: [
      {
        type: "subtitle",
        label: "D.6 Planificación"
      },
      {
        type: "radio",
        label: "D.6.1 ¿Se cuenta con un procedimiento documentado para identificar riesgos de seguridad de la información?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "D.6.2 ¿Los riesgos se evalúan cualitativa o cuantitativamente y se asignan niveles (alto/medio/bajo)?",
        options: ["Sí", "Parcialmente", "No", "No sé"]
      },
      {
        type: "radio",
        label: "D.6.3 ¿Se ha elaborado un plan de tratamiento de riesgos con responsables y fechas límite?",
        options: ["Sí", "Parcialmente", "No", "No sé"]
      },
      {
        type: "radio",
        label: "D.6.4 ¿Los objetivos de seguridad están documentados, son medibles y se revisan al menos una vez al año?",
        options: ["Sí", "Parcialmente", "No", "No sé"]
      },
      {
        type: "radio",
        label: "D.6.5 ¿Se evalúa el impacto en el SGSI antes de implementar cambios significativos en la organización o tecnología?",
        options: ["Sí", "No", "No sé"]
      }
    ]
  },  
  "seccionE": {
    title: "Sección E. Cláusula 7: Soporte",
    inputs: [
      {
        type: "subtitle",
        label: "E.7 Soporte"
      },
      {
        type: "radio",
        label: "E.7.1 ¿La organización ha asignado recursos (humanos, tecnológicos y financieros) suficientes para el SGSI?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "E.7.2 ¿Se mantiene un registro de competencias y formaciones en seguridad de la información para todo el personal relevante?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "E.7.3 ¿Se realizan campañas de concienciación en seguridad al menos semestralmente y se mide su eficacia?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "E.7.4 ¿Existe un procedimiento para comunicar internamente incidencias, cambios y resultados de auditorías?",
        options: ["Sí", "No", "No sé"]
      },
      {
        type: "radio",
        label: "E.7.5 ¿Los documentos y registros del SGSI se controlan (versiones, aprobaciones, acceso)?",
        options: ["Sí", "No", "No sé"]
      }
    ]
  },
  "seccionF": {
  title: "Sección F. Cláusula 8: Operación",
  inputs: [
    {
      type: "subtitle",
      label: "F.8 Operación"
    },
    {
      type: "radio",
      label: "F.8.1 ¿Los procesos críticos (p.ej. gestión de accesos, backup, despliegue de parches) están formalmente documentados y controlados?",
      options: ["Sí", "Parcialmente", "No", "No sé"]
    },
    {
      type: "conditional",
      condition: "F.8.1 == 'Sí' || F.8.1 == 'Parcialmente'",
      inputs: [
        {
          type: "radio",
          label: "F.8.1.1 ¿Con qué frecuencia se revisan los procedimientos operacionales?",
          options: ["Mensual", "Trimestral", "Anual", "No sé"]
        },
        {
          type: "radio",
          label: "F.8.1.2 ¿Quién es responsable de la aprobación de cambios en estos procesos?",
          options: ["Gerencia", "CISO / Responsable de Seguridad", "Jefe de TI", "No sé"]
        }
      ]
    },
    {
      type: "radio",
      label: "F.8.2 ¿El Statement of Applicability (SoA) está aprobado y refleja los controles aplicados del Anexo A?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "F.8.3 ¿Se ha implementado y evidenciado el tratamiento de riesgos según el plan establecido?",
      options: ["Sí", "Parcialmente", "No", "No sé"]
    },
    {
      type: "radio",
      label: "F.8.4 ¿Se dispone de un plan de continuidad de seguridad probado en los últimos 12 meses?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "F.8.5 ¿Si utilizan servicios en la nube, se han evaluado y documentado sus controles de seguridad?",
      options: ["Sí", "Parcialmente", "No", "No sé"]
    }
  ]
},
"seccionG": {
  title: "Sección G. Cláusula 9: Evaluación del desempeño",
  inputs: [
    {
      type: "subtitle",
      label: "G.9 Evaluación del desempeño"
    },
    {
      type: "radio",
      label: "G.9.1 ¿Se monitorean indicadores de desempeño del SGSI (incidentes, tiempo de respuesta, vulnerabilidades) con informes periódicos?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "G.9.2 ¿Se ejecuta un programa de auditorías internas con alcance y frecuencia documentados?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "G.9.3 ¿Se documentan hallazgos de auditoría y se asignan acciones correctivas con seguimiento?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "G.9.4 ¿La dirección revisa formalmente (acta firmada) los resultados de auditorías, riesgos y desempeño del SGSI?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "G.9.5 ¿Se comunican internamente las decisiones y mejoras derivadas de la revisión por la dirección?",
      options: ["Sí", "No", "No sé"]
    }
  ]
},
"seccionH": {
  title: "Sección H. Cláusula 10: Mejora",
  inputs: [
    {
      type: "subtitle",
      label: "H.10 Mejora"
    },
    {
      type: "radio",
      label: "H.10.1 ¿Se registran todas las no conformidades y se gestionan acciones correctivas documentadas?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "H.10.2 ¿Se investiga la raíz de cada no conformidad antes de definir acciones?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "H.10.3 ¿Se revisan y actualizan las lecciones aprendidas y el SGSI tras cada acción correctiva?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "H.10.4 ¿Existe un repositorio de lecciones aprendidas accesible para todo el equipo de seguridad?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "H.10.5 ¿Se evalúa la eficacia de las acciones tomadas para verificar que solucionan la no conformidad?",
      options: ["Sí", "No", "No sé"]
    }
  ]
},
"seccionI": {
  title: "Sección I. Anexo A: Controles específicos",
  inputs: [
    {
      type: "subtitle",
      label: "I.A Anexo A"
    },
    {
      type: "radio",
      label: "I.A.5 ¿Se ha aprobado, comunicado y revisado periódicamente la política de seguridad?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "I.A.7 ¿Se verifica antecedentes y se forma en seguridad antes de incorporar nuevo personal?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "I.A.9 ¿Se gestionan las cuentas de administrador con revisiones y recertificaciones periódicas?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "I.A.12 ¿Se realizan escaneos de vulnerabilidades y análisis de malware según un programa formal?",
      options: ["Sí", "No", "No sé"]
    },
    {
      type: "radio",
      label: "I.A.17 ¿El plan de continuidad de la seguridad (Anexo A.17) incluye pruebas de recuperación y roles definidos?",
      options: ["Sí", "No", "No sé"]
    }
  ]
}
}