import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Truck,
  Users,
  Wrench,
  AlertTriangle,
  Package,
  Clock,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { dashboardKPIs, datosGraficoMantenimientos, datosGraficoEstadoMaquinas } from '../data/mockData';

const Dashboard: React.FC = () => {
  const { maquinas, ordenesTrabajo, empleados, reportesAveria, insumos } = useApp();

  const kpis = [
    {
      titulo: 'Total Máquinas',
      valor: maquinas.length,
      icono: Truck,
      color: 'bg-blue-500',
      texto: `${maquinas.filter(m => m.estado === 'operativa').length} operativas`
    },
    {
      titulo: 'Órdenes Abiertas',
      valor: ordenesTrabajo.filter(o => o.estado !== 'completada' && o.estado !== 'cancelada').length,
      icono: Wrench,
      color: 'bg-amber-500',
      texto: `${ordenesTrabajo.filter(o => o.estado === 'pendiente').length} pendientes`
    },
    {
      titulo: 'Empleados Activos',
      valor: empleados.filter(e => e.activo).length,
      icono: Users,
      color: 'bg-green-500',
      texto: `de ${empleados.length} total`
    },
    {
      titulo: 'Averías Pendientes',
      valor: reportesAveria.filter(r => r.estado !== 'cerrada').length,
      icono: AlertTriangle,
      color: 'bg-red-500',
      texto: `${reportesAveria.filter(r => r.severidad === 'critica').length} críticas`
    },
    {
      titulo: 'Insumos Stock Bajo',
      valor: insumos.filter(i => i.stockActual < i.stockMinimo).length,
      icono: Package,
      color: 'bg-purple-500',
      texto: 'reposición needed'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Resumen general del sistema de mantenimiento</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{kpi.titulo}</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{kpi.valor}</p>
                <p className="text-xs text-gray-400 mt-1">{kpi.texto}</p>
              </div>
              <div className={`w-12 h-12 ${kpi.color} rounded-lg flex items-center justify-center`}>
                <kpi.icono className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Barras - Mantenimientos */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Mantenimientos por Mes
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={datosGraficoMantenimientos}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="preventivos" name="Preventivos" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="correctivos" name="Correctivos" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              <Bar dataKey="predictivos" name="Predictivos" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico Circular - Estado de Máquinas */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Estado de Máquinas
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={datosGraficoEstadoMaquinas}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
                labelLine={false}
              >
                {datosGraficoEstadoMaquinas.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabla de Órdenes Recientes */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Órdenes de Trabajo Recientes
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Código</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Máquina</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Tipo</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Prioridad</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Estado</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Técnico</th>
              </tr>
            </thead>
            <tbody>
              {ordenesTrabajo.slice(0, 5).map((ot) => (
                <tr key={ot.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-blue-600">{ot.codigo}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{ot.maquinaCodigo}</td>
                  <td className="py-3 px-4 text-sm text-gray-600 capitalize">{ot.tipo}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      ot.prioridad === 'urgente' ? 'bg-red-100 text-red-700' :
                      ot.prioridad === 'alta' ? 'bg-orange-100 text-orange-700' :
                      ot.prioridad === 'media' ? 'bg-amber-100 text-amber-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {ot.prioridad}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      ot.estado === 'completada' ? 'bg-green-100 text-green-700' :
                      ot.estado === 'en_proceso' ? 'bg-blue-100 text-blue-700' :
                      ot.estado === 'asignada' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {ot.estado.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{ot.tecnicoNombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
