async function fetchData() {
    fetch('https://fakestoreapi.com/products')
    .then((Response) => Response.json())
    .then((product)=>console.log(product))
    .catch((error)=>console.log('error :', error.message))
  }
  fetchData()
