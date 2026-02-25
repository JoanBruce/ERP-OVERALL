import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  Usuario,
  RolUsuario,
  Maquina,
  Empleado,
  ReporteAveria,
  OrdenTrabajo,
  Checklist,
  Insumo,
  MovimientoInsumo,
  RegistroSincronizacion
} from '../types';
import {
  maquinas as initialMaquinas,
  empleados as initialEmpleados,
  reportesAveria as initialReportesAveria,
  ordenesTrabajo as initialOrdenesTrabajo,
  checklists as initialChecklists,
  insumos as initialInsumos,
  movimientosInsumos as initialMovimientosInsumos
} from '../data/mockData';

interface AppContextType {
  // Usuario actual
  usuarioActual: Usuario;
  setUsuarioActual: (usuario: Usuario) => void;
  rolActual: RolUsuario;
  setRolActual: (rol: RolUsuario) => void;

  // Modo offline
  isOnline: boolean;
  setIsOnline: (online: boolean) => void;
  registrosSincronizacion: RegistroSincronizacion[];
  agregarRegistroSincronizacion: (registro: Omit<RegistroSincronizacion, 'id' | 'fechaCreacion' | 'sincronizado'>) => void;
  sincronizarDatos: () => void;

  // Datos del sistema
  maquinas: Maquina[];
  setMaquinas: (maquinas: Maquina[]) => void;
  empleados: Empleado[];
  setEmpleados: (empleados: Empleado[]) => void;
  reportesAveria: ReporteAveria[];
  setReportesAveria: (reportes: ReporteAveria[]) => void;
  ordenesTrabajo: OrdenTrabajo[];
  setOrdenessTrabajo: (ordenes: OrdenTrabajo[]) => void;
  checklists: Checklist[];
  setChecklists: (checklists: Checklist[]) => void;
  insumos: Insumo[];
  setInsumos: (insumos: Insumo[]) => void;
  movimientosInsumos: MovimientoInsumo[];
  setMovimientosInsumos: (movimientos: MovimientoInsumo[]) => void;

