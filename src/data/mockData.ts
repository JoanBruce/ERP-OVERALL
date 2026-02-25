// Datos de prueba para el Sistema ERP de Gestión de Mantenimiento - Overall

import {
  Maquina,
  Empleado,
  Turno,
  ReporteAveria,
  OrdenTrabajo,
  Checklist,
  Insumo,
  MovimientoInsumo,
  DashboardKPIs,
  Actividad
} from '../types';

// Máquinas
export const maquinas: Maquina[] = [
  {
    id: 'M001',
    codigo: 'MONT-001',
    nombre: 'Montacargas Hyster H3.0',
    tipo: 'Montacargas',
    marca: 'Hyster',
    modelo: 'H3.0FT',
    serie: 'H3FT-2024-001',
    sede: 'Planta Principal',
    horometroActual: 2450,
    horometroProximoMantenimiento: 2500,
    estado: 'operativa',
    fechaAdquisicion: '2024-01-15',
    ultimoMantenimiento: '2025-01-10'
  },
  {
    id: 'M002',
    codigo: 'MONT-002',
    nombre: 'Montacargas Toyota 8FGU25',
    tipo: 'Montacargas',
    marca: 'Toyota',
    modelo: '8FGU25',
    serie: '8FGU25-2023-045',
    sede: 'Planta Principal',
    horometroActual: 3890,
    horometroProximoMantenimiento: 4000,
    estado: 'operativa',
    fechaAdquisicion: '2023-06-20',
    ultimoMantenimiento: '2025-01-15'
  },
  {
    id: 'M003',
    codigo: 'MONT-003',
    nombre: 'Montacargas Komatsu FG25T',
    tipo: 'Montacargas',
    marca: 'Komatsu',
    modelo: 'FG25T-16',
    serie: 'FG25T-2022-089',
    sede: 'Planta Principal',
    horometroActual: 5120,
    horometroProximoMantenimiento: 5000,
    estado: 'en_mantenimiento',
    fechaAdquisicion: '2022-03-10',
    ultimoMantenimiento: '2025-02-20'
  },
  {
    id: 'M004',
    codigo: 'MONT-004',
    nombre: 'Montacargas Yale GDP50VX',
    tipo: 'Montacargas',
    marca: 'Yale',
    modelo: 'GDP50VX',
    serie: 'GDP50VX-2024-012',
    sede: 'Planta Principal',
    horometroActual: 1250,
    horometroProximoMantenimiento: 2000,
    estado: 'operativa',
    fechaAdquisicion: '2024-08-05',
    ultimoMantenimiento: '2025-01-20'
  },
  {
    id: 'M005',
    codigo: 'MONT-005',
    nombre: 'Montacargas Clark C25S',
    tipo: 'Montacargas',
    marca: 'Clark',
    modelo: 'C25S',
    serie: 'C25S-2021-034',
    sede: 'Planta Principal',
    horometroActual: 6500,
    horometroProximoMantenimiento: 7000,
    estado: 'averiada',
    fechaAdquisicion: '2021-11-25',
    ultimoMantenimiento: '2025-02-18'
  },
  {
    id: 'M006',
    codigo: 'MAQ-001',
    nombre: 'Compresor de Aire Ingersoll Rand',
    tipo: 'Compresor',
    marca: 'Ingersoll Rand',
    modelo: 'R-110',
    serie: 'R110-2020-056',
    sede: 'Planta Principal',
    horometroActual: 8900,
    horometroProximoMantenimiento: 10000,
    estado: 'operativa',
    fechaAdquisicion: '2020-05-15',
    ultimoMantenimiento: '2025-01-25'
  },
  {
    id: 'M007',
    codigo: 'MAQ-002',
    nombre: 'Taladro de Columna Bosch',
    tipo: 'Taladro',
    marca: 'Bosch',
    modelo: 'GMB 32',
    serie: 'GMB32-2022-078',
    sede: 'Planta Principal',
    horometroActual: 2100,
    horometroProximoMantenimiento: 3000,
    estado: 'operativa',
    fechaAdquisicion: '2022-07-20',
    ultimoMantenimiento: '2025-01-05'
  },
  {
    id: 'M008',
    codigo: 'MAQ-003',
    nombre: 'Soldadora MIG Magma',
    tipo: 'Soldadora',
    marca: 'Magma',
    modelo: 'MIG-250',
    serie: 'MIG250-2023-091',
    sede: 'Planta Principal',
    horometroActual: 1560,
    horometroProximoMantenimiento: 2000,
    estado: 'operativa',
    fechaAdquisicion: '2023-02-14',
    ultimoMantenimiento: '2025-02-01'
  }
];

