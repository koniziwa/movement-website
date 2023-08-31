import React from "react";

import { useAppDispatch } from "../../../redux/store";
import { resetCategories } from "../../../redux/filterSlice/slice";
import { sortItems } from "../../../redux/eventSlice/slice";

import FilterItem from "../../ui/FilterItem";

import { categories } from "../../../constants/categories";

import styles from "./Filter.module.scss";

const Filter: React.FC = () => {
  const [isMenuActive, setMenuActive] = React.useState<boolean>(false);
  const [isAscending, setAscending] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleResetButton = () => {
    dispatch(sortItems("desc"));
    setAscending(false);
    dispatch(resetCategories());
    setMenuActive(false);
  };

  const handleSortClick = () => {
    isAscending ? dispatch(sortItems("desc")) : dispatch(sortItems("asc"));
    setAscending((isAscending) => !isAscending);
  };

  return (
    <div className={styles.filter}>
      <div>
        <p>
          Сортировать по
          <span onClick={() => handleSortClick()}>
            <img
              src={isAscending ? "/img/sort_asc.svg" : "img/sort_desc.svg"}
              alt="sort"
            />
            дате
          </span>
        </p>
        <span onClick={() => setMenuActive(!isMenuActive)}>
          Категории
          {isMenuActive && (
            <ul onClick={(e) => e.stopPropagation()}>
              {categories.map((categoryName, index) => (
                <FilterItem key={index} categoryName={categoryName} />
              ))}
            </ul>
          )}
        </span>
      </div>
      <button onClick={() => handleResetButton()}>Сбросить</button>
    </div>
  );
};

export default Filter;
