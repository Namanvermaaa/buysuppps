export interface SupplementComponent {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  categoryLabel: string;
  role: string;
  mechanism: string;
  trainingBenefit: string;
  keyCompounds: string[];
  scientificValidation: string;
  purityGrade: string;
  featured?: boolean;
}

export type CategoryFilter =
  | 'all'
  | 'protein'
  | 'strength'
  | 'pre-workout'
  | 'recovery'
  | 'hydration'
  | 'health';