// Empleados
export const empleados: Empleado[] = [
  {
    id: 'E001',
    nombre: 'Carlos',
    apellido: 'Martínez',
    codigo: 'EMP-001',
    cargo: 'Coordinador de Mantenimiento',
    rol: 'coordinador',
    sede: 'Planta Principal',
    email: 'carlos.martinez@overall.com',
    telefono: '+52 55 1234 5678',
    activo: true,
    fechaIngreso: '2020-03-15'
  },
  {
    id: 'E002',
    nombre: 'Ana',
    apellido: 'García',
    codigo: 'EMP-002',
    cargo: 'Supervisor de Planta',
    rol: 'supervisor',
    sede: 'Planta Principal',
    email: 'ana.garcia@overall.com',
    telefono: '+52 55 2345 6789',
    activo: true,
    fechaIngreso: '2019-08-20'
  },
  {
    id: 'E003',
    nombre: 'Roberto',
    apellido: 'López',
    codigo: 'EMP-003',
    cargo: 'Técnico de Mantenimiento',
    rol: 'tecnico',
    sede: 'Planta Principal',
    email: 'roberto.lopez@overall.com',
    telefono: '+52 55 3456 7890',
    activo: true,
    fechaIngreso: '2021-01-10'
  },
  {
    id: 'E004',
    nombre: 'María',
    apellido: 'Hernández',
    codigo: 'EMP-004',
    cargo: 'Técnico de Mantenimiento',
    rol: 'tecnico',
    sede: 'Planta Principal',
    email: 'maria.hernandez@overall.com',
    telefono: '+52 55 4567 8901',
    activo: true,
    fechaIngreso: '2021-06-05'
  },
  {
    id: 'E005',
    nombre: 'Pedro',
    apellido: 'Sánchez',
    codigo: 'EMP-005',
    cargo: 'Operario',
    rol: 'operario',
    sede: 'Planta Principal',
    email: 'pedro.sanchez@overall.com',
    telefono: '+52 55 5678 9012',
    activo: true,
    fechaIngreso: '2022-02-14'
  },
  {
    id: 'E006',
    nombre: 'Laura',
    apellido: 'Rodríguez',
    codigo: 'EMP-006',
    cargo: 'Operaria',
    rol: 'operario',
    sede: 'Planta Principal',
    email: 'laura.rodriguez@overall.com',
    telefono: '+52 55 6789 0123',
    activo: true,
    fechaIngreso: '2022-05-20'
  },
  {
    id: 'E007',
    nombre: 'Javier',
    apellido: 'Torres',
    codigo: 'EMP-007',
    cargo: 'Técnico de Mantenimiento',
    rol: 'tecnico',
    sede: 'Planta Principal',
    email: 'javier.torres@overall.com',
    telefono: '+52 55 7890 1234',
    activo: false,
    fechaIngreso: '2020-11-30'
  },
  {
    id: 'E008',
    nombre: 'Sofia',
    apellido: 'Ramírez',
    codigo: 'EMP-008',
    cargo: 'Administradora',
    rol: 'administrador',
    sede: 'Planta Principal',
    email: 'sofia.ramirez@overall.com',
    telefono: '+52 55 8901 2345',
    activo: true,
    fechaIngreso: '2018-04-12'
  }
];

// Turnos
export const turnos: Turno[] = [
  {
    id: 'T001',
    nombre: 'Matutino',
    horaInicio: '06:00',
    horaFin: '14:00',
    duracion: 8
  },
  {
    id: 'T002',
    nombre: 'Vespertino',
    horaInicio: '14:00',
    horaFin: '22:00',
    duracion: 8
  },
  {
    id: 'T003',
    nombre: 'Nocturno',
    horaInicio: '22:00',
    horaFin: '06:00',
    duracion: 8
  },
  {
    id: 'T004',
    nombre: 'Diurno 12h',
    horaInicio: '07:00',
    horaFin: '19:00',
    duracion: 12
  }
];

