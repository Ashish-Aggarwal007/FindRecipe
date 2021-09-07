import React, { useState } from "react";
import RecipeComponent from "./RecipeComponent";
import Axios from "axios";
import "./Recipes.css";

const APP_ID = "4e089f15";
const APP_KEY = "95d1a7531e357d0b4cc1c22a72cdccdf";

const AppComponent = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    updateRecipeList(response.data.hits);
  };
  /* Debouncing */
  const onTextChange = (e) => {                                 
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div className= "Container">
      {/* <div className="Header">
        <div className="AppName"> */}
          {/* <RecipeImage src="/react-recipe-finder/hamburger.svg" /> */}
          {/* Recipe Finder */}
        {/* </div>
        <div className="SearchBox"> */}
          {/* <SearchIcon src="/react-recipe-finder/search-icon.svg" /> */}
          {/* <input className= "SearchInput"
            placeholder="Search Recipe"
            value={searchQuery}
            onChange={onTextChange}
          />
        </div>
      </div> */}
      <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-5 text-center">
          <h1 className="text-slanted text-capitalize">Search Recipes</h1>
          <form className="mt-4">
            <div className="input-group">
                <input type="text" placeholder = "Enter the Ingridients" value={searchQuery}
                onChange={onTextChange} className= "form-control"/>
                <div className="input-group-append">
                  <button className ="input-group-text bg-primary text white" >
                    <i className = "fas fa-search" /></button>
                    </div>
                </div>
              </form>
          </div>
      </div>
      <div className="RecipeListContainer">
        {
          recipeList.map((recipe, index) => (
            <RecipeComponent key={index} recipe={recipe.recipe} />
          ))
         }
      </div>
    </div>
  );
};

export default AppComponent;

// recipeList?.length ? ( ) : (
//     <Placeholder src="" />