import React from 'react';
import { Clock, Wrench } from 'lucide-react';

interface ComingSoonProps {
  titulo: string;
  descripcion?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ titulo, descripcion }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <Wrench className="w-10 h-10 text-blue-500" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{titulo}</h1>
      <p className="text-gray-500 max-w-md mb-6">
        {descripcion || 'Este módulo está en desarrollo. Próximamente estará disponible.'}
      </p>
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Clock className="w-4 h-4" />
        <span>Próximamente</span>
      </div>
    </div>
  );
};

export default ComingSoon;
