
//Creating Arrays
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// Adding Elements
// Functions
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
// Variables
var array = [1, 2, 3, 4, 5]
var element = "Hot Sauce"
// Test Functions
destructivelyAddElementToBeginningOfArray(array, element)
addElementToBeginningOfArray(array, element)

//Accessing an element
