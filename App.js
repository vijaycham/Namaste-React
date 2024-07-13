import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement -> ReactElement-JS Object -> HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);

//JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel
//JSX(Babel transpile) -> React.createElement -> ReactElement-JS Object -> HTMLElement(render)
const jsxheading = <h1 id="heading"> Namaste react </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
console.log(jsxheading);

// either way
const fn = () => true;

const fn2 = () => {
  return true;
};

const Title = () => <h1>Title of the component</h1>;

///{} -->we can add js expressions
const HeadingComponent = () => (
   <div id = "container">
  {/* <Title />
  <Title></Title>
  {Title()} */}
  <h1 id="heading">Heading component</h1>
<h1 id="heading"> Functional component</h1>
<h2> {200+300} </h2>
  </div>);
  root.render(<HeadingComponent/>);
  console.log(HeadingComponent);


  //
   

 