// Reportes de Avería
export const reportesAveria: ReporteAveria[] = [
  {
    id: 'A001',
    maquinaId: 'M005',
    maquinaCodigo: 'MONT-005',
    reportadoPor: 'Pedro Sánchez',
    fechaReporte: '2025-02-20',
    horaReporte: '08:15',
    tipoFalla: 'Falla mecánica',
    severidad: 'alta',
    descripcion: 'El montacargas presenta ruido extraño en la dirección y pérdida de aceite hidráulico.',
    estado: 'pendiente',
    observaciones: ''
  },
  {
    id: 'A002',
    maquinaId: 'M003',
    maquinaCodigo: 'MONT-003',
    reportadoPor: 'Ana García',
    fechaReporte: '2025-02-19',
    horaReporte: '14:30',
    tipoFalla: 'Falla eléctrica',
    severidad: 'media',
    descripcion: 'Las luces frontales no encienden y el indicador de batería muestra fault.',
    estado: 'en_revision',
    observaciones: 'Se requiere técnico eléctrico'
  },
  {
    id: 'A003',
    maquinaId: 'M001',
    maquinaCodigo: 'MONT-001',
    reportadoPor: 'Laura Rodríguez',
    fechaReporte: '2025-02-18',
    horaReporte: '10:45',
    tipoFalla: 'Falla menor',
    severidad: 'baja',
    descripcion: 'Pequeña fuga de aceite en el cilindro de elevación.',
    estado: 'atendida',
    observaciones: 'Se realizó reparación temporal'
  },
  {
    id: 'A004',
    maquinaId: 'M006',
    maquinaCodigo: 'MAQ-001',
    reportadoPor: 'Carlos Martínez',
    fechaReporte: '2025-02-17',
    horaReporte: '16:20',
    tipoFalla: 'Falla mecánica',
    severidad: 'critica',
    descripcion: 'El compresor presenta sobrecalentamiento y se apaga automáticamente.',
    estado: 'cerrada',
    observaciones: 'Reemplazado sensor de temperatura'
  }
];

// Actividades predefinidas
export const actividadesPredefinidas: Actividad[] = [
  {
    id: 'ACT001',
    nombre: 'Inspección visual general',
    descripcion: 'Revisión visual del estado general del equipo',
    tipo: 'inspeccion'
  },
  {
    id: 'ACT002',
    nombre: 'Cambio de aceite hidráulico',
    descripcion: 'Drenar y reemplazar aceite hidráulico',
    tipo: 'preventivo'
  },
  {
    id: 'ACT003',
    nombre: 'Revisión de Frenos',
    descripcion: 'Inspección y ajuste del sistema de frenos',
    tipo: 'preventivo'
  },
  {
    id: 'ACT004',
    nombre: 'Reemplazo de filtros',
    descripcion: 'Cambio de filtros de aire, combustible y aceite',
    tipo: 'preventivo'
  },
  {
    id: 'ACT005',
    nombre: 'Alineación de ruedas',
    descripcion: 'Ajustar alineación de ruedas directrices',
    tipo: 'correctivo'
  },
  {
    id: 'ACT006',
    nombre: 'Revisión de batería',
    descripcion: 'Verificar estado y nivel de electrolito',
    tipo: 'preventivo'
  },
  {
    id: 'ACT007',
    nombre: 'Lubricación de puntos críticos',
    descripcion: 'Aplicar grasa en puntos de lubricación',
    tipo: 'preventivo'
  },
  {
    id: 'ACT008',
    nombre: 'Prueba de funcionamiento',
    descripcion: 'Realizar prueba operativa del equipo',
    tipo: 'inspeccion'
  }
];

