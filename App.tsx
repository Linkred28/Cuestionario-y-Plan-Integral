
import React, { useState, useCallback } from 'react';
import { FrameworkColumn } from './components/FrameworkColumn';
import { PlanColumn } from './components/PlanColumn';
import type { EjeKey, CategoryKey } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('cx');
  const [hoveredEjes, setHoveredEjes] = useState<EjeKey[]>([]);

  const handleHoverEjesChange = useCallback((ejes: EjeKey[]) => {
    setHoveredEjes(ejes);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <div className="min-h-screen lg:flex">
        <FrameworkColumn activeEjes={hoveredEjes} />
        <PlanColumn
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onHoverEjesChange={handleHoverEjesChange}
        />
      </div>
    </div>
  );
}

export default App;
