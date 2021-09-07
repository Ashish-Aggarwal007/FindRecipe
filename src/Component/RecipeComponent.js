import React, {useState} from 'react'
import "./RecipeComponent.css"
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

const RecipeComponent = (props) => {
    const [show, setShow] = useState("");
  
    const { label, image, ingredients, url } = props.recipe;
    return (
      <div className= " RecipeContainer">
        <Dialog
          onClose={() => console.log("")}
          aria-labelledby="simple-dialog-title"
          open={!!show}
        >
          <DialogTitle>Ingredients</DialogTitle>
          <DialogContent>
            <span className="RecipeName">{label}</span>
            <table className="table">
              <thead>
                <th>Ingredient</th>
                <th>Weight</th>
              </thead>
              <tbody>
                {ingredients.map((ingredient, index) => (
                  <tr key={index} className="ingredient-list">
                    <td >{ingredient.text}</td>
                    <td>{ingredient.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <span className= "SeeNewTab" onClick={() => window.open(url)}>See More</span>
            <span className= "SeeMoreText" onClick={() => setShow("")}>Close</span>
          </DialogActions>
        </Dialog>
        <img className="CoverImage" src={image} alt={label} />
        <span className= "RecipeName">{label}</span>
        <span className= "IngredientsText" onClick={() => setShow(!show)}>
          Ingredients
        </span>
        <span className = "SeeMoreText" onClick={() => window.open(url)}>
          See Complete Recipe
        </span>
      </div>
    );
  };

export default RecipeComponent;
