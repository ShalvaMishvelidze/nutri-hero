import { RecipesGridRow } from "./recipes_grid_row";

const container =
  "grid grid-cols-3 max-xm:grid-cols-2 max-sm:grid-cols-1 gap-x-[16px] gap-y-[20px]";

const FilterGrid = () => {
  return (
    <div className={container}>
      <RecipesGridRow />
      <RecipesGridRow />
      <RecipesGridRow />
    </div>
  );
};
export default FilterGrid;
