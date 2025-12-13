import RecipesFunction from "./components/Recipes";
import RecipeInfoFunction from "./components/RecipeInfo";
import recipies from "../recipies.json";

function App() {
  return <RecipesFunction recipies={recipies} />;
}

export default App;
