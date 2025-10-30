
import React, { useMemo, useState } from 'react';
import type { CategoryKey, EjeKey, PlanTarea } from '../types';
import { PLAN_DATA, TABS } from '../constants';

interface TabSelectorProps {
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ activeCategory, onCategoryChange }) => (
  <div className="flex mb-8 border-b-2 border-gray-200">
    {TABS.map(({ key, label, icon }) => (
      <button
        key={key}
        onClick={() => onCategoryChange(key)}
        className={`py-2 px-4 font-bold border-b-4 transition-colors duration-300 ${
          activeCategory === key
            ? 'text-blue-600 border-blue-600'
            : 'text-gray-500 border-transparent hover:text-blue-500'
        }`}
      >
        {icon} {label}
      </button>
    ))}
  </div>
);

const TEXT_FORMATTER = (text: string) => {
    return text.split('**').map((part, index) =>
        index % 2 === 1 ? <strong key={index} className="font-bold">{part}</strong> : part
    );
};

interface PlanTaskProps {
  tarea: PlanTarea;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const PlanTask: React.FC<PlanTaskProps> = ({ tarea, isActive, onMouseEnter, onMouseLeave }) => (
  <div
    id={tarea.id}
    data-ejes={tarea.ejes.join(' ')}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`plan-tarea mb-8 p-5 bg-white rounded-lg shadow-sm border-2 transition-all duration-300 cursor-pointer ${isActive ? 'bg-yellow-100 border-yellow-400' : 'border-transparent'}`}
  >
    <strong className="block text-lg mb-2 text-blue-600">{tarea.name}</strong>
    <p className="text-base leading-relaxed text-gray-700">
      {TEXT_FORMATTER(tarea.copy)}
    </p>
    <div className="mt-4 pt-4 border-t border-dashed border-gray-200 text-sm italic text-gray-500">
      Conecta con los ejes: {tarea.siglas}
    </div>
  </div>
);

interface PlanColumnProps {
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
  onHoverEjesChange: (ejes: EjeKey[]) => void;
}

export const PlanColumn: React.FC<PlanColumnProps> = ({ activeCategory, onCategoryChange, onHoverEjesChange }) => {
  const [hoveredTaskId, setHoveredTaskId] = useState<string | null>(null);

  const plan = useMemo(() => PLAN_DATA[activeCategory], [activeCategory]);
  
  const handleCategoryChange = (category: CategoryKey) => {
    onCategoryChange(category);
    onHoverEjesChange([]);
    setHoveredTaskId(null);
  };

  return (
    <main className="lg:ml-[380px] flex-grow p-6 lg:p-10">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">El CÓMO: Plan de Ejecución y Trazabilidad</h1>
      
      <TabSelector activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{plan.title} (El CÓMO y el CUÁNDO)</h2>
        {plan.sections.map((section, idx) => (
          <div key={idx} className="plan-seccion">
            <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 pl-3 border-l-4 border-blue-600">
              {section.title}
            </h3>
            {section.tareas.map(tarea => (
              <PlanTask 
                key={tarea.id} 
                tarea={tarea} 
                isActive={hoveredTaskId === tarea.id}
                onMouseEnter={() => {
                  onHoverEjesChange(tarea.ejes);
                  setHoveredTaskId(tarea.id);
                }}
                onMouseLeave={() => {
                  onHoverEjesChange([]);
                  setHoveredTaskId(null);
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <footer className="pt-12 text-center border-t border-gray-300 mt-12">
          <h2 className="text-2xl font-bold mb-2">La Trazabilidad del Valor</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            El <strong>Framework</strong> es el QUÉ y el POR QUÉ. El <strong>Plan de Trabajo</strong> es el CÓMO. Cada tarea se justifica al construir un Eje Estratégico.
          </p>
          <p className="mt-4 text-sm text-gray-500">&copy; 2025 Astra Mx Consulting. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
};
