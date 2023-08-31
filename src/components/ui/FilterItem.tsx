import React from "react";
import { useSelector } from "react-redux";

import { selectFilter } from "../../redux/filterSlice/selectors";
import { addCategory, deleteCategory } from "../../redux/filterSlice/slice";
import { useAppDispatch } from "../../redux/store";

type FilterItemProps = {
  categoryName: string;
};

const FilterItem: React.FC<FilterItemProps> = ({ categoryName }) => {
  const dispatch = useAppDispatch();
  const { activeCategories } = useSelector(selectFilter);
  const isActive: boolean = activeCategories.includes(categoryName);

  const handleClickCategory = (category: string) => {
    if (!isActive) {
      dispatch(addCategory(category));
    } else {
      dispatch(deleteCategory(category));
    }
  };

  return (
    <li onClick={() => handleClickCategory(categoryName)}>
      {categoryName}
      {isActive && <img src="/img/checkmark.svg" alt="checkmark" />}
    </li>
  );
};

export default FilterItem;
