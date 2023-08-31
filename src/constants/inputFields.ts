export type SoloInputField = {
  image: string;
  placeholder: string;
  type: "name" | "telegram" | "email" | "faculty" | "university";
};

export const soloInputFields: SoloInputField[] = [
  {
    image: "human-ico",
    placeholder: "ФИО",
    type: "name",
  },
  {
    image: "telegram-ico",
    placeholder: "@username",
    type: "telegram",
  },
  {
    image: "mail-ico",
    placeholder: "usermail@hse.ru",
    type: "email",
  },
  {
    image: "house-ico",
    placeholder: "Факультет",
    type: "faculty",
  },
];

export type GroupInputField = {
  image: string;
  placeholder: string;
  type: "name" | "command" | "telegram" | "email";
};

export const groupInputFields: GroupInputField[] = [
  {
    image: "human-ico",
    placeholder: "ФИО капитана команды",
    type: "name",
  },
  {
    image: "people-ico",
    placeholder: "Название команды",
    type: "command",
  },
  {
    image: "telegram-ico",
    placeholder: "@captain",
    type: "telegram",
  },
  {
    image: "mail-ico",
    placeholder: "captain@hse.ru",
    type: "email",
  },
];
