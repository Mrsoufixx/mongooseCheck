// Load environment variables from .env file
require("dotenv").config();

// Connect to MongoDB using Mongoose
require("./database/connection");

// Import the Person model
const Person = require("./models/Person");

// Create a new Person document and save it to the database
// const Person1 = new Person({
//   name: "Soufiane",
//   age: 30,
//   favoriteFoods: ["fruit de mer", "salade"],
// });
// Person1.save()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e.message));

// // Create multiple Person documents and save them to the database
// const arrayOfPeople = [
//   { name: "Frank", age: 30, favoriteFoods: ["pasta", "salad"] },
//   { name: "Yassine", age: 35, favoriteFoods: ["pizza", "ice cream"] },
//   { name: "Hamid", age: 40, favoriteFoods: ["steak", "chocolate"] },
// ];

// Person.create(arrayOfPeople)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e.message));

// // find all person(documents) with name "Soufiane"
// Person.find({ name: "Soufiane" }).then((find) => console.log("find",find));

// //find first person(document) with name soufiane
// Person.findOne({ name: "Frank" }).then((find) => console.log("findOne",find));

////find document by here id
// Person.findById("643150c4b8bb6de826265748").then((find) => console.log("findById",find)).catch(e=>console.log(e.message));

////find by id and update with adding "humberger" in favorites foods
// Person.findById("643150c4b8bb6de82626574a")
//   .then((person) => {
//     person.favoriteFoods.push("hamburger");
//     return person.save();
//   })
//   .then((updatedPerson) => console.log(updatedPerson))
//   .catch((e) => console.log(e.message));

////update age of persone name soufiane
// updatePersonAge("Soufiane")
// async function updatePersonAge(personName) {
//       const updatedPerson = await Person.findOneAndUpdate(
//         { name: personName }, // search criteria
//         { age: 20 }, // update age to 20
//         { new: true } // return the updated document
//       );
//       console.log(updatedPerson)
//       return updatedPerson;
//     }

////delete person by id
// deletePersonById("643150c4b8bb6de82626574a")
// async function deletePersonById(personId) {
//       const deletedPerson = await Person.findByIdAndRemove(personId);
//       return deletedPerson;
//     }

////remove didnt work because of version
// deleteName()
// async function deleteName() {
//       const result = await Person.remove({ name: "Soufiane" });
//       return result;
//     }

////delete many person with name Soufiane
// deleteName()
// async function deleteName() {
//       const result = await Person.deleteMany({ name: "Soufiane" });
//       return result;
//     }

////Find people who like burritos. Sort them by name, limit the results to two documents, and hide their age. Chain .find(), .sort(), .limit(), .select()
// findBurritoLovers();
// async function findBurritoLovers() {
//   const result = await Person.find({ favoriteFoods: "burritos" })
//     .sort({ name: 1 })
//     .limit(2)
//     .select("-age")
//     .exec();
//     console.log(result)
//   return result;
// }
