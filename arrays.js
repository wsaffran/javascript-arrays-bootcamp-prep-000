
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

var array = [1, 2, 3, 4, 5]
var element = "Hot Sauce"

destructivelyAddElementToBeginningOfArray(array, element)

addElementToBeginningOfArray(array, element)
