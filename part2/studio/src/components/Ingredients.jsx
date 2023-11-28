import recipedata from "./recipe.json";

function IngredientList() {
   return(<div><h3>Ingredients</h3> {recipedata.map((data, id) => {return(<ul key={id}>{data.ingredients.map((data ,id)=>{return(<li key={id}>{data}</li>)})}</ul>)} ) } </div>);
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 