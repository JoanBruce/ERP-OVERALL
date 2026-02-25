import React from 'react';
import { turnos } from '../data/mockData';
import { Clock, Plus } from 'lucide-react';

const Horarios: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Horarios y Turnos</h1>
          <p className="text-gray-500">Gestión de turnos de trabajo para empleados</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Plus className="w-5 h-5" />
          Asignar Horario
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {turnos.map((turno) => (
          <div key={turno.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-4">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{turno.duracion} Hrs</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800">{turno.nombre}</h3>
            <p className="text-gray-600 text-sm mt-1">{turno.horaInicio} - {turno.horaFin}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Asignaciones Recientes</h3>
        <div className="text-center py-10">
          <p className="text-gray-500">Aún no hay asignaciones de horario registradas.</p>
        </div>
      </div>
    </div>
  );
}

export default Horarios;
