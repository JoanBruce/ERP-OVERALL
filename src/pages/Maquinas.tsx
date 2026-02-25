import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Truck, Plus, Search, Filter, MoreVertical } from 'lucide-react';

const Maquinas: React.FC = () => {
  const { maquinas } = useApp();
  const [busqueda, setBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState<string>('todos');

  const estados = ['todos', 'operativa', 'en_mantenimiento', 'averiada', 'inactiva'];

  const maquinasFiltradas = maquinas.filter(m => {
    const coincideBusqueda = m.codigo.toLowerCase().includes(busqueda.toLowerCase()) ||
      m.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideEstado = filtroEstado === 'todos' || m.estado === filtroEstado;
    return coincideBusqueda && coincideEstado;
  });

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'operativa': return 'bg-green-100 text-green-700';
      case 'en_mantenimiento': return 'bg-amber-100 text-amber-700';
      case 'averiada': return 'bg-red-100 text-red-700';
      case 'inactiva': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Máquinas y Equipos</h1>
          <p className="text-gray-500">Gestión de activos y equipos industriales</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Plus className="w-5 h-5" />
          Nueva Máquina
        </button>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por código o nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {estados.map(estado => (
                <option key={estado} value={estado}>
                  {estado === 'todos' ? 'Todos los estados' : estado.replace('_', ' ')}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Tarjetas de Máquinas (Vista Móvil) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {maquinasFiltradas.map((maquina) => (
          <div
            key={maquina.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getEstadoColor(maquina.estado)}`}>
                {maquina.estado.replace('_', ' ')}
              </span>
            </div>

            <h3 className="font-semibold text-gray-800 mb-1">{maquina.codigo}</h3>
            <p className="text-sm text-gray-500 mb-3">{maquina.nombre}</p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Marca/Modelo</span>
                <span className="text-gray-800">{maquina.marca} {maquina.modelo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Serie</span>
                <span className="text-gray-800">{maquina.serie}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Horómetro</span>
                <span className={`font-medium ${maquina.horometroActual >= maquina.horometroProximoMantenimiento ? 'text-red-600' : 'text-gray-800'}`}>
                  {maquina.horometroActual} / {maquina.horometroProximoMantenimiento} hrs
                </span>
              </div>
              {maquina.horometroActual >= maquina.horometroProximoMantenimiento && (
                <div className="mt-2 p-2 bg-red-50 text-red-700 text-xs rounded-lg">
                  ⚠️ Mantenimiento requerido
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {maquinasFiltradas.length === 0 && (
        <div className="text-center py-12">
          <Truck className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No se encontraron máquinas</p>
        </div>
      )}
    </div>
  );
};

export default Maquinas;
