// 4. Non-Constructible Change, Day 2, Tue 18/04/23)

// Given an array of positive integers represing the values of coins in your possesion, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

// For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

// Sample Input

// coins = [5, 7, 1, 1, 2, 3, 22]

// Sample Output

// 20

// Time Complexity: O(nlog(n)), where n is the number of coins. uses sorting algorithm, hence O(nlog(n))

// Space Complexity: O(1), we do not create a new array, the array is sorted in place

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b); // this sorts the array in ascending order

  let constructibleChange = 0; // new var to store change we can sum up to

  for (const coin of coins) {
    // want to loop through sorted input array to find the minimum coin sum we cannot make
    if (coin > constructibleChange + 1) {
      return constructibleChange + 1; // this is the minimum change we cannot construct
    }
    constructibleChange += coin; // we add the sum of the new coin to the coinCurrentChange to get the new currentChange
  }

  return constructibleChange + 1; // if we get through array, this is the minimum change we cannot create
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
