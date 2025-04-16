var dataUrl = 'https://api.unsplash.com/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30';

var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

// Get images from Unsplash and Flickr
function getImg() {
  // Fetch from Unsplash
  var xhrUnsplash = new XMLHttpRequest();
  xhrUnsplash.open('GET', dataUrl, true);
  xhrUnsplash.send();

  xhrUnsplash.onload = function() {
    var data = JSON.parse(this.responseText);
    add_new_img(data, 'unsplash');
  };

  // Fetch from Flickr
  var xhrFlickr = new XMLHttpRequest();
  xhrFlickr.open('GET', imglist_Url, true);
  xhrFlickr.send();

  xhrFlickr.onload = function() {
    var flickrData = JSON.parse(this.responseText);
    add_new_img(flickrData.photos.photo, 'flickr');
  }
}

// Add new images to the gallery
function add_new_img(dataset, source) {
  var gal = document.getElementById("gallery");

  dataset.forEach(function(item) {
    var img = document.createElement("img");
    
    // For Unsplash, get the small image URL
    if (source === 'unsplash') {
      img.setAttribute("src", item.urls.small);
    }
    
    // For Flickr, construct the small image URL
    if (source === 'flickr') {
      var smallImgUrl = `https://farm${item.farm}.static.flickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
      img.setAttribute("src", smallImgUrl);
    }

    gal.appendChild(img);
  });
}