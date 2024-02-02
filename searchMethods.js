// methods/searchMethods.js
const searchByKeyword = (products, keyword) => {
  const result = products.filter((product) => {
    if (product.title.match(keyword) || product.description.match(keyword)) {
      return true;
    }
    return false;
  });

  return result;
};

module.exports = searchByKeyword;
