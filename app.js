
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productArray = [];
var ctx = document.getElementById('chart').getContext('2d');

function Product(name,path,votes) {
  this.name = name;
  this.path = './assets/' + name + '.jpg';
  this.votes = 0;
  productArray.push(this)

}

// builds products with IFFE
(function() {
  for(var i = 0; i < productNames.length; i++) {
    new Product(productNames[i]);
  }
})();

var tracker = {
  imageOneEl: document.getElementById('imageOne'),
  imageTwoEl: document.getElementById('imageTwo'),
  imageThreeEl: document.getElementById('imageThree'),
  showResultsEl:document.getElementById('show-results'),
  renderChartEl:document.getElementById('render-chart'),
  resultsEl: document.getElementById('results'),
  imageContainerEl: document.getElementById('image-container'),
  imageObjOne: null,
  imageObjTwo: null,
  imageObjThree: null,
  clicks: 0,


  getRandomIndex: function() {
    return Math.floor(Math.random() * productArray.length);
  },

// chooses random index from product array

  chooseThreeRandomIndices: function() {
    this.imageObjOne = productArray[this.getRandomIndex()];
    this.imageObjTwo = productArray[this.getRandomIndex()];
    this.imageObjThree = productArray[this.getRandomIndex()];
    if(this.imageObjOne === this.imageObjTwo ||
       this.imageObjOne === this.imageObjThree ||
       this.imageObjTwo === this.imageObjThree
     ) {
      this.displayImages();
    }

  },

  // use random indices in function that displays 3 random non repeating images

  displayImages: function() {
    tracker.chooseThreeRandomIndices();

    this.imageOneEl.src = this.imageObjOne.path;
    this.imageOneEl.id = this.imageObjOne.name;

    this.imageTwoEl.src = this.imageObjTwo.path;
    this.imageTwoEl.id = this.imageObjTwo.name;

    this.imageThreeEl.src = this.imageObjThree.path;
    this.imageThreeEl.id = this.imageObjThree.name;

  },

// disables image click at 15 clicks

  limitClicks: function() {
    console.log(this.clicks);
    if(this.clicks >= 15) {
      this.imageContainerEl.removeEventListener('click', this.clicker);
      this.showResultsEl.addEventListener('click', function(e) {
        e.preventDefault();
        tracker.renderResults();
      });
    }

  },

  clicker: function(e) {
    tracker.limitClicks();

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
// translate a clicked image into product object that gets one vote incremented
  tallyVotes: function(elId) {
    for(var i = 0; i < productNames.length; i++) {
      if(elId === productArray[i].name) {
        productArray[i].votes +=1;
        console.log(productArray[i]);
        break;
      }
    }
  },
//  collecting total votes on each picture and pushing to votesByProduct
  renderChart: function() {
    var votesByProduct = [];
    for (var i = 0; i < productArray.length; i++) {

      votesByProduct.push(productArray[i].votes);
    }



    var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: votesByProduct,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderWidth: 1
      }]
    }
  })
},


  renderResults: function() {
    // create an UL
    // create each of the LIs and add content
    // append each LI to the UL
    // append the Ul to the document

    var ulEl = document.createElement('ul');

    for(var i = 0; i < productArray.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = productArray[i].name + ': ' + productArray[i].votes;
      ulEl.appendChild(liEl);
      tracker.renderChart();
    }
    this.resultsEl.appendChild(ulEl);
  },
};
tracker.imageContainerEl.addEventListener('click', tracker.clicker);
tracker.displayImages();