// Órdenes de Trabajo
export const ordenesTrabajo: OrdenTrabajo[] = [
  {
    id: 'OT001',
    codigo: 'OT-2025-001',
    averiaId: 'A001',
    maquinaId: 'M005',
    maquinaCodigo: 'MONT-005',
    tipo: 'correctivo',
    prioridad: 'alta',
    estado: 'pendiente',
    fechaCreacion: '2025-02-20',
    supervisorId: 'E002',
    supervisorNombre: 'Ana García',
    tecnicoId: 'E003',
    tecnicoNombre: 'Roberto López',
    actividades: [
      {
        id: 'AO001',
        actividadId: 'ACT001',
        nombre: 'Inspección visual general',
        descripcion: 'Revisión visual del estado general del equipo',
        completada: false
      },
      {
        id: 'AO002',
        actividadId: 'ACT005',
        nombre: 'Alineación de ruedas',
        descripcion: 'Ajustar alineación de ruedas directrices',
        completada: false
      },
      {
        id: 'AO003',
        actividadId: 'ACT008',
        nombre: 'Prueba de funcionamiento',
        descripcion: 'Realizar prueba operativa del equipo',
        completada: false
      }
    ],
    observaciones: 'Requiere diagnóstico completo del sistema hidráulico'
  },
  {
    id: 'OT002',
    codigo: 'OT-2025-002',
    maquinaId: 'M003',
    maquinaCodigo: 'MONT-003',
    tipo: 'correctivo',
    prioridad: 'media',
    estado: 'en_proceso',
    fechaCreacion: '2025-02-19',
    fechaAsignacion: '2025-02-19',
    fechaInicio: '2025-02-20',
    supervisorId: 'E002',
    supervisorNombre: 'Ana García',
    tecnicoId: 'E004',
    tecnicoNombre: 'María Hernández',
    actividades: [
      {
        id: 'AO004',
        actividadId: 'ACT001',
        nombre: 'Inspección visual general',
        descripcion: 'Revisión visual del estado general del equipo',
        completada: true,
        fechaCompletado: '2025-02-20'
      },
      {
        id: 'AO005',
        actividadId: 'ACT006',
        nombre: 'Revisión de batería',
        descripcion: 'Verificar estado y nivel de electrolito',
        completada: false
      },
      {
        id: 'AO006',
        actividadId: 'ACT008',
        nombre: 'Prueba de funcionamiento',
        descripcion: 'Realizar prueba operativa del equipo',
        completada: false
      }
    ],
    observaciones: 'Falla en sistema eléctrico'
  },
  {
    id: 'OT003',
    codigo: 'OT-2025-003',
    maquinaId: 'M001',
    maquinaCodigo: 'MONT-001',
    tipo: 'preventivo',
    prioridad: 'baja',
    estado: 'completada',
    fechaCreacion: '2025-01-10',
    fechaAsignacion: '2025-01-10',
    fechaInicio: '2025-01-10',
    fechaFin: '2025-01-12',
    supervisorId: 'E001',
    supervisorNombre: 'Carlos Martínez',
    tecnicoId: 'E003',
    tecnicoNombre: 'Roberto López',
    actividades: [
      {
        id: 'AO007',
        actividadId: 'ACT001',
        nombre: 'Inspección visual general',
        descripcion: 'Revisión visual del estado general del equipo',
        completada: true,
        fechaCompletado: '2025-01-10'
      },
      {
        id: 'AO008',
        actividadId: 'ACT002',
        nombre: 'Cambio de aceite hidráulico',
        descripcion: 'Drenar y reemplazar aceite hidráulico',
        completada: true,
        fechaCompletado: '2025-01-11'
      },
      {
        id: 'AO009',
        actividadId: 'ACT004',
        nombre: 'Reemplazo de filtros',
        descripcion: 'Cambio de filtros de aire, combustible y aceite',
        completada: true,
        fechaCompletado: '2025-01-11'
      },
      {
        id: 'AO010',
        actividadId: 'ACT008',
        nombre: 'Prueba de funcionamiento',
        descripcion: 'Realizar prueba operativa del equipo',
        completada: true,
        fechaCompletado: '2025-01-12'
      }
    ],
    observaciones: 'Mantenimiento preventivo completado exitosamente'
  },
  {
    id: 'OT004',
    codigo: 'OT-2025-004',
    maquinaId: 'M002',
    maquinaCodigo: 'MONT-002',
    tipo: 'preventivo',
    prioridad: 'media',
    estado: 'asignada',
    fechaCreacion: '2025-02-15',
    fechaAsignacion: '2025-02-15',
    supervisorId: 'E001',
    supervisorNombre: 'Carlos Martínez',
    tecnicoId: 'E004',
    tecnicoNombre: 'María Hernández',
    actividades: [
      {
        id: 'AO011',
        actividadId: 'ACT001',
        nombre: 'Inspección visual general',
        descripcion: 'Revisión visual del estado general del equipo',
        completada: false
      },
      {
        id: 'AO012',
        actividadId: 'ACT003',
        nombre: 'Revisión de Frenos',
        descripcion: 'Inspección y ajuste del sistema de frenos',
        completada: false
      },
      {
        id: 'AO013',
        actividadId: 'ACT007',
        nombre: 'Lubricación de puntos críticos',
        descripcion: 'Aplicar grasa en puntos de lubricación',
        completada: false
      }
    ],
    observaciones: ''
  }
];

