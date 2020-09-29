/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Extra credit: Make your function handle negative numbers.


var largestProductOfThree = function(array) {
  # /* Write a function that finds the largest possible product of any three numbers
  #  * from an array.
  #  *
  #  * Extra credit: Make your function handle negative numbers.
  #
  # O: the number
  # I: array (not sure if we will get things that are not numbers)
  # C:
  # E:
  */
  def largest_product_of_three(arr):

       sorted_array = sorted(arr, key=None, reverse=True)
      product = sorted_array[0] * sorted_array[1] * sorted_array[2]
      return product
  def largest_product_of_three_with_negative(arr):
     let hasPositives = false
     let hasNegatives = false
     let mixed = false
     for (var i = 0; i < arr.length; i++) {
         if (arr[i] === 0) {
             continue
         }
         if(arr[i] > 0) {
             hasPositives = true
         } else if (arr[i] < 0) {
             hasNegatives = true
         }
     }
     if (hasPositives === true && hasNegatives === true) {
         mixed = true
     }
     if (mixed) {
       return arr[0] * arr[arr.length -1] * arr[arr.length - 2]
     }
     if (hasNegatives) {
     }
     if(hasPositives) {
     }
      return product

};