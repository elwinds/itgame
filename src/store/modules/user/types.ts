export interface ParametersUserState {
  power: number;
  agility: number;
  intellect: number;
  charisma: number;
}

export type ParametersUserStateKeys = keyof ParametersUserState;

export interface DependParametrsUserState {
  vitality: number;
  evasion: number;
  energy: number;
}

export type DependParametrsUserStateKeys = keyof DependParametrsUserState;

export interface SkillItem {
  base_param: string;
  value: number;
}

export interface SkillsState {
  attack: SkillItem;
  stels: SkillItem;
  archery: SkillItem;
  learning: SkillItem;
  survival: SkillItem;
  medicine: SkillItem;
  intimidation: SkillItem;
  insight: SkillItem;
  appearance: SkillItem;
  manipulation: SkillItem;
}

export type SkillsKeys = keyof SkillsState;

export interface UserState {
  name: string;
  parametrs: Record<ParametersUserStateKeys, number>;
  depend_parametrs: DependParametrsUserState;
  skills: Record<SkillsKeys, SkillItem>;
  phrases: string[];
}

// export interface UserState {
//   user: UserItemState;
// }
