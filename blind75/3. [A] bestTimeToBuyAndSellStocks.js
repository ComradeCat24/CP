/** link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *	category : Arrays
 *	difficulty : Normal
 *
 * * desc : You are given an array prices where prices[i] is the price of a given stock on
 * * 		the ith day. You want to maximize your profit by choosing a single day to buy
 * * 		one stock and choosing a different day in the future to sell that stock.  Return
 * * 		the maximum profit you can achieve from this transaction. If you cannot achieve
 * * 		any profit, return 0.
 *
 * @input : prices = [7,1,5,3,6,4]
 * @output : 5
 * @explaination : Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *				Note that buying on day 2 and selling on day 1 is not allowed
 *				because you must buy before you sell.
 *
 * @input : prices = [7,6,4,3,1]
 * @output : 0
 * @explaination : In this case, no transactions are done and the max profit = 0.
 *
 * ?constraints:
 *		1 <= prices.length <= 105
 *		0 <= prices[i] <= 104
 *
 */

// Better Solution - O(n)
const maxProfit = (prices) => {
	if (!prices) return 0;

	while (prices.length > 1) {
		let min = Math.min(...prices);
		let minIdx = prices.indexOf(min);

		console.log(prices.slice(minIdx + 1));

		let temp = prices.slice(minIdx + 1);
		let max = Math.max(...temp);
		let maxIdx = temp.indexOf(max);

		if (min === max) return 0;
		if (maxIdx < minIdx || maxIdx === -1) {
			prices.splice(minIdx, 1);
		} else if (maxIdx > minIdx) {
			return max - min;
		}
	}
	return 0;
};

// trial cases
maxProfit([2, 1, 2, 0, 1]);
// maxProfit([1]); // 0
// maxProfit([7, 1, 5, 3, 6, 4]); //5
// maxProfit([7, 6, 4, 3, 1]); // 0
// maxProfit([3, 3]); // 0
// maxProfit([2, 4, 1]); // 2

/** Workspace
 *[1] *
 *
 *
 *
 *
 *
 *
 *
 *
 */
