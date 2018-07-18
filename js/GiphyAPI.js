function removeChildren(obj) {
  while (obj.hasChildNodes()) {
    obj.removeChild(obj.firstChild);
  }
}

document.getElementById("selector").addEventListener("change", function() {
  var xhr = new XMLHttpRequest();
  var searchTerm = document.getElementById("selector").value;
  var limit = 3;
  var url =
    "http://api.giphy.com/v1/gifs/search?q=" +
    searchTerm +
    "&api_key=dc6zaTOxFJmzC" +
    "&limit=" +
    limit;
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(JSON.parse(xhr.responseText).data);
      var gifDrop = document.getElementById("gifsCon");
      removeChildren(gifDrop);
      var gifz = JSON.parse(xhr.responseText).data;
      gifz.forEach(function(item) {
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", item.images.downsized_medium.url);
        gifDrop.appendChild(imgEl);
      });
      // var giphyObj = JSON.parse(xhr.responseText);
      // var gifDrop = document.querySelector(".gif");
      // var link = giphyObj.data[3].images.downsized_medium.url;
      // gifDrop.src = link;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
});
// function() {
//   var xhr = new XMLHttpRequest();
//   var GoTchar = "game of thrones charachter"
//   var url = "http://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC";
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       var giphyObj = JSON.parse(xhr.responseText);
//       var gifDrop = document.querySelector(".gif");
//       var link = giphyObj.data[3].images.downsized_medium.url;
//       gifDrop.src = link;
//     }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// };