// Checklists
export const checklists: Checklist[] = [
  {
    id: 'CH001',
    codigo: 'CHK-MONT-001-20250220',
    maquinaId: 'M001',
    maquinaCodigo: 'MONT-001',
    tipo: 'Inspección Diaria',
    realizadoPor: 'Pedro Sánchez',
    fecha: '2025-02-20',
    estado: 'completado',
    conformidad: true,
    items: [
      { id: 'I001', descripcion: 'Nivel de aceite hidráulico', valor: 'conforme', observaciones: '' },
      { id: 'I002', descripcion: 'Presión de neumáticos', valor: 'conforme', observaciones: '' },
      { id: 'I003', descripcion: 'Funcionamiento de luces', valor: 'conforme', observaciones: '' },
      { id: 'I004', descripcion: 'Estado de frenos', valor: 'conforme', observaciones: '' },
      { id: 'I005', descripcion: 'Fugas de aceite', valor: 'conforme', observaciones: '' },
      { id: 'I006', descripcion: 'Estado de horquilla', valor: 'conforme', observaciones: '' }
    ]
  },
  {
    id: 'CH002',
    codigo: 'CHK-MONT-002-20250220',
    maquinaId: 'M002',
    maquinaCodigo: 'MONT-002',
    tipo: 'Inspección Diaria',
    realizadoPor: 'Laura Rodríguez',
    fecha: '2025-02-20',
    estado: 'completado',
    conformidad: false,
    items: [
      { id: 'I007', descripcion: 'Nivel de aceite hidráulico', valor: 'conforme', observaciones: '' },
      { id: 'I008', descripcion: 'Presión de neumáticos', valor: 'no_conforme', observaciones: 'Neumático frontal derecho bajo' },
      { id: 'I009', descripcion: 'Funcionamiento de luces', valor: 'conforme', observaciones: '' },
      { id: 'I010', descripcion: 'Estado de frenos', valor: 'conforme', observaciones: '' },
      { id: 'I011', descripcion: 'Fugas de aceite', valor: 'conforme', observaciones: '' },
      { id: 'I012', descripcion: 'Estado de horquilla', valor: 'conforme', observaciones: '' }
    ]
  },
  {
    id: 'CH003',
    codigo: 'CHK-MONT-004-20250219',
    maquinaId: 'M004',
    maquinaCodigo: 'MONT-004',
    tipo: 'Inspección Diaria',
    realizadoPor: 'Pedro Sánchez',
    fecha: '2025-02-19',
    estado: 'completado',
    conformidad: true,
    items: [
      { id: 'I013', descripcion: 'Nivel de aceite hidráulico', valor: 'conforme', observaciones: '' },
      { id: 'I014', descripcion: 'Presión de neumáticos', valor: 'conforme', observaciones: '' },
      { id: 'I015', descripcion: 'Funcionamiento de luces', valor: 'conforme', observaciones: '' },
      { id: 'I016', descripcion: 'Estado de frenos', valor: 'conforme', observaciones: '' },
      { id: 'I017', descripcion: 'Fugas de aceite', valor: 'conforme', observaciones: '' },
      { id: 'I018', descripcion: 'Estado de horquilla', valor: 'conforme', observaciones: '' }
    ]
  }
];

