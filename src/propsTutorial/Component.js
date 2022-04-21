import React from "react";
import ReactDOM from "react-dom";
const Component = (props) => {
  return (
    <div>
      <h1>
        Hello , {props.name} .I am age {props.age}
      </h1>
    </div>
  );
};

export default Component;
