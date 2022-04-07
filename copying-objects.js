console.log("\n---------------COPYING OBJECTS---------------")

let user = {
  name: "Paul",
  surname: "Smith",
  age: 35
}

console.log(user)

// We want to define another object representing
// the TWIN brother of Paul. Same age, same surname.
// We want to copy the value of user and change only the name...
let twinOfUser = user
console.log(twinOfUser)

// Now let's change the name...
console.log("\nWe change ONLY the name of the twin...")
twinOfUser.name = "Jack"

console.log("Again we print both users:")
console.log(user)
console.log(twinOfUser)

// We actually modified also user, so let's fix it
user.name = "Paul"

/*
When you deal with structural data types (objects, arrays)
The variables that contain the data, do not actually contain the data
but just a pointer/reference to the data, to the place where the data
is stored in memory.

In this example:
- user --points to---> the object we defined
- we copy the value of user in twinOfUser, we are copying the pointer
- we have two variables pointing to the same object storage in the memory of our computer


user -----> OBJECT <------ twinOfUser

They actually both refer to the same objetc, we did not copy the object.
 */

console.log("\nLet's try to use Object.assign:")
// How to actually copy the value of an object
// 1) you define a NEW object, empty
twinOfUser = {} // Empty object
// 2) you use Object.assign
Object.assign(twinOfUser, user) // We copy FROM user TO twinOfUser

// NOW this is actually a copy, a new object
twinOfUser.name = "Jack"
console.log(twinOfUser)
console.log(user)
