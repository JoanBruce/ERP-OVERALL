import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Package, Search, Plus, AlertTriangle } from 'lucide-react';

const Insumos: React.FC = () => {
    const { insumos } = useApp();
    const [busqueda, setBusqueda] = useState('');

    const insumosFiltrados = insumos.filter(i =>
        i.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        i.codigo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Control de Insumos</h1>
                    <p className="text-gray-500">Gestión de inventario y repuestos</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <Plus className="w-5 h-5" />
                    Nuevo Insumo
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar por código o nombre..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Código</th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Nombre</th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Categoría</th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Stock Actual</th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Stock Mínimo</th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Ubicación</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {insumosFiltrados.map((insumo) => (
                                <tr key={insumo.id} className="hover:bg-gray-50">
                                    <td className="py-3 px-4 text-sm font-medium text-blue-600">{insumo.codigo}</td>
                                    <td className="py-3 px-4 text-sm text-gray-800">{insumo.nombre}</td>
                                    <td className="py-3 px-4 text-sm text-gray-600">{insumo.categoria}</td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-2">
                                            <span className={`text-sm font-medium ${insumo.stockActual <= insumo.stockMinimo ? 'text-red-600' : 'text-gray-800'}`}>
                                                {insumo.stockActual} {insumo.unidad}
                                            </span>
                                            {insumo.stockActual <= insumo.stockMinimo && (
                                                <AlertTriangle className="w-4 h-4 text-red-500" />
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-600">{insumo.stockMinimo} {insumo.unidad}</td>
                                    <td className="py-3 px-4 text-sm text-gray-600">{insumo.ubicacion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {insumosFiltrados.length === 0 && (
                        <div className="text-center py-12">
                            <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500">No se encontraron insumos</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Insumos;
