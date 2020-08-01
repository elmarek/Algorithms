/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {

  let mapArr = mapStr.split('\n')
  let mapMatrix = []
  let islandCount = 0
  for (var i = 0; i < mapArr.length; i++) {
    let arr = mapArr[i].split('')
    mapMatrix.push(arr)
  }
  for (var n = 0; n < mapMatrix.length; m++) {
    for (var m = 0; m < mapMatrix[0].length; m++) {
      if(mapMatrix[n][m] === '1'){
        markIslandSeen(n, m);
        islandCount++;
       }
    }
  }
  return islandCount
  function markIslandSeen(x,y){
    if (x>= mapMatrix.length || x<0 || y>= mapMatrix[0].length||y<0){
        return;
    }
    if (mapMatrix[x][y] !== '1'){
        return;
    }

    mapMatrix[x][y] = '2';

    markIslandSeen(x+1, y);
    markIslandSeen(x-1, y);
    markIslandSeen(x, y+1);
    markIslandSeen(x, y-1);
  }
}
