import recipedata from "./recipe.json";
import authorImage from "./styling.css";

function AuthorInfo() {
  let name = (<div>{recipedata[0].author}</div>)
  let image = recipedata.map((data, id) => {return <img key={id} className="authorImage" src={data.authorImage} alt={data.authorName}/>})
  let url = (<a>{recipedata[0].recipeImage}</a>)

   return(<div>{name}{image}{url}</div>);
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 