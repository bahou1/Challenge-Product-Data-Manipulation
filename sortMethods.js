// methods/sortMethods.js
function sortByPriceAsc(products) {
  return products.sort((a, b) => a.price - b.price);
}

function sortByPriceDesc(products) {
  return products.sort((a, b) => b.price - a.price);
}

module.exports = { sortByPriceAsc, sortByPriceDesc };
