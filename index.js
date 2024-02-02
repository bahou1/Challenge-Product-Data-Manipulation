const fetchData = require('./fetchData.js');
const filterByCategory = require('./filterMethods.js');
const { sortByPriceAsc, sortByPriceDesc } = require('./sortMethods.js');
const searchByKeyword = require('./searchMethods.js');
const calculateAveragePrice = require('./calculationMethods.js');
const displayProductDetails = require('./productDetails.js');

const url = 'https://fakestoreapi.com/products';

async function main() {
  // Fetching Data from the API
  const products = await fetchData(url);

  // Testing if the Data has been succesfully captured
  if (!products) {
    console.log('Failed to fetch data from the API. Exiting...');
    return;
  }

  // Filtering products by category
  const filteredProducts = filterByCategory(products, 'electronics');

  // Sorting  products by price in ascending order
  const sortedAscProducts = sortByPriceAsc(filteredProducts);

  // Sorting products by price in descending order
  const sortedDescProducts = sortByPriceDesc(filteredProducts);

  // Searching for products by keyword
  const keywordSearchResult = searchByKeyword(products, 'gaming');
  console.log('Search Result:', keywordSearchResult);

  // Displaying detailed information for a selected product
  const selectedProduct = sortedAscProducts[0];
  displayProductDetails(selectedProduct);

  // Calculating and log the average price of all products
  const averagePrice = calculateAveragePrice(products);
  console.log('Average Price:', averagePrice);
}

