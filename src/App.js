import React from "react";
import ReactDOM from "react-dom";
// biz bir componentdan ikkinchi componentaga malumotni uzatmoqchi bolsak propslardan foydalanamiz.

import Component from "./propsTutorial/Component.js";
import Component2 from "./propsTutorial/Component2.js";
import Lesson1 from "./stateLesson/Lesson1.js";
import Counter from "./stateLesson/Counter.js";
function App() {
  return (
    <div className="App">
      {/* <Component name="Doston" age="20" /> */}
      {/* <Component2  text="React tutorial"/> */}
      <Lesson1 />
      <Counter />
    </div>
  );
}

export default App;
