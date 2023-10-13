import { Constants } from "./constants";
import { EnemiesState } from "./types";
import { RootAction } from "./actions";

const defaultStateEnemies: EnemiesState = {
  project: {
    name: "Project менеджер",
    description:
      "Айти-герой, ведущий отряд через эпические проекты. Манипулирует сроками, как заправский фокусник, и превращает хаос в стройные планы.",
    phrases: [
      "Созвон в зуме по планированию созвона в зуме, всем быть ",
      "Возьми ещё одну таску, эта точно последняя ",
      "Надо срочно исправить баг в легаси",
      "Всё, чего касаются лучи солнца, это твои обязанности ",
      "Забыл сказать, дедлайн был ещё вчера ",
      "Вот 318 правок от заказчика",
    ],
    power: 7,
    agility: 8,
    intellect: 5,
    charisma: 10,
    vitality: 10,
  },
  backend: {
    name: "Backend разработчик",
    description:
      "Мастер мистических сил, повелитель баз данных и заклинатель API. Управляет миром, который никто не видит, но все им пользуются.",
    phrases: [
      "Зачем тебе документация? ",
      "Кстати, я передумал и переписал все апи",
      "Кнопочки красить это не программирование ",
      "Предлагаю поставить всем линукс ",
      "Сейчас некогда, задеплою в пятницу вечером ",
      "Там все интуитивно понятно",
    ],
    power: 9,
    agility: 6,
    intellect: 9,
    charisma: 5,
    vitality: 12,
  },
  designer: {
    name: "Дизайнер",
    description:
      "Властелин Figma, заклинатель UX/UI, творец визуальных симфоний. Способен превратить хаос пожеланий в упорядоченный мир дизайна.",
    phrases: [
      "Просто скопируй этот блок с того сайта ",
      "Адаптив сделай на свое усмотрение ",
      "Вот мои наскальные рисунки, сверстай",
      "Почини микроволновку, ты же программист ",
      "Я добавил ещё 12 слайдеров в этот блок ",
      "Не знаю как, но сделай, чтобы это работало",
    ],
    power: 5,
    agility: 8,
    intellect: 5,
    charisma: 7,
    vitality: 8,
  },
};

const enemiesReducer = (state = defaultStateEnemies, action: RootAction) => {
  switch (action.type) {
    case Constants.TAKE_DAMAGE_ENEMY:
      return {
        ...state,
        [action.payload.enemy]: {
          ...state[action.payload.enemy],
          vitality: action.payload.vitality,
        },
      };

    default:
      return state;
  }
};

export default enemiesReducer;
