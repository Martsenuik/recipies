import RecipesFunction from "./componrnts/Recipes";
import RecipeInfoFunction from "./componrnts/RecipeInfo";
import recipies from "../recipies.json";
import "./App.css";

function App() {
  return <RecipesFunction recipies={recipies} />;
}

export default App;
