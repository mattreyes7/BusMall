// var products = ['bag',
// 'banana',
// 'bathroom',
// 'boots',
// 'breakfast',
// 'bubblegum',
// 'chair', 'cthulu',
// 'dog-duck',
// 'dragon',
// 'pen',
// 'pet-sweep',
// 'scissors',
// 'shark',
// 'sweep',
// 'tauntaun',
// 'unicorn',
// 'usb',
// 'water-can',
// 'wine-glass'];

// var productArray = [];
//
// function Product(name, path) {
//   this.name = name;
//   this.path = path;
// }
//
// var bag = new Product('bag','assets/bag.jpg');
// var banana = new Product('banana','assets/banana.jpg');
// var boots = new Product('boots','assets/boots.jpg');
// var breakfast = new Product('breakfast','assets/breakfast.jpg');
// var bubblegum = new Product('bubblegum','assets/bubblegum.jpg');
// var chair = new Product('chair','assets/chair.jpg');
// var cthulu = new Product('cthulu', 'assets/cthulu.jpg');
// var dogDuck= new Product('dog-duck', 'assets/dog-duck.jpg');
// var dragon= new Product('dragon', 'assets/dragon.jpg');
// var pen= new Product('pen', 'assets/pen.jpg');
// var petSweep= new Product('pet-sweep', 'assets/pet-sweep.jpg');
// var scissors= new Product('scissors', 'assets/scissors.jpg');
// var shark= new Product('shark', 'assets/shark.jpg');
// var sweep= new Product('sweep', 'assets/sweep.jpg');
// var tauntaun= new Product('tauntaun', 'assets/tauntaun.jpg');
// var unicorn= new Product('unicorn', 'assets/unicorn.jpg');
// var usb= new Product('usb', 'assets/usb.jpg');
// var waterCan= new Product('water-can', 'assets/water-can.jpg');
// var wineGlass= new Product('wine-glass', 'assets/wine-glass.jpg');

var productPath = [ 'assets/bag.jpg',
'assets/banana.jpg',
'assets/bathroom.jpg',
'assets/boots.jpg',
'assets/breakfast.jpg',
'assets/bubblegum.jpg',
'assets/chair.jpg',
'assets/cthulhu.jpg',
'assets/dog-duck.jpg',
'assets/dragon.jpg',
'assets/pen.jpg',
'assets/pet-sweep.jpg',
'assets/scissors.jpg',
'assets/shark.jpg',
'assets/sweep.jpg',
'assets/tauntaun.jpg',
'assets/unicorn.jpg',
'assets/usb.jpg',
'assets/water-can.jpg',
'assets/wine-glass.jpg'];


var randomImage = function () {
  return Math.floor(Math.random() * (productPath.length));
};

function showImages() {
  var imageOneBox = document.getElementById('imageOne');
  var showImageOne = document.createElement('img');
  showImageOne.src = productPath[randomImage()];
  imageOneBox.appendChild(showImageOne);


  var imageTwoBox = document.getElementById('imageTwo');
  var showImageTwo = document.createElement('img');
  showImageTwo.src = productPath[randomImage()];
  imageTwoBox.appendChild(showImageTwo);


  var imageThreeBox = document.getElementById('imageThree');
  var showImageThree = document.createElement('img');
  showImageThree.src = productPath[randomImage()];
  imageThreeBox.appendChild(showImageThree);
}

var imageContainer = document.getElementById('image-container');
imageContainer.addEventListener('click', function(){
  showImages()
// refreshes pictures
var refreshImages = document.getElementsByTagName('img');
for (var i = 0; i < refreshImages.length-1; i++) {
  refreshImages[0].parentNode.removeChild(refreshImages[0]);
}
});

// function tracker() {
//   var imageContainer = document.getElementById('image-container');
//   imageContainer.addEventListener('click', function(){
//     showImages()
//   });
//
//   var refresh = document.getElementById('image-container');
//   while(productPath.length > 0) {
//     productPath[0].parentNode.removeChild(productPath[0]);
//   }
