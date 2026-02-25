import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AlertTriangle, Plus, Search, Filter } from 'lucide-react';

const Averias: React.FC = () => {
  const { reportesAveria } = useApp();
  const [busqueda, setBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('todos');

  const averiasFiltradas = reportesAveria.filter(a => {
    const matchBusqueda = a.maquinaCodigo.toLowerCase().includes(busqueda.toLowerCase()) ||
      a.tipoFalla.toLowerCase().includes(busqueda.toLowerCase());
    const matchEstado = filtroEstado === 'todos' || a.estado === filtroEstado;
    return matchBusqueda && matchEstado;
  });

  const estados = ['todos', 'pendiente', 'en_revision', 'atendida', 'cerrada'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reportes de Avería</h1>
          <p className="text-gray-500">Gestión de incidencias y mantenimientos correctivos</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
          <Plus className="w-5 h-5" />
          Reportar Avería
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por código de máquina o falla..."
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {averiasFiltradas.map(averia => (
          <div key={averia.id} className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full uppercase
                    ${averia.severidad === 'critica' ? 'bg-red-100 text-red-700' :
                    averia.severidad === 'alta' ? 'bg-orange-100 text-orange-700' :
                      averia.severidad === 'media' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'}`}>
                  {averia.severidad}
                </span>
                <span className={`inline-block ml-2 px-2 py-1 text-xs font-medium rounded-full capitalize mt-1
                    ${averia.estado === 'cerrada' ? 'bg-gray-100 text-gray-600' :
                    averia.estado === 'atendida' ? 'bg-green-100 text-green-700' :
                      averia.estado === 'en_revision' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'}`}>
                  {averia.estado.replace('_', ' ')}
                </span>
              </div>
              <p className="text-xs text-gray-400">{averia.fechaReporte} {averia.horaReporte}</p>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{averia.maquinaCodigo}</h3>
            <p className="text-sm font-medium text-gray-700 mb-2">{averia.tipoFalla}</p>
            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{averia.descripcion}</p>
            <div className="text-xs text-gray-400 flex justify-between border-t border-gray-100 pt-3">
              <span>Reportado por:</span>
              <span className="font-medium text-gray-600">{averia.reportadoPor}</span>
            </div>
          </div>
        ))}
      </div>

      {averiasFiltradas.length === 0 && (
        <div className="text-center py-12">
          <AlertTriangle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No se encontraron reportes de avería</p>
        </div>
      )}
    </div>
  );
};

export default Averias;