// Insumos
export const insumos: Insumo[] = [
  {
    id: 'INS001',
    codigo: 'ACE-HID-001',
    nombre: 'Aceite Hidraulico AW-46',
    categoria: 'Lubricantes',
    unidad: 'Litros',
    stockActual: 120,
    stockMinimo: 50,
    ubicacion: 'Almacén A-1'
  },
  {
    id: 'INS002',
    codigo: 'FIL-ARE-001',
    nombre: 'Filtro de Aire Motor',
    categoria: 'Filtros',
    unidad: 'Pieza',
    stockActual: 15,
    stockMinimo: 20,
    ubicacion: 'Almacén B-2'
  },
  {
    id: 'INS003',
    codigo: 'FIL-ACE-001',
    nombre: 'Filtro de Aceite Motor',
    categoria: 'Filtros',
    unidad: 'Pieza',
    stockActual: 25,
    stockMinimo: 20,
    ubicacion: 'Almacén B-2'
  },
  {
    id: 'INS004',
    codigo: 'FIL-COM-001',
    nombre: 'Filtro de Combustible',
    categoria: 'Filtros',
    unidad: 'Pieza',
    stockActual: 8,
    stockMinimo: 15,
    ubicacion: 'Almacén B-2'
  },
  {
    id: 'INS005',
    codigo: 'BAL-LED-001',
    nombre: 'Batería 12V 70Ah',
    categoria: 'Baterías',
    unidad: 'Pieza',
    stockActual: 4,
    stockMinimo: 5,
    ubicacion: 'Almacén C-1'
  },
  {
    id: 'INS006',
    codigo: 'GRA-GRS-001',
    nombre: 'Grasa Lubricante EP-2',
    categoria: 'Lubricantes',
    unidad: 'Kg',
    stockActual: 35,
    stockMinimo: 10,
    ubicacion: 'Almacén A-2'
  },
  {
    id: 'INS007',
    codigo: 'KIT-REV-001',
    nombre: 'Kit de Reparación Frenos',
    categoria: 'Refacciones',
    unidad: 'Kit',
    stockActual: 6,
    stockMinimo: 8,
    ubicacion: 'Almacén D-1'
  },
  {
    id: 'INS008',
    codigo: 'LUC-LED-001',
    nombre: 'Foco LED 12V 21W',
    categoria: 'Eléctricos',
    unidad: 'Pieza',
    stockActual: 45,
    stockMinimo: 30,
    ubicacion: 'Almacén E-1'
  }
];

// Movimientos de Insumos
export const movimientosInsumos: MovimientoInsumo[] = [
  {
    id: 'MVI001',
    insumoId: 'INS001',
    insumoNombre: 'Aceite Hidraulico AW-46',
    tipo: 'salida',
    cantidad: 20,
    fecha: '2025-02-20',
    motivo: 'Mantenimiento preventivo MONT-001',
    responsable: 'Roberto López'
  },
  {
    id: 'MVI002',
    insumoId: 'INS002',
    insumoNombre: 'Filtro de Aire Motor',
    tipo: 'salida',
    cantidad: 2,
    fecha: '2025-02-20',
    motivo: 'Mantenimiento MONT-003',
    responsable: 'María Hernández'
  },
  {
    id: 'MVI003',
    insumoId: 'INS001',
    insumoNombre: 'Aceite Hidraulico AW-46',
    tipo: 'entrada',
    cantidad: 50,
    fecha: '2025-02-18',
    motivo: 'Reposición de inventario',
    responsable: 'Carlos Martínez'
  },
  {
    id: 'MVI004',
    insumoId: 'INS004',
    insumoNombre: 'Filtro de Combustible',
    tipo: 'salida',
    cantidad: 1,
    fecha: '2025-02-17',
    motivo: 'Mantenimiento correctivo MONT-005',
    responsable: 'Roberto López'
  }
];

// KPIs para Dashboard
export const dashboardKPIs: DashboardKPIs = {
  totalMaquinas: 8,
  maquinasOperativas: 5,
  maquinasAveriadas: 1,
  totalOrdenesAbiertas: 4,
  ordenesPendientes: 1,
  ordenesEnProceso: 1,
  totalEmpleados: 8,
  empleadosActivos: 7,
  insumosStockBajo: 3,
  averiasUltimas24h: 1
};

// Datos para gráficos
export const datosGraficoMantenimientos = [
  { name: 'Ene', preventivos: 12, correctivos: 5, predictivos: 2 },
  { name: 'Feb', preventivos: 15, correctivos: 8, predictivos: 3 },
  { name: 'Mar', preventivos: 10, correctivos: 4, predictivos: 1 },
  { name: 'Abr', preventivos: 18, correctivos: 6, predictivos: 4 },
  { name: 'May', preventivos: 14, correctivos: 7, predictivos: 2 },
  { name: 'Jun', preventivos: 20, correctivos: 9, predictivos: 5 }
];

export const datosGraficoEstadoMaquinas = [
  { name: 'Operativas', value: 5, color: '#22c55e' },
  { name: 'En Mantenimiento', value: 2, color: '#f59e0b' },
  { name: 'Averiadas', value: 1, color: '#ef4444' }
];
