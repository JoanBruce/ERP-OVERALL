import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ClipboardCheck, Search, Plus } from 'lucide-react';

const Checklists: React.FC = () => {
  const { checklists } = useApp();
  const [busqueda, setBusqueda] = useState('');

  const checklistsFiltradas = checklists.filter(c =>
    c.codigo.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.maquinaCodigo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Checklists de Inspección</h1>
          <p className="text-gray-500">Registros de inspección y validaciones</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Plus className="w-5 h-5" />
          Nuevo Checklist
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Buscar por código o máquina..." value={busqueda} onChange={e => setBusqueda(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Código</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Máquina</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Fecha</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Tipo</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Conformidad</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Realizado Por</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {checklistsFiltradas.map((chk) => (
                <tr key={chk.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-blue-600">{chk.codigo}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{chk.maquinaCodigo}</td>
                  <td className="py-3 px-4 text-sm text-gray-500">{chk.fecha}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{chk.tipo}</td>
                  <td className="py-3 px-4">
                    {chk.conformidad ?
                      <span className="text-green-600 text-xs font-semibold bg-green-50 px-2 py-1 rounded">Conforme</span> :
                      <span className="text-red-600 text-xs font-semibold bg-red-50 px-2 py-1 rounded">No Conforme</span>
                    }
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{chk.realizadoPor}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize
                      ${chk.estado === 'completado' ? 'bg-green-100 text-green-700' :
                        chk.estado === 'en_proceso' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'}`}>
                      {chk.estado.replace('_', ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {checklistsFiltradas.length === 0 && (
            <div className="text-center py-12">
              <ClipboardCheck className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No se encontraron checklists</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Checklists;
