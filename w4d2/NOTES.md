# Javascript in the Browser

## DOM

Document Object Model is an object that we can use to access everything in the page

- document.getElementsByTagName
- document.getElementsByClassName
- document.getElementsBy...

- document.getElementById (Because there should be only one ID per page)

- document.querySelector() uses CSS to target a single element
- document.querySelectorAll() uses CSS to target multiple elements

## Accessing / Editing

Since DOM is an object, we read and write to it like we would do for any object!

const bob = {name: "🐔"}

bob.name to access
bob.name = "🤖" to modify

document.querySelector("h1").innerText
document.querySelector("h1").innerText = "new text!"

## Events!

We can add events on elements by using the method called .addEventListener()

document.addEventListener('click')

const h1 = document.querySelector("h1")
h1.addEventListener('click')

# jQuery in the Browser!

It's a library to interact with the DOM in an easier fashion than vanilla Javascript

## Accessing

```jsx
$("target css here");
```

## View properties or edit

No parameter, means that we want to read
If we put a parameter, means that we want to write

```jsx
$("body").css("background-color")(Read);
$("body").css("background-color", "#BADA55")(Write);
```

## Events

We can attach events to mostly everything, we can use the name of the event as the method very often

```jsx
$("button").on("click", callback);
$("button").click(callback);
```

Cool CSS Animation : https://css-tricks.com/almanac/properties/a/animation/
