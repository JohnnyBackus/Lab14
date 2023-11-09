'use strict';

function AppState() {
  this.allProducts = [];
}
function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}
// // TODO: Fill in this instance method to save product data to local storage
AppState.prototype.saveToLocalStorage = function () {
  if (this.allProducts.length > 0) {

  const products = JSON.stringify(this.allProducts);
  console.log(products);
  localStorage.setItem('appState', products);
  }
}
// console.log('read', AppState)

// // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
AppState.prototype.loadItems = function () {
  let productsString = localStorage.getItem('appState');
  if (productsString) {
    let parsedProducts = JSON.parse(productsString);

    
    for (let i = 0; i < parsedProducts.length; i++) {
      this.allProducts.push(new Product(parsedProducts[i].name));
    }
    console.log(productsString);
    console.log(parsedProducts);
    // for (let i = 0; i < products.length; i++) {
    // if (products[i] == allProducts[i]); {
    //   this.allProducts.push
    // }
  }
  else {
    this.instantiateProducts();
  }
}



let myAppState = new AppState ();
myAppState.instantiateProducts ();
myAppState.loadItems ();
myAppState.saveToLocalStorage ();