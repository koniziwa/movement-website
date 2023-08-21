import { months } from "../constants/months";

export const dateToView = (date: string): string => {
  const params = date.split("-");
  const month = months[Number(params[1]) - 1];
  const day = Number(params[2]);
  return `${day} ${month}`;
};
