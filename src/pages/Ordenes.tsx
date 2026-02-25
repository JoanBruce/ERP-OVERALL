import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FileText, Plus, Search, Filter, Calendar } from 'lucide-react';

const Ordenes: React.FC = () => {
  const { ordenesTrabajo } = useApp();
  const [busqueda, setBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('todos');

  const ordenesFiltradas = ordenesTrabajo.filter(ot => {
    const match = ot.codigo.toLowerCase().includes(busqueda.toLowerCase()) ||
      ot.maquinaCodigo.toLowerCase().includes(busqueda.toLowerCase());
    const matchEstado = filtroEstado === 'todos' || ot.estado === filtroEstado;
    return match && matchEstado;
  });

  const estados = ['todos', 'pendiente', 'asignada', 'en_proceso', 'completada', 'cancelada'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Órdenes de Trabajo</h1>
          <p className="text-gray-500">Gestión de OT preventivas y correctivas</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Plus className="w-5 h-5" />
          Nueva OT
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Buscar por código de OT o máquina..." value={busqueda} onChange={e => setBusqueda(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select value={filtroEstado} onChange={e => setFiltroEstado(e.target.value)} className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            {estados.map(e => <option key={e} value={e}>{e === 'todos' ? 'Todos' : e.replace('_', ' ')}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {ordenesFiltradas.map(ot => (
          <div key={ot.id} className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-blue-600">{ot.codigo}</h3>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full capitalize
                ${ot.estado === 'completada' ? 'bg-green-100 text-green-700' :
                  ot.estado === 'en_proceso' ? 'bg-blue-100 text-blue-700' :
                    ot.estado === 'asignada' ? 'bg-purple-100 text-purple-700' :
                      ot.estado === 'cancelada' ? 'bg-red-100 text-red-700' :
                        'bg-gray-100 text-gray-700'}`}>
                {ot.estado.replace('_', ' ')}
              </span>
            </div>
            <p className="text-gray-800 font-medium mb-1">Máquina: {ot.maquinaCodigo}</p>
            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded capitalize">{ot.tipo}</span>
              <span className={`text-xs px-2 py-1 rounded font-medium capitalize
                ${ot.prioridad === 'urgente' ? 'text-red-700 bg-red-50' :
                  ot.prioridad === 'alta' ? 'text-orange-700 bg-orange-50' :
                    ot.prioridad === 'media' ? 'text-yellow-700 bg-yellow-50' :
                      'text-green-700 bg-green-50'}`}>
                {ot.prioridad}
              </span>
            </div>
            <div className="text-sm text-gray-600 space-y-1 mb-4">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Creada: {ot.fechaCreacion}</div>
              <div className="flex items-center gap-2"><span className="w-4 h-4 uppercase font-bold text-center text-[10px] leading-4 bg-gray-200 rounded">T</span> Tec: {ot.tecnicoNombre}</div>
            </div>
            <div className="text-xs text-gray-500 border-t border-gray-100 pt-3 flex justify-between">
              <span>Progreso:</span>
              <span className="font-medium text-gray-700">{ot.actividades.filter(a => a.completada).length} / {ot.actividades.length} completadas</span>
            </div>
          </div>
        ))}
      </div>
      {ordenesFiltradas.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No se encontraron órdenes</p>
        </div>
      )}
    </div>
  );
}
export default Ordenes;
