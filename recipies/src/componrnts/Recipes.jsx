import RecipeInfoFunction from "./RecipeInfo";

const RecipesFunction = ({ recipies }) => {
  return (
    <ul>
      {recipies.map((rec) => {
        return (
          <RecipeInfoFunction
            name={rec.name}
            time={rec.time}
            servings={rec.servings}
            calories={rec.calories}
            difficulty={rec.difficulty}
            image={rec.image}
          />
        );
      })}
    </ul>
  );
};

export default RecipesFunction;
