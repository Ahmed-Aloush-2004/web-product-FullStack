function bestTimeToBuyandSellStock(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
  
    for (let i = 0; i < prices.length; i++) {
      // Track the lowest price we've encountered so far
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else {
        // Calculate the profit if we sell on the current day
        const profit = prices[i] - minPrice;
        // Update the maximum profit if this is better than what we had
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }
  
    return maxProfit;
  }
  
  console.log(bestTimeToBuyandSellStock([7, 10, 5, 3, 7, 4]));
  