#🛍️ Product Manager a data manipulation program made fully with javascript, it can help manage data in an efficient way.

This JavaScript project fetches product data from the url provided by the user, applies various array methods, and organizes the code into distinct folders.

## 🚀 Quick Start & How To Use!

1. In your terminal, after you have installed git, clone the Repository:
   
   git clone https://github.com/bahou1/Challenge-Product-Data-Manipulation/
   cd ProductDataManipulation
2. install node.js
3. run the program!
   node index.js
This will execute the main file that contains all the functions, fetching data from the API, and demonstrating various the various functions that perform multiple manipulations.

📂 Program Structure
API Fetching (api/fetchData.js)
    fetchData(url): Function to fetch data from the FakeStoreAPI using async/await.
🛠️ Methods (methods Folder)
    Filter Methods (methods/filterMethods.js):
        filterByCategory(products, category): Function to filter products based on the specified category.
    Sort Methods (methods/sortMethods.js):
        sortByPriceAsc(products): Function to sort products by price in ascending order.
        sortByPriceDesc(products): Function to sort products by price in descending order.
    Search Methods (methods/searchMethods.js):
        searchByKeyword(products, keyword): Function to search for products containing the given keyword in their title or description.
    Calculation Methods (methods/calculationMethods.js):
        calculateAveragePrice(products): Function to calculate and return the average price of all products.

🌈 Other Files
    index.js:
        Main script importing functions from the respective folders and demonstrating various functionalities.

🚀 Bonus 
    Consider writing unit tests for your functions.
    
🤝 Issues and Contributions
I am open to suggestions, criticism, anything really.
