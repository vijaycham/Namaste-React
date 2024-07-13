
we can scripts the code in package.json , how we can execute, like
```js
 "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
```

npm start = npm run start (start is reserved by npm)
npm build not equal to npm run build (but here it wont work)

---
``` React.js
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement -> ReactElement-JS Object -> HTMLElement(render)

Using core react

const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); console.log(heading);


//JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel
//JSX(Babel transpile) -> React.createElement -> ReactElement-JS Object -> 
HTMLElement(render)

Using JSX

const jsxheading = (<h1 id="heading"> Namaste react </h1>,
<h2> heading two </h2>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
```

JSX is a javascript syntax, which is easier to create React Elements

JSX  is not a part of react, we can write react without jsx also but it will make easy
it will help to merge JS and html
jsx is not html inside JS,  jsx is html like syntax.

when we console both heading and jsxheading -> both create object
![[Pasted image 20240711211943.png]]


```//JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel
//JSX(Babel transpile) -> React.createElement -> ReactElement-JS Object -> 
HTMLElement(render)
```

[[babel]]  -  https://babeljs.io/


Some common practice is  giving instruction in root like this, it will show us rendered or not.

``` js
<div id="root">
      <h1>This will be replaced by react code </h1>
    </div>
```

If we write jsx in multipile line use bracket
``` js
const jsxheading = (<h1 id="heading"> Namaste react </h1>,
<h2> heading two </h2>);
```

**React Component**
   - class based component - old way of writing component
   - Functional component - new way of writing component

React Functional component - Using JavaScript functions we will create components .
we have to create by starting capital letter
### which is normal javascript function which returns a jsx element 

``` js
const fn = () => true;
const fn2 = () => {
  return true;
};
```
both are same, we can use either way.

Heading component
```
const HeadingComponent = () => <h1 id="heading"> Namaste react </h1>;
```

```
const HeadingComponent = () => (
<div>
<h1 id="heading"> Namaste react </h1>
  </div>);
```

components rendered like this 

```
<HeadingComponent/>
```

``` js
const HeadingComponent = () => (
<div>
<h1 id="heading"> Functional component</h1>
  </div>);
  root.render(<HeadingComponent />);
  console.log(HeadingComponent);
```

we can use another component into one component
```js
const Title = () => <h1>Title of the component</h1>;
const HeadingComponent = () => (
   <div id = "container">
  <Title />
  <h1 id="heading">Heading component</h1>
<h1 id="heading"> Functional component</h1>
  </div>);
```

Even we can put react element into the component 
and 
we can use { } bracket we can use javascript inside directly (we can use any expression)

``` JS
const HeadingComponent = () => (
   <div id = "container">
  <Title />
  <h1 id="heading">Heading component</h1>
  <h2> {200+300} </h2>
<h1 id="heading"> Functional component</h1>
  </div>);
```

```
<Title />
<Title></Title>
{Title()}
```
 even we can call function like this