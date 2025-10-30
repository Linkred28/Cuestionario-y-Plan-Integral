
import React from 'react';
import type { EjeKey, FrameworkEje } from '../types';
import { FRAMEWORK_EJES } from '../constants';

interface FrameworkItemProps {
  eje: FrameworkEje;
  isActive: boolean;
}

const FrameworkItem: React.FC<FrameworkItemProps> = ({ eje, isActive }) => {
  const baseClasses = 'mb-4 p-4 rounded-lg border transition-all duration-300 cursor-default';
  const inactiveClasses = 'bg-white border-gray-200';
  const activeClasses = 'bg-yellow-400 border-yellow-400 text-gray-800 shadow-lg shadow-yellow-400/30';

  return (
    <div data-eje={eje.key} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      <div className="flex items-start space-x-3">
        <i className={`${eje.icon} mt-1 ${isActive ? 'text-gray-800' : 'text-blue-600'}`}></i>
        <div>
          <strong className={`block text-base mb-1 ${isActive ? 'text-gray-800' : 'text-blue-600'}`}>
            {eje.title}
            <span className={`inline-block font-bold text-white px-2 py-0.5 rounded-md text-xs ml-2 ${isActive ? 'bg-gray-800' : 'bg-blue-600'}`}>
              {eje.initial}
            </span>
          </strong>
          <small className="text-sm">{eje.description}</small>
        </div>
      </div>
    </div>
  );
};

interface FrameworkColumnProps {
  activeEjes: EjeKey[];
}

export const FrameworkColumn: React.FC<FrameworkColumnProps> = ({ activeEjes }) => {
  return (
    <aside className="lg:w-[380px] lg:fixed lg:top-0 lg:left-0 lg:h-screen bg-white p-6 lg:p-10 shadow-lg lg:overflow-y-auto w-full">
      <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-2 text-center lg:text-left">
        Framework: Los 6 Ejes Estratégicos (El QUÉ)
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Nuestro <strong>ADN</strong> de consultoría. El Plan de Trabajo está diseñado para <strong>construir</strong> o <strong>diagnosticar</strong> estos 6 pilares.
      </p>
      
      <div>
        {FRAMEWORK_EJES.map((eje) => (
          <FrameworkItem key={eje.key} eje={eje} isActive={activeEjes.includes(eje.key)} />
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 border-gray-200 border rounded-lg text-sm">
        <strong>Instrucción:</strong> Mueve el ratón sobre las tareas de la derecha para ver qué ejes se construyen.
      </div>
    </aside>
  );
};
