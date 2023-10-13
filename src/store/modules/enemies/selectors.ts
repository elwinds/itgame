import { RootState } from "../../rootReducer";
import { EnemiesKeys } from "./types";

const enemeisStateSelector = (state: RootState) => state.enemies;

const enemyByNameSelector = (state: RootState, name: EnemiesKeys) =>
  enemeisStateSelector(state)[name];

export { enemeisStateSelector, enemyByNameSelector };
