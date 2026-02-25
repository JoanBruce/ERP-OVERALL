import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Users, Search, Plus, Mail, Phone, BadgeCheck, XCircle } from 'lucide-react';

const Empleados: React.FC = () => {
  const { empleados } = useApp();
  const [busqueda, setBusqueda] = useState('');

  const empleadosFiltrados = empleados.filter(e =>
    e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    e.apellido.toLowerCase().includes(busqueda.toLowerCase()) ||
    e.codigo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Empleados</h1>
          <p className="text-gray-500">Gestión de personal y roles</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Plus className="w-5 h-5" />
          Nuevo Empleado
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por código, nombre o apellido..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {empleadosFiltrados.map((empleado) => (
          <div key={empleado.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow relative">
            <div className="absolute top-4 right-4">
              {empleado.activo ? (
                <span className="flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full"><BadgeCheck className="w-3 h-3" /> Activo</span>
              ) : (
                <span className="flex items-center gap-1 text-xs font-medium text-red-700 bg-red-100 px-2 py-1 rounded-full"><XCircle className="w-3 h-3" /> Inactivo</span>
              )}
            </div>
            <div className="flex items-center gap-4 mb-4 mt-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-bold text-lg">
                  {empleado.nombre.charAt(0)}{empleado.apellido.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{empleado.nombre} {empleado.apellido}</h3>
                <p className="text-xs text-gray-500">{empleado.codigo}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700 font-medium">{empleado.cargo}</p>
              <p className="text-gray-500 capitalize">Rol: {empleado.rol}</p>
              <p className="text-gray-500 text-xs">Sede: {empleado.sede}</p>
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-xs truncate">{empleado.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-xs">{empleado.telefono}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {empleadosFiltrados.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No se encontraron empleados</p>
        </div>
      )}
    </div>
  );
};

export default Empleados;
