import React from "react";
import Sushi from "./Sushi/Sushi";
import classes from "./SushiKit.module.css";

export default ({ ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach(type => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Sushi key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.SushiKit}>
      {ingredientsOutput}
    </div>
  );
};
