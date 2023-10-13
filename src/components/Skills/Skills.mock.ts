import { SkillsKeys } from "../../store/modules/user/types";

type SkillsMock = {
  title: string;
  name: SkillsKeys;
  text: string;
  icon: string;
};

export const SKILLS_MOCK: SkillsMock[] = [
  {
    title: "Атака",
    name: "attack",
    text: "Уровень: ",
    icon: "/assets/icons/rocket.png",
  },
  {
    title: "Стелс",
    name: "stels",
    text: "Уровень: ",
    icon: "/assets/icons/eye.png",
  },
  {
    title: "Манипулирование",
    name: "manipulation",
    text: "Уровень: ",
    icon: "/assets/icons/boom.png",
  },
  {
    title: "Стрельба из лука",
    name: "archery",
    text: "Уровень: ",
    icon: "/assets/icons/person.png",
  },
  {
    title: "Обучаемость",
    name: "learning",
    text: "Уровень: ",
    icon: "/assets/icons/phenomen.png",
  },
  {
    title: "Выживание",
    name: "survival",
    text: "Уровень: ",
    icon: "/assets/icons/secure.png",
  },
  {
    title: "Запугивание",
    name: "intimidation",
    text: "Уровень: ",
    icon: "/assets/icons/face.png",
  },
  {
    title: "Проницательность",
    name: "insight",
    text: "Уровень: ",
    icon: "/assets/icons/eye.png",
  },
  {
    title: "Внешний вид",
    name: "appearance",
    text: "Уровень: ",
    icon: "/assets/icons/star.png",
  },
  {
    title: "Медицина",
    name: "medicine",
    text: "Уровень: ",
    icon: "/assets/icons/secure.png",
  },
];
