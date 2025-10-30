
export type EjeKey = 'nucleo' | 'friccion' | 'mapa' | 'gobernanza' | 'angulo' | 'transformacion';

export interface FrameworkEje {
  key: EjeKey;
  icon: string;
  title: string;
  description: string;
  initial: string; // Added for the [N], [F] initials
}

export interface PlanTarea {
  id: string;
  name: string;
  ejes: EjeKey[];
  copy: string;
  siglas: string; // Added for the connection text, e.g., '[F] [N]'
}

export interface PlanSection {
  title: string;
  tareas: PlanTarea[];
}

export interface PlanCategoria {
  title:string;
  sections: PlanSection[];
}

export type PlanData = {
  [key: string]: PlanCategoria;
};

export type CategoryKey = 'cx' | 'cm' | 'mantenimiento';