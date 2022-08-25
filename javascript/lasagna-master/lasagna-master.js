/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(num) {
  if (num === 0) { return "Lasagna is done." }
  else if (num > 0) { return "Not done, please wait." }
  else { return "You forgot to set the timer." }
}

export function preparationTime(layers, time = 2) {
  return layers.length * time
}

export function quantities(layers) {
  let noodles = layers.filter(item => item == "noodles").length * 50
  let sauce = layers.filter(item => item == "sauce").length * 0.2
  return { noodles, sauce }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length -1])
}

export function scaleRecipe(recipe, num) {
  num/=2
  let needed = { ...recipe };
  for (let key in recipe) {
    needed[key] *= num
  }
  return needed
}