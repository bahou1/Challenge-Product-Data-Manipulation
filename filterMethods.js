// methods/filterMethods.js
function filterByCategory(products, category) {
  return products.filter(product => product.category === category);
}

module.exports = filterByCategory;
