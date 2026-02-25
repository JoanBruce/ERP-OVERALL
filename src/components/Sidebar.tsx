import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Truck,
  Users,
  ClipboardCheck,
  Wrench,
  AlertTriangle,
  FileText,
  Package,
  Clock,
  Settings,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/maquinas', icon: Truck, label: 'Máquinas' },
  { path: '/empleados', icon: Users, label: 'Empleados' },
  { path: '/horarios', icon: Clock, label: 'Horarios' },
  { path: '/averias', icon: AlertTriangle, label: 'Averías' },
  { path: '/ordenes', icon: FileText, label: 'Órdenes de Trabajo' },
  { path: '/checklists', icon: ClipboardCheck, label: 'Checklists' },
  { path: '/insumos', icon: Package, label: 'Insumos' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-slate-900 text-white
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">OVERALL</h1>
              <p className="text-xs text-slate-400">ERP Mantenimiento</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-slate-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <NavLink
            to="/configuracion"
            onClick={onClose}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
              ${isActive
                ? 'bg-blue-500 text-white'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }
            `}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Configuración</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
