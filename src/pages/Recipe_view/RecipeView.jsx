/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import ViewRecipeDetiles from "../ViewRecipeDetiles/ViewRecipeDetiles";
import "./RecipeView.css";

const RecipeView = () => {
  const { id } = useParams();
  const [chef, setChef] = useState({});

  const [loading, setLoading] = useState(true);

  console.log(id);

  useEffect(() => {
    fetch(`https://bangladeshi-foods-recipe-server-jy589pije-bilkish-akther.vercel.app/recipe?`)
      .then((res) => res.json())
      .then((data) => {
        setChef(data.find((e) => e.id == id));
        setLoading(false);
      });
  }, []);

  console.log(chef.recipesList);

  return loading ? (
    <div className="loading-container">
      <HashLoader className="d-inline-block" color="#36d7b7" size={100} />
    </div>
  ) : (
    <div>
      <h1>{chef.name}</h1>
      <div className="cardDesign h-100 w-100 mt-4">
        {chef.recipesList.map((recipeItem) => (
          <ViewRecipeDetiles
            key={recipeItem.id}
            recipeItem={recipeItem}
          ></ViewRecipeDetiles>
        ))}
      </div>
    </div>
  );
};

export default RecipeView;
