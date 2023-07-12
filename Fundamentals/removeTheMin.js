/*
Given an array of integers, remove the smallest value.
Do not mutate the original array/list. If there are multiple
elements with the same value, remove the one with a lower index.
 If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

function removeSmallest(numbers) {
    // we do not mutate the original array
    // remove the smallest value
    // if duplicate, remove the smallest with the least index
    // don't change the order other elements

    let output = []
    let minNum = Math.min(...numbers)
    let indexOfMin = numbers.indexOf(minNum)
    // output = numbers.filter((n, i) => i !== indexOfMin)

    for (let i= 0; i < numbers.length; i++) {
      if (i == indexOfMin) {
        continue
      }

      output.push(numbers[i])
    }

    return output
  }