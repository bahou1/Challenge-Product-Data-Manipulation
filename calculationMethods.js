// methods/calculationMethods.js
function calculateAveragePrice(products) {
  const total = products.reduce((sum, product) => sum + product.price, 0);
  return total / products.length;
}

module.exports = calculateAveragePrice;
