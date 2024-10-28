# W7D1 - JSX and Props in React

Today we will be talking about JSX and Props and how they work in React!

## Today's menu

- Chat about weekend work (What was clear, what wasn't)
- Generating an App (CRA)
- Making a plan (Water plants)
- Creating components
- Passing props in components

## Making a plan

We Will be making a Plant App.

First thing is first, we need to determine what components we will need.

Content is in PLAN.md !

## React Reference

## Webpack and Babel

`Babel` - babel converts our react written components into ES2015+. Babel lets us use new features of JS that may not be supported by the browser. You can write your code in the new features, where then Babel will convert that said code into something that the browser understands.

`Webpack` - s a popular module bundling system built on top of Node.js. It can handle not only combination and minification of JavaScript and CSS files, but also other assets such as image files (spriting) through the use of plugins.

### JSX Syntax

With React, it's an extension for XML-like code for elements and components.
JSX is a little more stricter than HTML. We will have to these rules to write JSX correctly.

#### Rule 0

`import React from "react";` AND `export default _______` <- your function name here

#### Rule 1 - All Tags MUST be closed or self-closing.

```jsx
<div>
  {/* ... Components or other HTML in here ...  which are also closed correctly! */}
</div>
```

Or

```jsx
<ListItem />
```

<img />

#### Rule 2 - Child tags MUST close before the parent.

```jsx
<ul>
  <li>Child1</li>
  <li>Child2</li>
  <li>Child3</li>
  <li>Child4</li>
</ul>
```

#### Rule 3 - All JSX expressions MUST have a parent (or root) element.

```jsx
return (
  <div>
    <span>Name: Chuck Norris </span>
    <p>Chuck Norris threw a grenade and killed 50 people, then it exploded.</p>
  </div>
);
```

### Passing Props

To pass props into a component:

```jsx
<List className="List" items={items} />
```

in this instance, the props are: `className` and `items`. When we get into the The `List` Component, we can see the props from:

```jsx
export default function List(props) {
  console.log(props); // we will see an object with keys className and items, which will be the props
}
```

### Conditional Rendering

```jsx
const arr = ["item1", "item2"];

return <div>{arr.length > 0 ? <List /> : <p>No items</p>}</div>;
```

We can use turniary expressions to perform conditional rendering.

If I need to not render a component at all or render it depending on an expression:

```jsx
const arr = ["item1", "item2"];

return <div>{arr.length > 0 && <List />}</div>;
```

This basically evaluates to this kind of pseudocode:

```jsx
if (arr.length > 0) {
  return <List />;
}
```

### Looping Pattern

```jsx
const items = props.items.map((item, index) => <ListItem key={index}>{item}</ListItem>);
//...
return <div>{items}</div>;
```

### Passing children with JSX

We can pass some child element(s) from one component to the other.

```jsx
import React from "react";
import ListItem from "./ListItem";

export default function List(props) {
  return (
    <ul>
      <ListItem>I AM THE CHILD</ListItem>
    </ul>
  );
}
```

```jsx
export default function ListItem(props) {
  return <li className="list-item">{props.children}</li>;
}
```

The code above will print out a single list item with "I AM THE CHILD" as the content:

- I AM THE CHILD

### Handling Events

Example of an event handler.

```jsx
const handleClick = () => {
  console.log("CLICKED!!!");
};

return (
  <div>
    <button onClick={handleClick}>Click Me</button>
  </div>
);
```
