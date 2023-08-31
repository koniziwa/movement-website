import { EventObject } from "../redux/eventSlice/types";

export const sortByDate = (eventList: EventObject[]): EventObject[] => {
  const sortedList: EventObject[] = JSON.parse(JSON.stringify(eventList));

  sortedList.sort((a, b) => {
    const date1 = new Date(a.start_date);
    const date2 = new Date(b.start_date);
    return date1 < date2 ? 1 : -1;
  });

  return sortedList;
};
