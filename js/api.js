// Generic API function

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

// GoT API call

function getGotApi(key) {
  var url = "https://www.anapioficeandfire.com/api/houses/" + key;
  fetch(url, function(response) {
    dynamicTextGeneration(response);
  });
}

// GIF API call

function getGifApi(key) {
  var limit = 3;
  var url =
    "http://api.giphy.com/v1/gifs/search?q=" +
    key +
    "&api_key=dc6zaTOxFJmzC" +
    "&limit=" +
    limit;
  fetch(url, function(response) {
    gifUpdater(response);
  });
}
