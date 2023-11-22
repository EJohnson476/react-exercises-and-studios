import { useState } from 'react';
import './App.css';
import RecipeDescription from './Components/Description.jsx';
import RecipeIngredients from './Components/Ingredients.jsx';
import RecipePhoto from './Components/Photos.jsx';

function App() {

  return (
    <>
      <div className="App">
        <div className="recipePhotoBlock">
          <RecipePhoto />
        <div className="recipePhotoBlock">
        <RecipeDescription />
        <RecipeIngredients />
        </div>
        </div>
      </div>
    </>
  )
}

export default App
