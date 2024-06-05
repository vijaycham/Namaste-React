/* <div id="parent">
       <div id="child1">
       <h1>This is h1 Tag</h1>
       <h2> This is h2 Tag </h2>
       </div>
        <div id="child2">
       <h1>This is h1 Tag</h1>
       <h2> This is h2 Tag </h2>
       </div>
       </div>
*/

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!"
// );
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is a vijay"),
    React.createElement("h2", {}, "Learning react from Namaste React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is h1 Tag"),
    React.createElement("h2", {}, "This is h2 Tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
