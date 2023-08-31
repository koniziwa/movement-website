import { EventObject } from "../redux/eventSlice/types";

export const getEventsByCategories = (
  eventList: EventObject[],
  categories: string[]
): EventObject[] => {
  if (categories.length) {
    const events = eventList.filter((event) => {
      const check = categories.find((category) =>
        event.category.split(" ").includes(category)
      );
      return check ? true : false;
    });
    return events;
  } else {
    return eventList;
  }
};
