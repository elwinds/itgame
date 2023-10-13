import { combineReducers } from "redux";
import enemiesReducer from "./modules/enemies/reducer";
import userReducer from "./modules/user/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  enemies: enemiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
