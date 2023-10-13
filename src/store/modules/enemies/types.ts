export interface EnemyItem {
  name: string;
  description: string;
  phrases: string[];
  power: number;
  agility: number;
  intellect: number;
  charisma: number;
  vitality: number;
}

export interface EnemiesState {
  project: EnemyItem;
  backend: EnemyItem;
  designer: EnemyItem;
}

export type EnemiesKeys = keyof EnemiesState;
