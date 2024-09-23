const calculateCart = (cart, taxPercentage) => {
  // ...
  const cartOutput = {
    subtotal:0,
    total:0,
    tax:0,
    listOfItems:[]
  }

  if(!Array.isArray(cart)){
    throw new Error("INVALID CART!")
  }

  // Number.isNaN()
  if(typeof taxPercentage !== "number"){
    throw new Error("INVALID TAX AMOUNT! YOU CANNOT EVADE TAXES")
  }


  if(cart.length === 0){
    return null
  }

  for(const item of cart){
    if(typeof item === "object"){
      cartOutput.subtotal += item.price * item.quantity
      cartOutput.listOfItems.push(item.icon)
    }
  }

  cartOutput.tax = Math.round(cartOutput.subtotal * taxPercentage * 100) / 100
  cartOutput.total = Math.round((cartOutput.tax + cartOutput.subtotal) * 100) / 100

  return cartOutput

}


module.exports = calculateCart