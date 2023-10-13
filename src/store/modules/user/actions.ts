import { ParametersUserState, UserState, SkillsState } from "./types";
import { Constants } from "./constants";

type UserActions = {
  initUser: {
    type: Constants.INIT_USER;
  };
  changeName: {
    type: Constants.CHANGE_NAME;
    payload: string;
  };
  changeParameters: {
    type: Constants.CHANGE_PARAMETRS;
    payload: ParametersUserState;
  };
  upSkills: {
    type: Constants.UP_SKILLS;
    payload: { name: keyof SkillsState; value: any };
  };
  takeDamageUser: {
    type: Constants.TAKE_DAMAGE_USER;
    payload: number;
  };
  uploadCharacter: {
    type: Constants.UPLOAD_CHARACTER;
    payload: UserState;
  };
};

type RootAction = UserActions[keyof UserActions];

const actions = {
  initUser: (): UserActions["initUser"] => ({
    type: Constants.INIT_USER,
  }),
  changeName: (payload: string): UserActions["changeName"] => ({
    type: Constants.CHANGE_NAME,
    payload,
  }),
  changeParameters: (
    payload: ParametersUserState
  ): UserActions["changeParameters"] => ({
    type: Constants.CHANGE_PARAMETRS,
    payload,
  }),
  upSkills: (payload: {
    name: keyof SkillsState;
    value: any;
  }): UserActions["upSkills"] => ({
    type: Constants.UP_SKILLS,
    payload,
  }),
  takeDamageUser: (payload: number): UserActions["takeDamageUser"] => ({
    type: Constants.TAKE_DAMAGE_USER,
    payload,
  }),
  uploadCharacter: (payload: UserState): UserActions["uploadCharacter"] => ({
    type: Constants.UPLOAD_CHARACTER,
    payload,
  }),
};

export { actions as userActions };

export type { RootAction, UserActions };

