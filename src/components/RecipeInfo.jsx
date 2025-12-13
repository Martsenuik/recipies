// import PropTypes from "prop-types";

const RecipeInfoFunction = ({
  name,
  time,
  servings,
  calories,
  difficulty,
  image,
}) => {
  return (
    <li>
      <h2>{name}</h2>
      <p>Time of cooking:{time} Min</p>
      <p>Servings: {servings}</p>
      <p>Ckal: {calories}</p>
      <p>Difficultly: {difficulty}</p>
      <img width="200px" src={image} alt={name} />
    </li>
  );
};

// RecipeInfoFunction.propTypes = {
//   name: PropTypes.string.isRequired,
//   time: PropTypes.number.isRequired,
//   servings: PropTypes.number.isRequired,
//   calories: PropTypes.number.isRequired,
//   difficulty: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
// };

// RecipeInfoFunction.defaultProps = {
//   name: "No name",
//   time: 0,
//   servings: 1,
//   calories: 0,
//   difficulty: "unknown",
//   image: "",
// };
export default RecipeInfoFunction;
