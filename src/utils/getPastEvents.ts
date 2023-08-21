import { EventObject } from "../redux/eventSlice/types";

export const getPastEvents = (events: EventObject[]): EventObject[] => {
  const pastEvents = events.filter((event) => event.recent === true);
  return pastEvents;
};
