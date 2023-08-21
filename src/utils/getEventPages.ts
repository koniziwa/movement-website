import { EventObject } from "../redux/eventSlice/types";

export const getEventPages = (eventList: EventObject[]): number => {
  const pages = Math.floor((eventList.length - 1) / 3) + 1;
  return pages;
};
