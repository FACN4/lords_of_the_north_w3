
console.log(lists);
function addListener(selector, eventName, callback) {
  document.querySelector(selector).addEventListener(eventName, callback);
}

function fetch(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function() {
    if (xhr.status === 200 && xhr.readyState == 4) {
      var response = JSON.parse(xhr.responseText);
      return callback(response);
    }
  });

  xhr.open("GET", url);
  xhr.send();
}

var houseBtnId = "#houseButton";
var characterBtnId = "#characterButton";
var selector = document.getElementById("selector");

// listener for houses
addListener(houseBtnId, "click", function(event) {
  var element = document.querySelector(houseBtnId);
  fillOptionForHouses(selector, lists.objectOfHouses);

  var url =
    "https://www.anapioficeandfire.com/api/" +
    element.name +
    lists.objectOfHouses[element.value];

  fetch(url, function(response) {


    //    add listener to the dropdown value and the adds
    // this command :-document.getElementById("textContent").text = fillContentOfHouse(response);
  });
});


// listener for characters
addListener(characterBtnId, "click", function(event) {
  var element = document.querySelector(characterBtnId);
  var url =
    "https://www.anapioficeandfire.com/api/" +
    element.name +
    objectOfCharacters[element.value];

  fetch(url, function(response) {
    // ... do something with the response
    // 1. loop the object
    // 2. get : gender,culture, titles, aliases, playedBy
  });
});

//returns the needed properties from the house object
function fillContentOfHouse(obj) {
  var str = "";
  str += obj.region + "<br>";
  str += obj.coatOfArms + "<br>";
  str += obj.titles + "<br>";
  str += obj.ancestralWeapons + "<br>";
  return str;
}
//takes the object of houses from the assets file and adds the house names to the  list
function fillOptionForHouses(element, obj) {
  for (let key in obj) {
    console.log(typeof key);
    var opt = document.createElement("option");
    opt.text = key;
    element.appendChild(opt);
  }
}
