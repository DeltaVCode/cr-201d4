'use strict';

var productNames = ['bag', 'banana', 'boots', 'pen', 'shark', 'sweep', 'unicorn'];
var allProducts = []
var totalClicks = 0;

function Product(name){
  this.name = name;
  this.imageUrl = '../imgs/' + name + '.jpg'
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
};

function createProducts() {
  for(var i = 0; i < productNames.length; i++){
    new Product(productNames[i]);
  }
  console.table(allProducts);
};

function randomProduct(){
  return Math.floor(Math.random() * allProducts.length);
}

function render() {
  var productsSection = document.getElementById('products');
  productsSection.innerHTML = '';


  var randomProducts = [];
  randomProducts.push(randomProduct());
  randomProducts.push(randomProduct());
  while(randomProducts[0] === randomProducts[1]){
    randomProducts[1] = randomProduct();
  }
  randomProducts.push(randomProduct());
  while(randomProducts[2] === randomProducts[0] || randomProducts[2] === randomProducts[1]){
    randomProducts[2] = randomProduct();
  }

  console.log(randomProducts);
  
  for(var i = 0; i < 3; i++){
    allProducts[randomProducts[i]].views++
    var img = document.createElement('img');
    img.setAttribute('src', allProducts[randomProducts[i]].imageUrl)
    img.setAttribute('data-name', allProducts[randomProducts[i]].name);
    img.addEventListener('click', handleVote);
    productsSection.appendChild(img);
  };
};

function handleVote(event) {
  var productName = event.target.dataset.name;
  for(var i = 0; i < allProducts.length; i++){
    if(allProducts[i].name === productName){
      allProducts[i].clicks++
      totalClicks++
      render();
    }
  }
  if(totalClicks === 25){
    var imgs = document.getElementsByTagName('img');
    for(var i = 0; i < imgs.length; i++){
      imgs[i].removeEventListener('click', handleVote);
    }
    displayResults();
  }
  console.table(allProducts);
  console.log('Total Clicks', totalClicks);
  
}

function displayResults(){
  var results = document.getElementById('results');
  var ul = document.createElement('ul');
  for(var i = 0; i < allProducts.length; i++){
    var product = allProducts[i];
    var li = document.createElement('li');
    li.textContent = product.name + ' has ' + product.clicks + ' votes.';
    ul.appendChild(li);
  }
  results.appendChild(ul);
}

createProducts();
render();
