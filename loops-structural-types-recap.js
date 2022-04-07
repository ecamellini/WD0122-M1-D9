// Supppose that we are tracking shipments in our database.
// We read the list of shipments that we have, so that
// we can show it to the user.

/* WHAT IS A SHIPMENT?
- Origin: string
- Destination: string
- Weight: number (float)
- Content: string
- Delivered or not? boolean
*/

let exampleShipment = {
  origin: "Milan",
  destination: "Berlin",
  weight: 5.35,
  content: "Mozzarella",
  isDelivered: false // Boolean, let's name it as a question
}

let shipments = [ // Maybe, in a real app, we read this list from a database
  { origin: "Milan", destination: "Madrid", weight: 8.00, content: "Books", isDelivered: false},
  { origin: "Brussels", destination: "Helsinky", weight: 4.00, content: "Pizzas", isDelivered: false},
  { origin: "Bratislava", destination: "Berlin", weight: 7.40, content: "Fruit", isDelivered: true},
  { origin: "Copenhagen", destination: "London", weight: 2.00, content: "LEGO blocks", isDelivered: false},
]

console.log(shipments)

// All our shipments were delivered today.
// We want to update the data so that it reflects the reality
// isDelivered needs to be true.

for (let index = 0; index < shipments.length; index++) {
  let shipment = shipments[index]
  shipment.isDelivered = true
  console.log(`Shipment of ${shipment.content} was delivered.`)
}

console.log(shipments)


// Variables exist ONLY INSIDE THE CODE BLOCK WHERE THEY ARE DECLARED
// Variable scope/visiblility: if you exit a code block, its variables do not exist anymore.
// console.log(shipment) // This instruction will throw an error
// Also: variables are visible inside sub-blocks of the block you are into.
// That's why we can see shipments variable inside the for loop.

console.log("\n-----------REMOVING ITEMS------------")

// Remove the second item
shipments.splice(1, 1)
// First thing isinde the round brackets: position where we want to operate
// Second: we remove only one element
// Third: The element(s) that we want to insert -- we don't need it here, we only want to remove

console.log(shipments)

// Let's remove second AND third item
shipments.splice(1, 2)
console.log(shipments)
