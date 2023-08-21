import { useSelector } from "react-redux";
import { selectEvents } from "../../../redux/eventSlice/selectors";

import Tile from "../../ui/Tile/Tile";

import { months } from "../../../constants/months";
import { getActiveMonths } from "../../../utils/getActiveMonths";

import styles from "./Tiles.module.scss";

type TilesProps = {
  year: number;
};

const Tiles: React.FC<TilesProps> = ({ year }) => {
  const { items } = useSelector(selectEvents);
  const activeMonths = getActiveMonths(items, year);

  return (
    <div className={styles.tiles}>
      {months.map((month, index) => (
        <Tile key={index} active={activeMonths.includes(month)}>
          {month}
        </Tile>
      ))}
    </div>
  );
};

export default Tiles;
