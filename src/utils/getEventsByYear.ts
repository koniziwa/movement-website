import { EventObject } from "../redux/eventSlice/types";

export const getEventsByYear = (
  events: EventObject[],
  year: number
): EventObject[] => {
  const eventsByYear = events.filter((event) => {
    const eventYear = event.start_date.split("-")[0];
    return eventYear === String(year);
  });
  return eventsByYear;
};
