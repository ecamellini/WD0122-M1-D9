console.log("\n------------STRING ARE ACTUALLY ARRAYS OF CHARACTERS-------------")

let text = "Welcome Epicode students, hope you like JS."
          // 12345... indexes of the characters

console.log(`The third character of the text is: ${ text[2] }`)

// Let's try to print on the console, one by one, all the characters
// console.log(text[0])
// console.log(text[1])
// console.log(text[2])

let index = 0
while(index < text.length) {
  console.log(text[index])
  index++ // Same as writing index += 1
}

// Since they are arrays, we can use the dot notation to access their functionalities
console.log("\nThe 'E' is in position:")
console.log(text.indexOf("E"))

// ACTUALLY, Strings are even more powerful than arrays.
// They have some funcionalities, that arrays don't have.
// You can see them with the dot notation.

// STRING MANIPULATION functions
console.log("\nLet's replace JS with JavaScript:")
text = text.replace("JS", "JavaScript")
console.log(text)

console.log("\nLet's split the string based on white spaces to get the words:")
let words = text.split(' ')
console.log(words)

// And many more...
// There are many functionalities that you can use on strings.
console.log("\nLet's take a slice of the text:")
console.log(text.slice(8, 15))

console.log("\nLet's make it all lowercase and the uppercase")
console.log(text.toLowerCase())
console.log(text.toUpperCase())
