const { Schema,model } = require("mongoose");

// creation de schema du model
const personSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  age: Number,
  favoriteFoods:[String]
});
//creation du model Person en ralation avec schema
const Person= model("Person",personSchema)

//exporter le model sous forme de module
module.exports = Person