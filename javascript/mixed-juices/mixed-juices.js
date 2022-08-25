// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let juices = {
    "Pure Strawberry Joy" : 0.5,
    "Energizer" : 1.5,
    "Green Garden" : 1.5,
    "Tropical Island" : 3,
    "All or Nothing" : 5
  }
  let order = !juices[name] 
    ? 2.5
    : juices[name]
  return order
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = {
    "small" : 6,
    "medium" : 8,
    "large" : 10
  }
  let count = 0
  while (wedgesNeeded > 0) {
    if(limes.length == 0) break
    wedgesNeeded -= wedges[limes.shift()]
    count++;
  }
  return count
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
 do {
     timeLeft -= timeToMixJuice(orders.shift());
 } while (timeLeft > 0)
  return orders
}
