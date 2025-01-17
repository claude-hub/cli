/**
  给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
  计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
  你可以认为每种硬币的数量是无限的。
  示例 1：
  输入：coins = [1, 2, 5], amount = 11
  输出：3 
  解释：11 = 5 + 5 + 1
  示例 2：
  输入：coins = [2], amount = 3
  输出：-1
  示例 3：
  输入：coins = [1], amount = 0
  输出：0
  提示：
  1 <= coins.length <= 12
  1 <= coins[i] <= 231 - 1
  0 <= amount <= 104
 */

// 可以转换为青蛙跳台阶，每次可以跳 1,2,5 个台阶。
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      // 子问题拆解
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));

console.log(coinChange([2, 5, 10, 1], 27));
