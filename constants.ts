import type { FrameworkEje, PlanData } from './types';

export const FRAMEWORK_EJES: FrameworkEje[] = [
  { key: 'nucleo', icon: 'fas fa-brain', title: 'Núcleo analítico de confianza', initial: '[N]', description: 'Gobernanza, auditorías y madurez de datos.' },
  { key: 'friccion', icon: 'fas fa-tools', title: 'Epicentro de fricción operativa', initial: '[F]', description: 'Puntos de quiebre que generan costos, errores o quejas.' },
  { key: 'mapa', icon: 'fas fa-map-marked-alt', title: 'Mapa de procesos', initial: '[M]', description: 'Flujo real (no el declarado) y documentación operativa.' },
  { key: 'gobernanza', icon: 'fas fa-chart-line', title: 'Ritmo de gobernanza de indicadores', initial: '[G]', description: 'Comités, KPIs, rituales de revisión y toma de decisiones.' },
  { key: 'angulo', icon: 'fas fa-eye-slash', title: 'Ángulo muerto de performance', initial: '[A]', description: 'Métricas críticas que la dirección desconoce o ignora.' },
  { key: 'transformacion', icon: 'fas fa-sync-alt', title: 'Transformación prioritaria a 90 días', initial: '[T]', description: 'Plan de acción inmediato con resultados visibles y medibles.' }
];

