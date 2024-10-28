# What was hard?

- No question!

# Why React ?

- IT'S BETTER*. PERIOD*.
- Easy to use
- JS > EJS

- Nice and interactive (reactive) interfaces for the web

```js
const centralizedDataSource = { some: "DATA" };

const functionsToChangeThatData = () => {
  //...
  // SOMETHING WILL HAPPEN IF THE DATA CHANGES, REACT WILL UPDATE THE RELEVANT ELEMENTS
};
```

- Problem with jQuery, data is not centralized and we work by modifying elements

```html
<script>
  const createElementjQuery = () => {
    const $article = $("<article>)
  }
</script>

<h1 class="open">

document.querySelector("h1").classList.hasClass("open")

document.querySelector("h1").classList.addClass("open")
document.querySelector("h1").classList.removeClass("open")

```


```jsx
  const [divOpen, setDivOpen] = useState(true)


  ...


  <div class={divOpen ? "open" : ""}>
```

- Original React there was no JSX

```js

ReactDOM.createElement("h1", ...)

<h1>


<h1>Some title!</h1>

```

- Easier because of the component pattern & state

```ejs

```

```jsx

```

- JSX is magical!

```jsx

```

```html

```
