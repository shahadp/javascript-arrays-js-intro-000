var chocolateBars=[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(array,element)
{
  let newArray=[element,...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array,element)
{
   array.unshift(element)
   return array
}
function addElementToEndOfArray(array, element)
{
  let newArray=[element,...array]
  return newArray
}
destructivelyAddElementToEndOfArray(array, element)
{

}
