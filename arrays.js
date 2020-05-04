var chocolateBars=[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(array,element)
{
  var newArray=[element,...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array,element)
{
   array.unshift(element)
   return array
}
function addElementToEndOfArray(array, element)
{
  var newArray1=[...array,element]
  return newArray1
}
destructivelyAddElementToEndOfArray(array, element)
{
  let array1=array.push(element)
  return array1
}
