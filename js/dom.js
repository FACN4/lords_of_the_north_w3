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
  setActiveClass(houseBtnId, characterBtnId);
  fillOptions(selector, lists.objectOfHouses);
  house = true;
});

addListener(characterBtnId, "click", function(event) {
  setActiveClass(characterBtnId, houseBtnId);
  fillOptions(selector, lists.objectOfCharacters);
  house = false;
});

//This function adds and removes the active class when a button is selected.

function setActiveClass(id1, id2) {
  var activeElement = document.querySelector(id1);
  var nonActive = document.querySelector(id2);
  nonActive.classList.remove("active");
  activeElement.classList.add("active");
}

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
  getGotApi(id, house);
  getGifApi(name);
});

// Function to generate textContent for the description paragraph

function dynamicTextGeneration(response) {
  var textParagraph = document.getElementById("textContent");
  if (house) {
    textParagraph.textContent =
      "The " +
      response.name +
      " known by the words '" +
      response.words +
      "' was founded during the " +
      response.founded +
      ". The house has " +
      response.swornMembers.length +
      " sworn members and they are based in " +
      response.region +
      ".";
  } else {
    textParagraph.textContent = response.name;
    if (response.aliases[0].length > 0) {
      textParagraph.textContent += " AKA " + response.aliases[0];
    }
    if (response.culture.length > 0) {
      textParagraph.textContent +=
        " part of the " + response.culture + " culture";
    }
    if (response.born.length > 0) {
      textParagraph.textContent += " was born " + response.born;
    }
    textParagraph.textContent += ".";
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
