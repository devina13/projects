import React from "react";

const RecipeDetails = (props) => {
  return (
    <div>
      <div className="card w-75">
        <div className="card-body">
          <div>
            
                <div>
                  <h5 className="card-title">
                    {props.recipeData.name}
                  </h5>
                  <img
                    src={props.recipeData.img}
                    className="card-img-top"
                    alt={props.recipeData.name}
                  ></img>
                  <p className="card-text">
                  {props.recipeData.desc}
                  </p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
