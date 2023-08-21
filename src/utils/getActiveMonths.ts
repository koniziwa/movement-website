import { EventObject } from "../redux/eventSlice/types";
import { getEventsByYear } from "./getEventsByYear";

import { months } from "../constants/months";

export const getActiveMonths = (
  eventList: EventObject[],
  year: number
): string[] => {
  const eventsByYear = getEventsByYear(eventList, year);
  const activeMonths = eventsByYear.map((event) => {
    const month: number = Number(event.start_date.split("-")[1]);
    return months[month - 1];
  });

  return activeMonths;
};
