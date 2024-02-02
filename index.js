// index.js
const fetchData = require('./fetchData.js');
const filterByCategory = require('./filterMethods.js');
const { sortByPriceAsc, sortByPriceDesc } = require('./sortMethods.js');
const searchByKeyword = require('./searchMethods.js');
const calculateAveragePrice = require('./calculationMethods.js');
const displayProductDetails = require('./productDetails.js');

const url = 'https://fakestoreapi.com/products';

async function main() {
  // Fetch data from the API
  const products = await fetchData(url);

  // Ensure that data is fetched successfully
  if (!products) {
    console.log('Failed to fetch data from the API. Exiting...');
    return;
  }

  // Filter products by category
  const filteredProducts = filterByCategory(products, 'electronics');

  // Sort products by price in ascending order
  const sortedAscProducts = sortByPriceAsc(filteredProducts);

  // Sort products by price in descending order
  const sortedDescProducts = sortByPriceDesc(filteredProducts);

  // Search for products by keyword
  const keywordSearchResult = searchByKeyword(products, 'gaming');
  console.log('Search Result:', keywordSearchResult);

  // Display detailed information for a selected product
  const selectedProduct = sortedAscProducts[0];
  displayProductDetails(selectedProduct);

  // Calculate and log the average price of all products
  const averagePrice = calculateAveragePrice(products);
  console.log('Average Price:', averagePrice);
}

main();
