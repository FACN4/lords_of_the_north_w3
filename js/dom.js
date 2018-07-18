// Function to add listener to elements
function addListener(selector, eventName, callback) {
  document.querySelector(selector).addEventListener(eventName, callback);
}

var houseBtnId = "#houseButton";
var characterBtnId = "#characterButton";
var selector = document.getElementById("selector");
var house;
// Listener to trigger filling of houses & characters

addListener(houseBtnId, "click", function(event) {
  var element = document.querySelector(houseBtnId);
  fillOptions(selector, lists.objectOfHouses);
  var house = true;
});

addListener(characterBtnId, "click", function(event) {
  var element = document.querySelector(characterBtnId);
  fillOptions(selector, lists.objectOfCharacters);
  var house = false;
});

// Function to remove children before filling. Used by GIFs at the bottom before pulling new API request and by fill options function

function removeChildren(obj) {
  while (obj.hasChildNodes()) {
    obj.removeChild(obj.firstChild);
  }
}

function addDefaultOption(element) {
  var opt = document.createElement("option");
  opt.text = "Select house or character";
  opt.disabled = true;
  element.appendChild(opt);
  opt.selectedIndex;
}

// Function to fill the options of chosen box type (character or house)

function fillOptions(element, obj) {
  removeChildren(element);
  addDefaultOption(element);
  for (let key in obj) {
    var opt = document.createElement("option");
    opt.text = key;
    opt.label = key;
    element.appendChild(opt);
  }
}

// Listener to call API based on change to selector

addListener("#selector", "change", function(event) {
  var name = document.getElementById("selector").value;
  if (house) {
    var id = lists.objectOfHouses[document.getElementById("selector").value];
  } else {
    var id =
      lists.objectOfCharacters[document.getElementById("selector").value];
  }
  getGotApi(id);
  getGifApi(name);
});

// Function to generate textContent for the description paragraph

function dynamicTextGeneration(response) {
  var textParagraph = document.getElementById("textContent");
  if (house) {
    textParagraph.textContent =
      "The " + response.name + " was founded during the " + response.name;
  } else {
    textParagraph.textContent =
      response.name + " was founded during the " + response.name;
  }
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
