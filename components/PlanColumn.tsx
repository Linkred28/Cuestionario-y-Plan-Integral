
import React, { useMemo, useState } from 'react';
import type { CategoryKey, EjeKey, PlanTarea } from '../types';
import { PLAN_DATA, TABS } from '../constants';

interface TabSelectorProps {
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ activeCategory, onCategoryChange }) => (
  <div className="flex mb-8 border-b-2 border-slate-700">
    {TABS.map(({ key, label, icon }) => (
      <button
        key={key}
        onClick={() => onCategoryChange(key)}
        className={`py-3 px-5 font-bold border-b-4 transition-all duration-300 ease-in-out rounded-t-lg -mb-[2px] ${
          activeCategory === key
            ? 'text-white border-sky-500 bg-slate-800'
            : 'text-slate-300 border-transparent hover:text-white hover:bg-slate-800/60'
        }`}
      >
        {icon} {label}
      </button>
    ))}
  </div>
);

const TEXT_FORMATTER = (text: string) => {
    return text.split('**').map((part, index) =>
        index % 2 === 1 ? <strong key={index} className="font-bold text-slate-100">{part}</strong> : part
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
    className={`plan-tarea mb-8 p-5 bg-slate-800 rounded-lg shadow-lg border transition-all duration-300 ease-in-out cursor-pointer hover:shadow-sky-500/20 hover:border-sky-500 hover:-translate-y-1 ${isActive ? 'bg-yellow-400/10 border-yellow-400 -translate-y-1 shadow-xl shadow-yellow-400/10' : 'border-slate-700'}`}
  >
    <strong className="block text-lg mb-2 text-slate-200">{tarea.name}</strong>
    <p className="text-base leading-relaxed text-slate-300">
      {TEXT_FORMATTER(tarea.copy)}
    </p>
    <div className="mt-4 pt-4 border-t border-dashed border-slate-600 text-sm italic text-slate-400">
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
    <main className="lg:ml-[420px] flex-grow p-6 lg:p-10">
      <h1 className="text-4xl font-extrabold text-slate-100 mb-6">El CÓMO: Plan de Ejecución y Trazabilidad</h1>
      
      <TabSelector activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      <div>
        <h2 className="text-3xl font-bold text-slate-100 mb-6">{plan.title} (El CÓMO y el CUÁNDO)</h2>
        {plan.sections.map((section, idx) => (
          <div key={idx} className="plan-seccion">
            <h3 className="text-2xl font-semibold text-slate-200 mt-10 mb-4 pl-3 border-l-4 border-sky-500">
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

      <footer className="pt-12 text-center border-t border-slate-700 mt-12">
          <h2 className="text-2xl font-bold mb-2 text-slate-100">La Trazabilidad del Valor</h2>
          <p className="max-w-2xl mx-auto text-slate-300">
            El <strong>Framework</strong> es el QUÉ y el POR QUÉ. El <strong>Plan de Trabajo</strong> es el CÓMO. Cada tarea se justifica al construir un Eje Estratégico.
          </p>
          <p className="mt-4 text-sm text-slate-400">&copy; 2025 Metodiko Consultoría + Transformación Digital. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
};