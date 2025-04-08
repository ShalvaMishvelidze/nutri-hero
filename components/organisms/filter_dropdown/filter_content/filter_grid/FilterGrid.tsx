import { RecipesGridRow } from "./recipes_grid_row";

const container = "flex flex-col gap-[20px]";

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
