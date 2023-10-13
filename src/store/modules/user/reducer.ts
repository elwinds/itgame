import { UserState } from "./types";
import { Constants } from "./constants";
import { RootAction } from "./actions";

const defaultState: UserState = {
  name: "Джон Фронтендович",
  parametrs: { power: 0, agility: 0, intellect: 0, charisma: 0 },
  depend_parametrs: { vitality: 0, evasion: 0, energy: 0 },
  skills: {
    attack: { base_param: "power", value: 0 },
    stels: { base_param: "agility", value: 0 },
    archery: { base_param: "agility", value: 0 },
    learning: { base_param: "intellect", value: 0 },
    survival: { base_param: "intellect", value: 0 },
    medicine: { base_param: "intellect", value: 0 },
    intimidation: { base_param: "charisma", value: 0 },
    insight: { base_param: "charisma", value: 0 },
    appearance: { base_param: "charisma", value: 0 },
    manipulation: { base_param: "charisma", value: 0 },
  },
  phrases: [
    "Призываю боевого техдира",
    "У меня локально все работает ",
    "Это не баг, а фича",
    "Запушил на прод без багов",
    "Перенёс дедлайн в зону комфорта",
    "Наверстал <h1>Упущенное<h1/>",
  ],
};

const userReducer = (state = defaultState, action: RootAction): UserState => {
  switch (action.type) {
    case Constants.INIT_USER: {
      return {
        ...state,
        depend_parametrs: {
          vitality: Number(state.parametrs.power) + 3,
          evasion: Number(state.parametrs.agility) + 10,
          energy:
            Number(state.parametrs.agility) + Number(state.parametrs.intellect),
        },
      };
    }
    case Constants.CHANGE_NAME: {
      return { ...state, name: action.payload };
    }
    case Constants.CHANGE_PARAMETRS: {
      return {
        ...state,
        parametrs: action.payload,
      };
    }

    case Constants.UP_SKILLS:
      return {
        ...state,
        skills: {
          ...state.skills,
          [action.payload.name]: {
            ...state.skills[action.payload.name],
            value: action.payload.value,
          },
        },
      };

    case Constants.TAKE_DAMAGE_USER:
      return {
        ...state,
        depend_parametrs: {
          ...state.depend_parametrs,
          vitality: action.payload,
        },
      };

    case Constants.UPLOAD_CHARACTER:
      return {
        ...state,
        ...action.payload,
      };

    default: {
      return state;
    }
  }
};

export default userReducer;