  // Notificaciones
  notificaciones: { id: string; mensaje: string; tipo: 'success' | 'error' | 'warning' | 'info' }[];
  agregarNotificacion: (mensaje: string, tipo: 'success' | 'error' | 'warning' | 'info') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Usuario simulado por defecto
const usuarioDefault: Usuario = {
  id: 'E008',
  nombre: 'Sofia',
  apellido: 'Ramírez',
  email: 'sofia.ramirez@overall.com',
  rol: 'administrador',
  sede: 'Planta Principal',
  activo: true
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado del usuario
  const [usuarioActual, setUsuarioActual] = useState<Usuario>(usuarioDefault);
  const [rolActual, setRolActual] = useState<RolUsuario>('administrador');

  // Estado de conexión
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [registrosSincronizacion, setRegistrosSincronizacion] = useState<RegistroSincronizacion[]>([]);

  // Estado de datos
  const [maquinas, setMaquinas] = useState<Maquina[]>(initialMaquinas);
  const [empleados, setEmpleados] = useState<Empleado[]>(initialEmpleados);
  const [reportesAveria, setReportesAveria] = useState<ReporteAveria[]>(initialReportesAveria);
  const [ordenesTrabajo, setOrdenessTrabajo] = useState<OrdenTrabajo[]>(initialOrdenesTrabajo);
  const [checklists, setChecklists] = useState<Checklist[]>(initialChecklists);
  const [insumos, setInsumos] = useState<Insumo[]>(initialInsumos);
  const [movimientosInsumos, setMovimientosInsumos] = useState<MovimientoInsumo[]>(initialMovimientosInsumos);

  // Notificaciones
  const [notificaciones, setNotificaciones] = useState<{ id: string; mensaje: string; tipo: 'success' | 'error' | 'warning' | 'info' }[]>([]);

  // Sincronizar con localStorage al cargar
  useEffect(() => {
    const savedMaquinas = localStorage.getItem('erp_maquinas');
    const savedEmpleados = localStorage.getItem('erp_empleados');
    const savedReportes = localStorage.getItem('erp_reportes');
    const savedOrdenes = localStorage.getItem('erp_ordenes');
    const savedChecklists = localStorage.getItem('erp_checklists');
    const savedInsumos = localStorage.getItem('erp_insumos');
    const savedMovimientos = localStorage.getItem('erp_movimientos');
    const savedRegistros = localStorage.getItem('erp_registros_sincronizacion');

    if (savedMaquinas) setMaquinas(JSON.parse(savedMaquinas));
    if (savedEmpleados) setEmpleados(JSON.parse(savedEmpleados));
    if (savedReportes) setReportesAveria(JSON.parse(savedReportes));
    if (savedOrdenes) setOrdenessTrabajo(JSON.parse(savedOrdenes));
    if (savedChecklists) setChecklists(JSON.parse(savedChecklists));
    if (savedInsumos) setInsumos(JSON.parse(savedInsumos));
    if (savedMovimientos) setMovimientosInsumos(JSON.parse(savedMovimientos));
    if (savedRegistros) setRegistrosSincronizacion(JSON.parse(savedRegistros));
  }, []);

  // Guardar en localStorage cuando cambian los datos
  useEffect(() => {
    localStorage.setItem('erp_maquinas', JSON.stringify(maquinas));
  }, [maquinas]);

  useEffect(() => {
    localStorage.setItem('erp_empleados', JSON.stringify(empleados));
  }, [empleados]);

  useEffect(() => {
    localStorage.setItem('erp_reportes', JSON.stringify(reportesAveria));
  }, [reportesAveria]);

  useEffect(() => {
    localStorage.setItem('erp_ordenes', JSON.stringify(ordenesTrabajo));
  }, [ordenesTrabajo]);

  useEffect(() => {
    localStorage.setItem('erp_checklists', JSON.stringify(checklists));
  }, [checklists]);

  useEffect(() => {
    localStorage.setItem('erp_insumos', JSON.stringify(insumos));
  }, [insumos]);

  useEffect(() => {
    localStorage.setItem('erp_movimientos', JSON.stringify(movimientosInsumos));
  }, [movimientosInsumos]);

  useEffect(() => {
    localStorage.setItem('erp_registros_sincronizacion', JSON.stringify(registrosSincronizacion));
  }, [registrosSincronizacion]);

  // Funciones del contexto
  const agregarRegistroSincronizacion = (registro: Omit<RegistroSincronizacion, 'id' | 'fechaCreacion' | 'sincronizado'>) => {
    const nuevoRegistro: RegistroSincronizacion = {
      ...registro,
      id: `SYNC-${Date.now()}`,
      fechaCreacion: new Date().toISOString(),
      sincronizado: false
    };
    setRegistrosSincronizacion(prev => [...prev, nuevoRegistro]);
  };

  const sincronizarDatos = () => {
    // Simular sincronización
    const pendientes = registrosSincronizacion.filter(r => !r.sincronizado);
    if (pendientes.length > 0) {
      setRegistrosSincronizacion(prev =>
        prev.map(r => ({ ...r, sincronizado: true }))
      );
      agregarNotificacion(`Se sincronizaron ${pendientes.length} registros`, 'success');
    }
    setIsOnline(true);
  };

  const agregarNotificacion = (mensaje: string, tipo: 'success' | 'error' | 'warning' | 'info') => {
    const id = `notif-${Date.now()}`;
    setNotificaciones(prev => [...prev, { id, mensaje, tipo }]);
    setTimeout(() => {
      setNotificaciones(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  return (
    <AppContext.Provider value={{
      usuarioActual,
      setUsuarioActual,
      rolActual,
      setRolActual,
      isOnline,
      setIsOnline,
      registrosSincronizacion,
      agregarRegistroSincronizacion,
      sincronizarDatos,
      maquinas,
      setMaquinas,
      empleados,
      setEmpleados,
      reportesAveria,
      setReportesAveria,
      ordenesTrabajo,
      setOrdenessTrabajo,
      checklists,
      setChecklists,
      insumos,
      setInsumos,
      movimientosInsumos,
      setMovimientosInsumos,
      notificaciones,
      agregarNotificacion
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
};
