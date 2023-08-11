import Video from "../components/Video/Video";
import Calendar from "../components/Calendar/Calendar";
import RecentProjects from "../components/RecentProjects/RecentProjects";

const Main: React.FC = () => {
  return (
    <main>
      <Video />
      <Calendar />
      <RecentProjects />
    </main>
  )
}

export default Main
