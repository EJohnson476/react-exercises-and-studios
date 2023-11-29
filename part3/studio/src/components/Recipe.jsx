import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.spendwithpennies.com/author/holly/";
   let authorPhoto = "https://secure.gravatar.com/avatar/fa4bdeb9d2aa6450536af2064fac2481?s=128&r=g";
   let authorName = "Holly Nilsson";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Pasta","Ground beef","Marinara sauce","Onions","Garlic"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.spendwithpennies.com/wp-content/uploads/2020/12/FT-Creamy-Baked-Mostaccioli-2-SpendWithPennies-1-290x290.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
