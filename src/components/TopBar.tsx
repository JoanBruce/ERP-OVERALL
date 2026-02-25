import React from 'react';
import { Menu, Wifi, WifiOff, Bell, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface TopBarProps {
  onMenuClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
  const { usuarioActual, isOnline, registrosSincronizacion, setIsOnline } = useApp();

  const pendientes = registrosSincronizacion.filter(r => !r.sincronizado).length;

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
        <h2 className="text-xl font-semibold text-gray-800">
          Sistema de Gestión de Mantenimiento
        </h2>
      </div>

      <div className="flex items-center gap-4">
        {/* Indicador de conexión */}
        <button
          onClick={() => setIsOnline(!isOnline)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
            isOnline
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {isOnline ? (
            <>
              <Wifi className="w-4 h-4" />
              <span className="hidden sm:inline">En línea</span>
            </>
          ) : (
            <>
              <WifiOff className="w-4 h-4" />
              <span className="hidden sm:inline">Sin conexión</span>
            </>
          )}
        </button>

        {/* Pendientes de sincronización */}
        {pendientes > 0 && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
            <span>{pendientes} pendientes</span>
          </div>
        )}

        {/* Notificaciones */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Usuario */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-800">
              {usuarioActual.nombre} {usuarioActual.apellido}
            </p>
            <p className="text-xs text-gray-500 capitalize">{usuarioActual.rol}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
