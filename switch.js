console.log("\n------------SWITCH STATEMENT------------\n")

// Suppose that the user inputs the language to display your app / website
// We want to show a different welcome message based on the language
// Language -- language code: "EN", "IT", etc.

let language = "IT" // Varaibles: ways to store data, that can change over time


// If statements need a boolean to choose what to do
// The equality operator is a boolean operator: it will result true or false
if (language === "EN") {
  console.log("Hello! Welcome.")
} else if (language === "IT") {
  console.log("Ciao! Benvenuti.")
} else if(language === "ES") {
  console.log("Hola! Bienvenudo.")
} else if (language === "SK") {
  console.log("Ahoj! Vytaj")
} else {
  console.log("Language not supported.")
}

/* There is also some syntactic sugar for a situation like this one
We're doing:
- A sequence of if then else statements
- All the conditions are on the same variable, same condition, just the value changes

We are always checking if the language is equal to... something
*/
switch (language) {
  case "EN":
    console.log("Hello! Welcome.")
    break;

  case "IT":
    console.log("Ciao! Benvenuti.")
    break;

  case "ES":
    console.log("Hola! Bienvenudo.")
    break;

  case "SK":
    console.log("Ahoj! Vytaj")
    break;

  default:
    console.log("Language not supported.")
    break;
}
