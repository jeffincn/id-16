/**
 * ID:16 v1.0.2
 * (https://git.io/id-16)
 *
 * Copyright (c) 2017 - Jesse van der Pluijm (https://github.com/jessevdp)
 * Licensed under MIT (https://git.io/id-16-license)
 *
 * Create random id's and numbers in base 16!
 */

var id = module.exports = function (length) {
  length = length || 8
  var returnVal = ''

  for (var i = 0; i < length; i++) {
    /* Random number between 0 - 15 */
    var num = Math.floor(Math.random() * 16)
    var hexNum = num.toString(16)
    returnVal += hexNum
  }

  return returnVal
}

id.generator = function (length, expandby) {
  var fn = function () {
   /**
    * This do {} while statement keeps creating random number until it finds
    * a unique one or the counter reaches 10.
    */
    var counter = 0
    do {
      // Maximum amount of retries
      if (counter++ > 10) {
        if (expandby) length += expandby
        else throw new Error(`Too many colisions, increase the length or define "expandby"`)
      }
      // Create a random number
      var rand = id(length)
    } while (fn.list.indexOf(rand) > -1)

    // add this id to the list of id's generated
    fn.list.push(rand)
    return rand
  }

  // Array on which we store all the unique id's
  fn.list = []

  fn.remove = function (id) {
    // Check the entire array and delte if found.
    for (var i = fn.list.length - 1; i >= 0; i--) {
      if (fn.list[i] === id) fn.list.splice(i, 1)
    }
  }

  return fn
}
