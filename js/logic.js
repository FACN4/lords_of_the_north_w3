function addListener(selector, eventName, callback) {
  document.querySelector(selector).addEventListener(eventName, callback);
}

function fetch(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState == 4) {
      var response = JSON.parse(xhr.responseText);
      return callback(response);
    }
  };

  xhr.open("GET", url);
  xhr.send();
}

var houseBtnId = "#houseButton";
var characterBtnId = "#characterButton";
var selector = document.getElementById("selector");

//takes the object of houses from the assets file and adds the house names to the  list

function removeChildren(obj) {
  while (obj.hasChildNodes()) {
    obj.removeChild(obj.firstChild);
  }
}

function fillOptions(element, obj) {
  removeChildren(element);
  for (let key in obj) {
    var opt = document.createElement("option");
    opt.text = key;
    element.appendChild(opt);
  }
}

// listener for houses
addListener(houseBtnId, "click", function(event) {
  var element = document.querySelector(houseBtnId);
  fillOptions(selector, lists.objectOfHouses);

  var url =
    "https://www.anapioficeandfire.com/api/" +
    element.name +
    lists.objectOfHouses[element.value];

  fetch(url, function(response) {
    //    add listener to the dropdown value and the adds
    // this command :-document.getElementById("textContent").text = fillContentOfHouse(response);
  });
});

addListener("#selector", "change", function(event) {
  var key = lists.objectOfHouses[document.getElementById("selector").value];
  var url = "https://www.anapioficeandfire.com/api/houses/" + key;
  document.getElementById("selector").value;
  fetch(url, function(response) {
    dynamicTextGeneration(response);
  });

  // listener for characters
  addListener(characterBtnId, "click", function(event) {
    var element = document.querySelector(characterBtnId);
    fillOptions(selector, lists.objectOfCharacters);
  });
});

function dynamicTextGeneration(response) {
  var textParagraph = document.getElementById("textContent");
  textParagraph.textContent =
    "The " + response.name + " was founded during the " + response.name;
}

//returns the needed properties from the house object
function fillContentOfHouse(obj) {
  var str = "";
  str += obj.region + "<br>";
  str += obj.coatOfArms + "<br>";
  str += obj.titles + "<br>";
  str += obj.ancestralWeapons + "<br>";
  return str;
}
