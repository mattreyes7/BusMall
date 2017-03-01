
var productImageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productsArray = [];

function Products(name) {
  this.name = name;
  this.path = './assets/' + name + '.jpg';
  this.votes = 0;
  productsArray.push(this)

}
// builds products with iffe
(function() {
  for(var i = 0; i < productImageNames.length; i++) {
    new Products(productImageNames[i]);
  }
})();

var tracker = {
  imageOneEl: document.getElementById('imageOne'),
  imageTwoEl: document.getElementById('imageTwo'),
  imageThreeEl: document.getElementById('imageThree'),
  showResultsEl:document.getElementById('show-results'),
  resultsEl: document.getElementById('results'),
  imageContainerEl: document.getElementById('image-container'),
  imageObjOne: null,
  imageObjTwo: null,
  imageObjThree: null,
  clicks: 1,


  getRandomIndex: function() {
    return Math.floor(Math.random() * productsArray.length);
  },

  // function that displays 3 random non repeating images
  displayImages: function() {
    this.imageObjOne = productsArray[this.getRandomIndex()];
    this.imageObjTwo = productsArray[this.getRandomIndex()];
    this.imageObjThree = productsArray[this.getRandomIndex()];

    if(this.imageObjOne === this.imageObjTwo || this.imageObjOne === this.imageObjThree || this.imageObjTwo === this.imageObjThree){
      this.displayImages();
    }
    this.imageOneEl.src = this.imageObjOne.path;
    this.imageOneEl.id = this.imageObjOne.name;

    this.imageTwoEl.src = this.imageObjTwo.path;
    this.imageTwoEl.id = this.imageObjTwo.name;

    this.imageThreeEl.src = this.imageObjThree.path;
    this.imageThreeEl.id = this.imageObjThree.name;

  },

  checkClicks: function() {
    console.log(this.clicks);
    if(this.clicks > 14) {
      this.imageContainerEl.removeEventListener('click', this.clickHandler);
      this.showResultsEl.addEventListener('click', function(e) {
        e.preventDefault();
        tracker.renderResults();
      });
    }

  },

  clickHandler: function(e) {
    tracker.checkClicks();
    if (
      e.target.id === tracker.imageObjOne.name ||
      e.target.id ===  tracker.imageObjTwo.name ||
      e.target.id === tracker.imageObjThree.name
    ) {
      tracker.clicks++;
      tracker.tallyVotes(e.target.id);
      tracker.displayImages();
    }

  },

  tallyVotes: function(elId) {
    for(var i in productsArray) {
      if(elId === productsArray[i].name) {
        productsArray[i].votes +=1;
        console.log(productsArray[i]);
        break;
      }
    }
  },

  renderResults: function() {
    // create an UL
    // create each of the LIs and add content
    // append each LI to the UL
    // append the Ul to the document
    var ulEl = document.createElement('ul');

    for(var i in productsArray) {
      var liEl = document.createElement('li');
      liEl.textContent = productsArray[i].name + ': ' + productsArray[i].votes;
      ulEl.appendChild(liEl);
    }

    this.resultsEl.appendChild(ulEl);
  }
};

tracker.imageContainerEl.addEventListener('click', tracker.clickHandler);
tracker.displayImages();
