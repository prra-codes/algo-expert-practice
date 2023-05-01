// 15. Best Seat, Mon, 01/05/23

// Time Complexity: O(n) where n is the length of the array (we iterate through the array)
// Space Complexity: O(1)

function bestSeat(seats) {
  let availableSpace = 0;
  let bestSeat = -1;

  let leftIndex = 0;

  while (leftIndex < seats.length) {
    let rightIndex = leftIndex + 1;

    while (rightIndex < seats.length && seats[rightIndex] === 0) {
      rightIndex++;
    }
    let newSpace = rightIndex - leftIndex - 1;

    let newSeat = Math.floor((leftIndex + rightIndex) / 2);

    if (newSpace > availableSpace) {
      availableSpace = newSpace;
      bestSeat = newSeat;
    }

    leftIndex = rightIndex;
  }

  return bestSeat;
}

console.log(bestSeat([1, 0, 1, 0, 0, 0, 1]));
