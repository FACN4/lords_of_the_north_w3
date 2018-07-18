// Function to add listener to elements
function addListener(selector, eventName, callback) {
  document.querySelector(selector).addEventListener(eventName, callback);
}

var houseBtnId = "#houseButton";
var characterBtnId = "#characterButton";
var selector = document.getElementById("selector");

// Listener to trigger filling of houses & characters

addListener(houseBtnId, "click", function(event) {
  var element = document.querySelector(houseBtnId);
  fillOptions(selector, lists.objectOfHouses);
});

addListener(characterBtnId, "click", function(event) {
  var element = document.querySelector(characterBtnId);
  fillOptions(selector, lists.objectOfCharacters);
});

// Function to remove children before filling. Used by GIFs at the bottom before pulling new API request and by fill options function

function removeChildren(obj) {
  while (obj.hasChildNodes()) {
    obj.removeChild(obj.firstChild);
  }
}

// Function to fill the options of chosen box type (character or house)

function fillOptions(element, obj) {
  removeChildren(element);
  for (let key in obj) {
    var opt = document.createElement("option");
    opt.text = key;
    element.appendChild(opt);
  }
}

// Listener to call API based on change to selector

addListener("#selector", "change", function(event) {
  var key = lists.objectOfHouses[document.getElementById("selector").value];
  getGotApi(key);
  getGifApi(key);
});

// Function to generate textContent for the description paragraph

function dynamicTextGeneration(response) {
  var textParagraph = document.getElementById("textContent");
  textParagraph.textContent =
    "The " + response.name + " was founded during the " + response.name;
}

// Function to generate GIFs for the gif section

function gifUpdater(response) {
  var gifDrop = document.getElementById("gifsCon");
  removeChildren(gifDrop);
  response.data.forEach(function(item) {
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", item.images.downsized_medium.url);
    gifDrop.appendChild(imgEl);
  });
}
