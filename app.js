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

var productArray = [];

var randomImage = function () {
  return Math.floor(Math.random() * (productPath.length+1));
};

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
