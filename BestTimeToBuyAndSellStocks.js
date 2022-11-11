/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let Profit = 0
    for (i = 1; i < prices.length; i++){
        if (prices[i] > prices[i-1] ) {
            Profit += (prices[i] - prices[i-1])
        }
    }
    return Profit
};

prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))