import React from "react";
import { useAppDispatch } from "../redux/store";
import { fetchEvents } from "../redux/eventSlice/asyncActions";

import Video from "../components/_mainComponents/Video/Video";
import Calendar from "../components/_mainComponents/Calendar/Calendar";
import RecentProjects from "../components/_mainComponents/RecentProjects/RecentProjects";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchEvents());
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Video />
      <Calendar />
      <RecentProjects />
    </main>
  );
};

export default Main;
