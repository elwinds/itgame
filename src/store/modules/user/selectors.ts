import { RootState } from "../../rootReducer";
import { SkillsKeys, ParametersUserStateKeys } from "./types";

const userStateSelector = (state: RootState) => state.user;

const userParametersSelector = (state: RootState) =>
  userStateSelector(state).parametrs;

const userParameterByNameSelector = (
  state: RootState,
  parameter: ParametersUserStateKeys
) => userParametersSelector(state)[parameter];

const userSkillsSelector = (state: RootState) =>
  userStateSelector(state).skills;

const userSkillByNameSelector = (state: RootState, skillName: SkillsKeys) =>
  userSkillsSelector(state)[skillName];

const userDependParametersSelector = (state: RootState) =>
  userStateSelector(state).depend_parametrs;

export {
  userStateSelector,
  userParametersSelector,
  userDependParametersSelector,
  userSkillByNameSelector,
  userSkillsSelector,
  userParameterByNameSelector,
};
