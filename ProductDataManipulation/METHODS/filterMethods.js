//this function filters products by category
function filterByCategory(products, category2){
    const productFilter = products.filter(product => product.category == category2)
    console.log(productFilter)
}