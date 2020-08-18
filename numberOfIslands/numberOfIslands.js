/*

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

var numIslands = function (grid) {
  // return value
  let islandCount = 0;

  // recursor function takes x and y coordinates of island on grid
  let islandSearch = (grid, x, y) => {
    // check whether island is valid
    if (
      x >= grid.length ||
      x < 0 ||
      y >= grid[x].length ||
      y < 0 ||
      grid[x][y] === "0" ||
      grid[x][y] === "2"
    ) {
      return;
    }
    // marking searched land with value of 2 indicating "already seen"
    grid[x][y] = "2";

    islandSearch(grid, x + 1, y);
    islandSearch(grid, x - 1, y);
    islandSearch(grid, x, y + 1);
    islandSearch(grid, x, y - 1);
    return;
  };

  //Iterate over the grid
  //if you hit land
  // run recursor function on island marking each land with "already seen" value
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        islandCount++;
        islandSearch(grid, i, j);
      }
    }
  }

  return islandCount;
};
