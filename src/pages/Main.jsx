import Video from "../components/Video/Video";
import Calendar from "../components/Calendar/Calendar";
import RecentProjects from "../components/RecentProjects/RecentProjects";

export default function Main() {
  return (
    <main style={{flex: '1 1 auto'}}>
      <Video />
      <Calendar />
      <RecentProjects />
    </main>
  )
}
