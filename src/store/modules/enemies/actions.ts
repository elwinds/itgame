import { Constants } from "./constants";
import { EnemiesKeys } from "./types";

type EnemiesActions = {
  takeDamageEnemy: {
    type: Constants.TAKE_DAMAGE_ENEMY;
    payload: {
      enemy: EnemiesKeys;
      vitality: number;
    };
  };
};

type RootAction = EnemiesActions[keyof EnemiesActions];

const actions = {
  takeDamageEnemy: (payload: {
    enemy: EnemiesKeys;
    vitality: number;
  }): EnemiesActions["takeDamageEnemy"] => ({
    type: Constants.TAKE_DAMAGE_ENEMY,
    payload,
  }),
};

export { actions as enemiesActions };

export type { RootAction, EnemiesActions };
