var outerFunction = () => {
  const outerVar = "Aditya"
  let innerFunction = () => {
    console.log(outerVar)
  }

  return innerFunction()
}

outerFunction();