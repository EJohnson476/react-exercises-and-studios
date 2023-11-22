import styles from './Description.module.css';
import React from 'react';

const RecipeAuthor = function()
{
    let authorLink = 'https://www.spendwithpennies.com/baked-mostaccioli/';
    let authorPhoto = 'https://secure.gravatar.com/avatar/fa4bdeb9d2aa6450536af2064fac2481?s=128&r=g';
    let authorName = 'Holly Nilsson';
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Author's Photo" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Find Recipe Here!</a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component
{
    render()
    {
        return(<div> 
            <div>
               <h1>Easy Baked Mostaccioli</h1>
               <p>This baked Mostaccioli is an easy pasta dish with a rich meaty sauce topped with cheese and baked until bubbly.</p>
            </div>
            <RecipeAuthor />
         </div>)
    }
};

export default RecipeDescription;