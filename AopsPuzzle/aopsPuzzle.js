/* PROGRAMMING PUZZLE

Our largest current project is Beast Academy Online, a learning system for our elementary school curriculum. BA Online includes hundreds of puzzles, many written by one of our Software Developers who is also a World Puzzle Champion. Writing puzzles for BA Online often involves building puzzle generators and solvers and is the inspiration for this programming puzzle.

A Pyramid Descent Puzzle consists of a pyramid of positive integers. To solve the puzzle, you must find a path that traverses the pyramid from top to bottom visiting numbers whose product is a given target value. Each step in the path must go down one row, and go either one step to the left or one step to the right.

For example, suppose the pyramid below has a target value of 2.

A solver for this puzzle should output LR, indicating that the correct path starts from the 1 on top, goes Left to the 2 on the second row, then goes Right to the 1 in the center of the bottom row. (Note in particular that the successful path cannot go through the 1 at the end of the bottom row.) This gives the path shown in red below:
In your language of choice, write a solver that can solve any pyramid descent puzzle. Your solver can assume that every input pyramid has a first row with one number and every row thereafter has one more number than the row above. Each row is aligned such that the center of the row aligns with the midline of the pyramid (as shown in the samples above and below).

Below is a sample pyramid with target 720 along with the sample program input and output for this puzzle.

Sample Input & output files:
pyramid_sample_input.txt pyramid_sample_output.txt

*/

`I think that for this puzzle, a tree data structure will give us a great way to organize our numbers, traverse them in a left and right fashion, and determine whether the product of a path equals our target.

Starting at the first node, we will want to traverse all available paths. For each path we will want to save any left or right move that we make.

Once we get to the end of a path, if the numbers we come across are a product equal to the target, we return the saved left and right moves as our output.`;

let pyramidDescent = (node, target) => {
  // start at the first node
  // start going down the left of the tree
  // include
};
