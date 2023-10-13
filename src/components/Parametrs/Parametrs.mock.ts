import {
  ParametersUserStateKeys,
  DependParametrsUserStateKeys,
} from "../../store/modules/user/types";

type ParametersMock = {
  title: string;
  text: string;
  name: ParametersUserStateKeys;
};

type DependParametersMock = {
  title: string;
  text: string;
  name: DependParametrsUserStateKeys;
};

export const PARAMETRS_MOCK: ParametersMock[] = [
  {
    title: "Сила: ",
    name: "power",
    text: "Развивает способность понимать код десятилетней давности.",
  },
  {
    title: "Ловкость: ",
    name: "agility",
    text: "Благодаря ей быстро поднятый прод не считается упавшим.",
  },
  {
    title: "Интеллект: ",
    name: "intellect",
    text: "Позволяет надеяться когда-нибудь запустить код с первого раза.",
  },
  {
    title: "Харизма: ",
    name: "charisma",
    text: "Способность объяснить свой код почти так же хорошо, как индусы на ютубе.",
  },
];

export const DEPEND_PARAMETRS_MOCK: DependParametersMock[] = [
  {
    title: "Жизненная сила: ",
    name: "vitality",
    text: "Определяется уровнем кофеина в крови.",
  },
  {
    title: "Уклонение:  ",
    name: "evasion",
    text: "Помогает отвечать на вопросы в конце созвона, который ты вообще не слушал.",
  },
  {
    title: "Энергичность: ",
    name: "energy",
    text: "Скорость ctrl+c, ctrl+v в минуту со стаковерфлоу.",
  },
];
