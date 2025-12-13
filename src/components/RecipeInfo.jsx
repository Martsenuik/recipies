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
// vnihbverhfvervnerfverfcmdkdsdkjfvngjthubfnjhvbygfjuvhbg
export default RecipeInfoFunction;
