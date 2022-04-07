

// This function is called printTitle
// It receives a paramater: we call it title
// It does something, using the value of the parameter

// Parameter are like variables when you use them,
// but their value comes from the outside, when you call the function
function printTitle(title) {
  console.log(`\n===========[[[[ ${title} ]]]===========\n`)
}


console.log("Let's call the function a few times...")
// Let's use the function we just defined.
// Call the function
// set title = "COPYING OBJECTS"
// The code block of the function will be executed with "COPYING OBJECTS" as a value inside title
printTitle("COPYING OBJECTS")

printTitle("ANOTHER TITLE")

printTitle("ANOTHER TITLE AGAIN")

printTitle("LAST TITLE")

// let mediumBowl = 0
// We copy paste the same code many times to add and print ingredients...
// let sugar = 200
// mediumBowl += sugar
// console.log("We added sugar")

// let flour = 200
// mediumBowl += flour
// console.log("We added flour")

// let vanilla = 0.5
// mediumBowl += vanilla
// console.log("We added vanilla")


function addIngredientToBowl(bowlContent, ingredientAmount, ingredientName) {
  // This function gets THREE parameters (INPUTS)
  // 1) the content of the bowl where to add the ingretients
  // 2) the amount to add
  // 3) the name of the ingredient (so that we can print it)

  // This function returns the new content of the bowl, the resuling amount (OUTPUT)
  let newContent = bowlContent + ingredientAmount
  console.log(`We added ${ingredientName}`) // This prints
  return newContent // This returns a value to the caller, in output
}


let mediumBowl = 0

mediumBowl = addIngredientToBowl(mediumBowl, 200, "Sugar")
mediumBowl = addIngredientToBowl(mediumBowl, 100, "Flour")
mediumBowl = addIngredientToBowl(mediumBowl, 0.5, "Vanilla")
console.log(mediumBowl)


// Let's suppose we want to write a function that,
// - given a numer
// - will return true if the number is even, false if the number is odd

function isEven(number) {
  if ((number % 2) === 0) {
    return true
  } else {
    return false
  }

  // We could also just say:
  // return (number % 2) === 0
}

console.log("\nLet's test the isEven function:")
// Wenever we call a function -- meaning, whenever we use the round brackets
// we get its return value back, its output
console.log(isEven(10))
console.log(isEven(7))
console.log(isEven(11))
console.log(isEven(20))
