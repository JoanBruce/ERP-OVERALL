// Tipos para el Sistema ERP de Gestión de Mantenimiento - Overall

export type RolUsuario = 'administrador' | 'coordinador' | 'supervisor' | 'tecnico' | 'operario' | 'consulta';

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: RolUsuario;
  sede: string;
  avatar?: string;
  activo: boolean;
}

export interface Maquina {
  id: string;
  codigo: string;
  nombre: string;
  tipo: string;
  marca: string;
  modelo: string;
  serie: string;
  sede: string;
  horometroActual: number;
  horometroProximoMantenimiento: number;
  estado: 'operativa' | 'en_mantenimiento' | 'averiada' | 'inactiva';
  fechaAdquisicion: string;
  ultimoMantenimiento?: string;
}

export interface Empleado {
  id: string;
  nombre: string;
  apellido: string;
  codigo: string;
  cargo: string;
  rol: RolUsuario;
  sede: string;
  email: string;
  telefono: string;
  activo: boolean;
  fechaIngreso: string;
}

export interface Turno {
  id: string;
  nombre: string;
  horaInicio: string;
  horaFin: string;
  duracion: number; // horas
}

export interface HorarioAsignado {
  id: string;
  empleadoId: string;
  turnoId: string;
  sede: string;
  fechaInicio: string;
  fechaFin: string;
}

export interface ReporteAveria {
  id: string;
  maquinaId: string;
  maquinaCodigo: string;
  reportadoPor: string;
  fechaReporte: string;
  horaReporte: string;
  tipoFalla: string;
  severidad: 'baja' | 'media' | 'alta' | 'critica';
  descripcion: string;
  estado: 'pendiente' | 'en_revision' | 'atendida' | 'cerrada';
  observaciones?: string;
  evidencialUrl?: string;
}

export interface Actividad {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: 'preventivo' | 'correctivo' | 'predictivo' | 'inspeccion';
}

export interface OrdenTrabajo {
  id: string;
  codigo: string;
  averiaId?: string;
  maquinaId: string;
  maquinaCodigo: string;
  tipo: 'preventivo' | 'correctivo' | 'predictivo' | 'inspeccion';
  prioridad: 'baja' | 'media' | 'alta' | 'urgente';
  estado: 'pendiente' | 'asignada' | 'en_proceso' | 'completada' | 'cancelada';
  fechaCreacion: string;
  fechaAsignacion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  supervisorId: string;
  supervisorNombre: string;
  tecnicoId: string;
  tecnicoNombre: string;
  actividades: ActividadOrden[];
  observaciones?: string;
}

export interface ActividadOrden {
  id: string;
  actividadId: string;
  nombre: string;
  descripcion: string;
  completada: boolean;
  fechaCompletado?: string;
}

export interface Checklist {
  id: string;
  codigo: string;
  maquinaId: string;
  maquinaCodigo: string;
  tipo: string;
  realizadoPor: string;
  fecha: string;
  estado: 'pendiente' | 'en_proceso' | 'completado';
  conformidad: boolean;
  items: ItemChecklist[];
}

export interface ItemChecklist {
  id: string;
  descripcion: string;
  valor: 'conforme' | 'no_conforme' | 'na' | 'pendiente';
  observaciones?: string;
}

export interface Insumo {
  id: string;
  codigo: string;
  nombre: string;
  categoria: string;
  unidad: string;
  stockActual: number;
  stockMinimo: number;
  ubicacion: string;
}

export interface MovimientoInsumo {
  id: string;
  insumoId: string;
  insumoNombre: string;
  tipo: 'entrada' | 'salida';
  cantidad: number;
  fecha: string;
  motivo: string;
  responsable: string;
}

export interface DashboardKPIs {
  totalMaquinas: number;
  maquinasOperativas: number;
  maquinasAveriadas: number;
  totalOrdenesAbiertas: number;
  ordenesPendientes: number;
  ordenesEnProceso: number;
  totalEmpleados: number;
  empleadosActivos: number;
  insumosStockBajo: number;
  averiasUltimas24h: number;
}

// Tipos para sincronización offline
export interface RegistroSincronizacion {
  id: string;
  tipo: 'averia' | 'checklist' | 'horometro' | 'insumo';
  datos: any;
  fechaCreacion: string;
  sincronizado: boolean;
}