export const PLAN_DATA: PlanData = {
            cx: {
                title: "Plan Integral Experiencia del Cliente y Presencia Digital",
                sections: [
                    { title: "🕐 1er Mes — Diagnóstico, Relevamiento y Observación Directa de la Experiencia del Huésped", tareas: [
                        { id: 'tarea-cx-1-1', name: "1.1. Consulta de foco de dolor al cliente (Dirección / Operación / Marketing)", ejes: ['friccion', 'nucleo'], siglas: '[F] [N]', copy: "Identificar los dolores, riesgos percibidos y cómo repercuten en los comentarios en línea. Define el **Epicentro de fricción** y la necesidad de un **Núcleo analítico**." },
                        { id: 'tarea-cx-1-2', name: "1.2. Relevamiento según declaración de los involucrados (Front Desk / Limpieza / Mantenimiento / Reservas / Facturación / Marketing Digital)", ejes: ['mapa'], siglas: '[M]', copy: "Entrevistas estructuradas con personal clave para documentar la experiencia ideal vs. la realidad, base para el **Mapa de procesos**." },
                        { id: 'tarea-cx-1-3', name: "1.3. Revisión preliminar de información disponible", ejes: ['nucleo', 'gobernanza'], siglas: '[N] [G]', copy: "Inventario preliminar de datos (reseñas, quejas) para localizar el **Núcleo analítico** y proponer la base de la **Gobernanza** (formulario estructurado)." },
                        { id: 'tarea-cx-1-4', name: "1.4. Relevamiento físico real del proceso actual vigente (Aterrizaje en campo / shadowing de la operación)", ejes: ['mapa', 'friccion', 'angulo'], siglas: '[M] [F] [A]', copy: "Observación directa para documentar el **Mapa de procesos** real, exponer el **Epicentro de fricción** en vivo y detectar **Riesgos iniciales** (Ángulo Muerto)." },
                    ]},
                    { title: "🕑 2do Mes — Análisis, Auditoría y Estructuración Estratégica de la Experiencia y la Reputación Digital", tareas: [
                        { id: 'tarea-cx-2-1', name: "2.1. Análisis final de procesos (auditoría profunda)", ejes: ['angulo', 'nucleo'], siglas: '[A] [N]', copy: "Cruzar lo dicho vs. lo real vs. la información disponible. Identificar **Ángulos muertos** (lo que nadie mide) y auditar el **Núcleo analítico**." },
                        { id: 'tarea-cx-2-2', name: "2.2. Estrategia de estructuración (modelo operativo integrado de Experiencia del Cliente)", ejes: ['gobernanza'], siglas: '[G]', copy: "Diseñar el Comité de **Gobernanza** de Experiencia del Cliente Digital, estableciendo Ritmo (KPIs, OKRs) y protocolos de contención." },
                        { id: 'tarea-cx-2-3', name: "2.3. Estrategia de implementación (Transformación prioritaria a 90 días)", ejes: ['transformacion'], siglas: '[T]', copy: "Convertir la hoja de ruta en un plan de acción **ejecutable en 90 días**, creando la **Transformación prioritaria** con dos frentes (sitio y digital)." },
                    ]},
                    { title: "🕒 3er Mes a 6 Meses — Digitalización, Monitoreo, Predicción y Mejora Continua", tareas: [
                        { id: 'tarea-cx-3-1', name: "3.1. Implementación de herramientas informáticas / digitales", ejes: ['nucleo', 'transformacion'], siglas: '[N] [T]', copy: "Puesta en marcha del módulo/sistema para registrar solicitudes y quejas, consolidando el **Núcleo analítico** y la **Transformación**." },
                        { id: 'tarea-cx-3-2', name: "3.2. Histórico de 3 meses de uso de la implementación", ejes: ['gobernanza'], siglas: '[G]', copy: "Monitoreo continuo de KPIs y OKRs para evaluar la adopción y documentar la base histórica viva de experiencia y reputación (Mejora continua y **Ritmo de Gobernanza**)." },
                        { id: 'tarea-cx-3-3', name: "3.3. Evaluación del flujo de trabajo y cultura operativa", ejes: ['angulo', 'mapa'], siglas: '[A] [M]', copy: "Análisis comparativo antes/después para medir **Performance** (Ángulo Muerto) y asegurar la adopción del **Mapa de procesos** diseñado." },
                        { id: 'tarea-cx-3-4', name: "3.4. Automatización de procesos y análisis predictivo", ejes: ['transformacion', 'gobernanza'], siglas: '[T] [G]', copy: "Automatización de alertas y **tableros predictivos**, moviendo la **Transformación** a la inteligencia de negocio y formalizando la **Gobernanza avanzada**." },
                    ]}
                ]
            },
            cm: {
                title: "Plan Integral de Community Management y Presencia Digital",
                sections: [
                    { title: "🕐 1er Mes — Diagnóstico, Relevamiento y Observación Directa del Sistema Digital y de Marca", tareas: [
                        { id: 'tarea-cm-1-1', name: "1.1. Consulta de foco de dolor al cliente", ejes: ['friccion', 'nucleo'], siglas: '[F] [N]', copy: "Identificar cómo el cliente percibe hoy su presencia digital y los cuellos de botella actuales (retrasos, inconsistencia), localizando el **Epicentro de fricción** y la necesidad de un **Núcleo analítico**." },
                        { id: 'tarea-cm-1-2', name: "1.2. Relevamiento según declaración de los involucrados", ejes: ['mapa'], siglas: '[M]', copy: "Documentar el flujo proactivo y reactivo, identificando herramientas y el estado del manual de marca para crear el **Mapa de procesos**." },
                        { id: 'tarea-cm-1-3', name: "1.3. Revisión preliminar de información disponible", ejes: ['nucleo', 'gobernanza'], siglas: '[N] [G]', copy: "Inventario preliminar de activos digitales (calendarios, métricas, accesos), clasificando el **Núcleo analítico** y la **Gobernanza** inicial de seguridad." },
                        { id: 'tarea-cm-1-4', name: "1.4. Relevamiento físico real del proceso actual vigente", ejes: ['mapa', 'friccion', 'angulo'], siglas: '[M] [F] [A]', copy: "Observación de cómo se ejecuta la creación de contenido y la respuesta a crisis, validando el **Mapa de procesos** y detectando **Riesgos reputacionales inmediatos** (**Ángulo Muerto**)." },
                    ]},
                    { title: "🕑 2do Mes — Análisis, Auditoría y Estructuración Estratégica de la Función de Community Management", tareas: [
                        { id: 'tarea-cm-2-1', name: "2.1. Análisis final de procesos (auditoría profunda)", ejes: ['angulo', 'nucleo'], siglas: '[A] [N]', copy: "Cruce de lo declarado vs. lo real vs. la data. Identificación de **Ángulos muertos** (canales sin monitoreo, mensajes sin respuesta) y evaluación de la salud del branding (**Núcleo analítico**)." },
                        { id: 'tarea-cm-2-2', name: "2.2. Estrategia de estructuración (modelo operativo integrado de CM y marca)", ejes: ['gobernanza'], siglas: '[G]', copy: "Diseño de la hoja de ruta CM (Proactivo/Reactivo), formalizando el Manual de Marca y estableciendo el Comité de **Gobernanza de Presencia Digital** (**Ritmo de Gobernanza**)." },
                        { id: 'tarea-cm-2-3', name: "2.3. Estrategia de implementación (Transformación prioritaria a 90 días)", ejes: ['transformacion'], siglas: '[T]', copy: "Plan de acción **ejecutable en 90 días** con dos frentes (Posicionamiento y Reputación), iniciando la **Transformación prioritaria**." },
                    ]},
                    { title: "🕒 3er Mes a 6 Meses — Digitalización, Gobernanza Viva, Mejora Continua y Escalado", tareas: [
                        { id: 'tarea-cm-3-1', name: "3.1. Implementación de herramientas informáticas / digitales", ejes: ['nucleo', 'transformacion'], siglas: '[N] [T]', copy: "Puesta en marcha de suites de gestión de redes sociales y librería centralizada de assets, consolidando el **Núcleo analítico** y la **Transformación**." },
                        { id: 'tarea-cm-3-2', name: "3.2. Histórico de 3 meses de uso de la implementación", ejes: ['gobernanza'], siglas: '[G]', copy: "Seguimiento de OKRs/KPIs e incidentes para consolidar la base histórica formal y asegurar el **Ritmo de gobernanza** y mejora continua." },
                        { id: 'tarea-cm-3-3', name: "3.3. Evaluación de flujo de trabajo y cultura operativa", ejes: ['angulo', 'mapa'], siglas: '[A] [M]', copy: "Comparación antes/después, ajuste de procesos en el Comité de Gobernanza y medición de la adopción cultural (Performance/Ángulo Muerto y Mapa de Procesos)." },
                        { id: 'tarea-cm-3-4', name: "3.4. Automatización de procesos y análisis predictivo", ejes: ['transformacion', 'gobernanza'], siglas: '[T] [G]', copy: "Automatización de alertas y tableros predictivos (radar reputacional), moviendo la **Transformación** a fase de inteligencia de negocio y formalizando la **Gobernanza avanzada**." },
                    ]}
                ]
            },
            mantenimiento: {
                title: "Plan Integral de Mantenimiento — Modelo de Transformación Operativa, Cultural y Digital",
                sections: [
                    { title: "🕐 1er Mes — Diagnóstico, Relevamiento y Observación Directa", tareas: [
                        { id: 'tarea-mt-1-1', name: "1.1. Consulta de foco de dolor al cliente", ejes: ['friccion', 'nucleo'], siglas: '[F] [N]', copy: "Reuniones con el cliente para identificar los principales dolores (cuellos de botella, emergencias) y la madurez cultural. Define el **Epicentro de fricción** y el **Núcleo analítico**." },
                        { id: 'tarea-mt-1-2', name: "1.2. Relevamiento según declaración de los involucrados", ejes: ['mapa'], siglas: '[M]', copy: "Entrevistas con responsables y operativos para entender cómo gestionan el preventivo y correctivo, y mapeo preliminar de procesos para el **Mapa de procesos**." },
                        { id: 'tarea-mt-1-3', name: "1.3. Revisión preliminar de información disponible", ejes: ['nucleo', 'gobernanza'], siglas: '[N] [G]', copy: "Inventario preliminar de registros y bitácoras por tipo y formato, sin auditar a fondo todavía, localizando el **Núcleo analítico** y la **Gobernanza inicial**." },
                        { id: 'tarea-mt-1-4', name: "1.4. Relevamiento físico real del proceso vigente", ejes: ['mapa', 'friccion', 'angulo'], siglas: '[M] [F] [A]', copy: "Observación directa de la ejecución de tareas en campo para validar el **Mapa de procesos**, identificar el **Epicentro de fricción** y detectar **Riesgos** (Ángulo Muerto)." },
                    ]},
                    { title: "🕑 2do Mes — Análisis, Auditoría y Estructuración Estratégica", tareas: [
                        { id: 'tarea-mt-2-1', name: "2.1. Análisis final de procesos (auditoría profunda)", ejes: ['angulo', 'nucleo'], siglas: '[A] [N]', copy: "Cruce de documental vs. físico. Auditoría de históricos, detección de discrepancias y **Ángulos muertos** (procesos no medidos) y validación del **Núcleo analítico**." },
                        { id: 'tarea-mt-2-2', name: "2.2. Estrategia de estructuración (modelo operativo integrado)", ejes: ['gobernanza'], siglas: '[G]', copy: "Diseño de roles, **Comité de Gobernanza** y sistema dual de KPIs (preventivo/correctivo) con revisión mensual, estableciendo el **Ritmo de gobernanza**." },
                        { id: 'tarea-mt-2-3', name: "2.3. Estrategia de implementación (Transformación 90 días)", ejes: ['transformacion'], siglas: '[T]', copy: "Plan de acción inmediato en dos ejes (Preventivo/Correctivo) con resultados visibles, iniciando la **Transformación prioritaria**." },
                    ]},
                    { title: "🕒 3er Mes a 6 Meses — Digitalización, Monitoreo, Predicción y Mejora Continua", tareas: [
                        { id: 'tarea-mt-3-1', name: "3.1. Implementación de herramientas digitales", ejes: ['nucleo', 'transformacion'], siglas: '[N] [T]', copy: "Integración de software especializado (CMMS) con módulos preventivo y correctivo, fortaleciendo el **Núcleo analítico** y la **Transformación**." },
                        { id: 'tarea-mt-3-2', name: "3.2. Histórico de uso y gobernanza de indicadores", ejes: ['gobernanza'], siglas: '[G]', copy: "Seguimiento continuo de KPIs y reuniones mensuales del Comité de **Gobernanza** para evaluar desviaciones y priorizar mejoras." },
                        { id: 'tarea-mt-3-3', name: "3.3. Evaluación del flujo de trabajo y cultura operativa", ejes: ['angulo', 'mapa'], siglas: '[A] [M]', copy: "Evaluación comparativa del antes y después, análisis de reducción del correctivo y medición de adopción cultural (Performance/Ángulo Muerto y Mapa de Procesos)." },
                        { id: 'tarea-mt-3-4', name: "3.4. Automatización y análisis predictivo", ejes: ['transformacion', 'gobernanza'], siglas: '[T] [G]', copy: "Automatización de reportes, tickets y **tableros predictivos**, integrando BI para la **Transformación** y formalizando la **Gobernanza avanzada**." },
                    ]}
                ]
            }
};

export const TABS = [
  { key: 'cx' as const, label: 'Experiencia del Cliente', icon: '🧩' },
  { key: 'cm' as const, label: 'Community Manager', icon: '📱' },
  { key: 'mantenimiento' as const, label: 'Mantenimiento', icon: '⚙️' }
];