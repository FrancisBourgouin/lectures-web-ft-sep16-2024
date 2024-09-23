# Shopping Cart !

Takes in an array of items, and will list subtotal, total, tax, amount of items

Cart ?
Item ?

TDD: Test Driven Development

# Data structures

## Item

```jsx
// price, name, quantity, description, icon
const item = {
  name:"",
  price:0,
  quantity:0,
  description:"",
  icon:""
}
```

## Cart

```jsx
const cart = [item, item, item]
```

## CartInformation

```jsx
const cartInfo = {
  subtotal:0,
  tax:0,
  total:0
  listOfItems:["🥔"]
}
```

## taxAmount

```jsx
const TAX_PERCENTAGE = 0.14975
```

## What if?

```jsx
const calculateCart = (cart, taxPercentage) => {
  // ...
}
```

### Options
- Throw (STOP EVERYTHING)
- Warn
- Ignore

### What could go wrong
- Get an empty cart (WARN|IGNORE)
- Could have an invalid cart (THROW)
- Could have an invalid item (WARN)
- Could have invalid tax percentage / missing (THROW)

### What could go right
- Impromper math in the function
