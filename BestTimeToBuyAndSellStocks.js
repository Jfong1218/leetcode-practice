/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let min = Math.max(prices)
    let maxProfit = 0
    for (i = 0; i < prices.length; i++){
        if (prices[i] < min ) {
            min = prices[i]
        }
        else if (prices[i]-min > maxProfit){
            maxProfit = prices[i] - min
        }
    }
    return maxProfit
};